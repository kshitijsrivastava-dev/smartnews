import { languages } from '../src/data/languages.js'

const GEMINI_MODEL = 'gemini-3.5-flash'
const MAX_ATTEMPTS = 3
const RETRY_DELAY_MS = 600

export const config = {
  runtime: 'nodejs',
  maxDuration: 30,
}

function sendJson(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.status(status).send(JSON.stringify(body))
}

function readBody(req) {
  if (!req.body) {
    return null
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return null
    }
  }

  if (typeof req.body === 'object') {
    return req.body
  }

  return null
}

function readText(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function getLanguageName(code) {
  return (
    languages.find((language) => language.code === code)?.name ??
    'English'
  )
}

function readSummaryText(response) {
  const direct = readText(response?.text)

  if (direct) {
    return direct
  }

  const parts = response?.candidates?.[0]?.content?.parts

  if (!Array.isArray(parts)) {
    return ''
  }

  return parts
    .map((part) => readText(part?.text))
    .filter(Boolean)
    .join('\n')
}

function parseBulletPoints(rawText) {
  return rawText
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[-*•]\s*/, '').trim())
    .filter(Boolean)
}

function buildPrompt({ title, description, content, language }) {
  return [
    `Summarize the following news article as 4 to 6 concise, factual bullet points in ${language}.`,
    `Write the entire summary in ${language}.`,
    'Use only the provided title, description, and content.',
    'Do not invent facts, quotes, or details that are not present.',
    'If the source text is truncated, summarize only what is available.',
    'Return each point on its own line, starting with a hyphen (-).',
    'Do not use markdown headings, bold text, or numbering.',
    '',
    `Title: ${title || 'Unavailable'}`,
    `Description: ${description || 'Unavailable'}`,
    `Content: ${content || 'Unavailable'}`,
  ].join('\n')
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function isQuotaOrRateLimitError(error) {
  const message = String(error?.message || error || '').toLowerCase()
  const status = error?.status ?? error?.code

  return (
    status === 429 ||
    message.includes('429') ||
    message.includes('quota') ||
    message.includes('rate limit') ||
    message.includes('resource_exhausted')
  )
}

async function generateWithRetry(ai, prompt) {
  let lastError = null

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      })

      const summary = readSummaryText(response)

      if (summary) {
        return summary
      }

      lastError = new Error('Empty response from Gemini')
    } catch (error) {
      lastError = error
      console.error(
        `Gemini attempt ${attempt} failed:`,
        error?.message || error,
      )

      if (isQuotaOrRateLimitError(error)) {
        // Retrying won't help until the quota window resets — fail fast
        // instead of burning more requests.
        throw error
      }
    }

    if (attempt < MAX_ATTEMPTS) {
      await delay(RETRY_DELAY_MS * attempt)
    }
  }

  throw lastError ?? new Error('Gemini request failed')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    sendJson(res, 500, { error: 'Summary service is not configured' })
    return
  }

  const body = readBody(req)

  if (!body) {
    sendJson(res, 400, { error: 'Request body must be JSON' })
    return
  }

  const title = readText(body.title)
  const description = readText(body.description)
  const content = readText(body.content)

  const languageCode = readText(body.language) || 'en'
  const language = getLanguageName(languageCode)

  if (!title && !description && !content) {
    sendJson(res, 400, {
      error: 'Article text is required to generate a summary',
    })
    return
  }

  try {
    const { GoogleGenAI } = await import('@google/genai/node')

    const ai = new GoogleGenAI({ apiKey })

    const prompt = buildPrompt({ title, description, content, language })

    const summary = await generateWithRetry(ai, prompt)

    const points = parseBulletPoints(summary)

    sendJson(res, 200, {
      summary,
      points: points.length > 0 ? points : [summary],
    })
  } catch (error) {
    console.error('Gemini summarize failed:', error?.message || error)

    sendJson(res, 502, {
      error:
        'The summary service is briefly busy. Please try again in a moment.',
    })
  }
}
