const GNEWS_BASE_URL = 'https://gnews.io/api/v4'
const SUCCESS_CACHE_CONTROL = 's-maxage=600, stale-while-revalidate=60'

function readQueryValue(value) {
  if (Array.isArray(value)) {
    return typeof value[0] === 'string' ? value[0].trim() : ''
  }

  return typeof value === 'string' ? value.trim() : ''
}

function sendJson(res, status, body, { cache = false } = {}) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    cache ? SUCCESS_CACHE_CONTROL : 'no-store',
  )
  res.status(status).send(JSON.stringify(body))
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    sendJson(res, 405, { error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.GNEWS_API_KEY

  if (!apiKey) {
    sendJson(res, 500, { error: 'News service is not configured' })
    return
  }

  const category = readQueryValue(req.query?.category)
  const q = readQueryValue(req.query?.q)
  const country = readQueryValue(req.query?.country)
  const language = readQueryValue(req.query?.lang) || 'en'

  const endpoint = q ? 'search' : 'top-headlines'

  const gnewsUrl = new URL(`${GNEWS_BASE_URL}/${endpoint}`)

  gnewsUrl.searchParams.set('apikey', apiKey)
  gnewsUrl.searchParams.set('lang', language)

  if (q) {
    gnewsUrl.searchParams.set('q', q)
  } else if (category) {
    gnewsUrl.searchParams.set('category', category)
  }

  if (country) {
    gnewsUrl.searchParams.set('country', country)
  }

  try {
    const gnewsResponse = await fetch(gnewsUrl)
    const payload = await gnewsResponse.json().catch(() => null)

    if (!gnewsResponse.ok) {
      sendJson(
        res,
        gnewsResponse.status,
        payload ?? { error: 'Failed to fetch news' },
      )
      return
    }

    sendJson(res, 200, payload, { cache: true })
  } catch {
    sendJson(res, 502, { error: 'Unable to reach the news provider' })
  }
}