import { languages } from '../src/data/languages.js'

const GEMINI_MODEL = 'gemini-3.5-flash'

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

function buildPrompt({ title, description, content, language }) {
  return [
    `Summarize the following news article in 3 to 5 concise, factual sentences in ${language}.`,
    `Write the entire summary in ${language}.`,
    'Use only the provided title, description, and content.',
    'Do not invent facts, quotes, or details that are not present.',
    'If the source text is truncated, summarize only what is available.',
    'Return plain text only. Do not use markdown headings or bullet points.',
    '',
    `Title: ${title || 'Unavailable'}`,
    `Description: ${description || 'Unavailable'}`,
    `Content: ${content || 'Unavailable'}`,
  ].join('\n')
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

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: buildPrompt({
        title,
        description,
        content,
        language,
      }),
    })

    const summary = readSummaryText(response)

    if (!summary) {
      sendJson(res, 502, {
        error: 'Gemini returned an empty summary',
      })
      return
    }

    sendJson(res, 200, { summary })
  } catch (error) {
    console.error('Gemini summarize failed:', error?.message || error)

    sendJson(res, 502, {
      error: 'Unable to generate a summary right now',
    })
  }
}