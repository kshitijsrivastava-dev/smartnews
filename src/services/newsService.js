import { toGNewsCategory } from '../data/categories.js'

function createArticleId(url) {
  return encodeURIComponent(url)
}

function normalizeArticle(article, category = '') {
  const url = typeof article?.url === 'string' ? article.url : ''
  const title = typeof article?.title === 'string' ? article.title.trim() : ''

  return {
    id: url ? createArticleId(url) : '',
    title,
    description:
      typeof article?.description === 'string' ? article.description : '',
    content: typeof article?.content === 'string' ? article.content : '',
    source: article?.source?.name ?? '',
    publishedAt:
      typeof article?.publishedAt === 'string' ? article.publishedAt : '',
    image: typeof article?.image === 'string' ? article.image : '',
    url,
    category,
  }
}

async function fetchNews({
  category,
  q,
  country,
  language = 'en',
  displayCategory,
} = {}) {
  const params = new URLSearchParams()

  if (category) {
    params.set('category', category)
  }

  if (q) {
    params.set('q', q)
  }

  if (country) {
    params.set('country', country)
  }

  if (language) {
    params.set('lang', language)
  }

  const query = params.toString()

  const response = await fetch(query ? `/api/news?${query}` : '/api/news')

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    const message =
      payload?.error ||
      payload?.message ||
      payload?.errors?.[0] ||
      'Failed to load news'

    throw new Error(message)
  }

  const articles = Array.isArray(payload?.articles) ? payload.articles : []
  const categoryValue = displayCategory || category || ''

  return {
    totalArticles: payload?.totalArticles ?? articles.length,
    articles: articles
      .map((article) => normalizeArticle(article, categoryValue))
      .filter((article) => article.title && article.url),
  }
}

export function getTopHeadlines({
  category,
  country,
  language = 'en',
} = {}) {
  const gnewsCategory = category ? toGNewsCategory(category) || category : ''

  return fetchNews({
    category: gnewsCategory,
    country,
    language,
    displayCategory: category ?? '',
  })
}

export function searchArticles(q, {
  country,
  language = 'en',
} = {}) {
  return fetchNews({
    q,
    country,
    language,
  })
}

export { normalizeArticle, fetchNews }