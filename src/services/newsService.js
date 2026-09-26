import { toGNewsCategory } from '../data/categories.js'
import { mockArticles } from '../data/mockArticles.js'

const MOCK_PAGE_SIZE = 9

function createArticleId(url) {
  return encodeURIComponent(url)
}

function normalizeArticle(article, category = '') {
  const url =
    typeof article?.url === 'string'
      ? article.url
      : ''

  const title =
    typeof article?.title === 'string'
      ? article.title.trim()
      : ''

  return {
    id: url ? createArticleId(url) : '',
    title,
    description:
      typeof article?.description === 'string'
        ? article.description
        : '',
    content:
      typeof article?.content === 'string'
        ? article.content
        : '',
    source: article?.source?.name ?? '',
    publishedAt:
      typeof article?.publishedAt === 'string'
        ? article.publishedAt
        : '',
    image:
      typeof article?.image === 'string'
        ? article.image
        : '',
    url,
    category,
  }
}

function getDevelopmentArticles({
  category,
  q,
  page = 1,
} = {}) {
  const normalizedQuery = q?.trim().toLowerCase()

  const normalizedCategory =
    category === 'nation'
      ? 'national'
      : category === 'world'
        ? 'international'
        : category

  const articles = mockArticles.filter((article) => {
    if (normalizedQuery) {
      const searchableText =
        `${article.title} ${article.description} ${article.content}`
          .toLowerCase()

      return searchableText.includes(normalizedQuery)
    }

    return (
      !normalizedCategory ||
      article.category === normalizedCategory
    )
  })

  const totalArticles = articles.length

  const safePage =
    Number.isFinite(page) && page > 0
      ? Math.floor(page)
      : 1

  const start =
    (safePage - 1) * MOCK_PAGE_SIZE

  const paginatedArticles = articles.slice(
    start,
    start + MOCK_PAGE_SIZE,
  )

  return {
    totalArticles,
    articles: paginatedArticles,
  }
}

async function fetchNews({
  category,
  q,
  country,
  language = 'en',
  displayCategory,
  page = 1,
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

  params.set('page', String(page))

  const query = params.toString()

  try {
    const response = await fetch(
      query
        ? `/api/news?${query}`
        : '/api/news',
    )

    const payload =
      await response.json().catch(() => null)

    if (!response.ok) {
      const message =
        payload?.error ||
        payload?.message ||
        payload?.errors?.[0] ||
        'Failed to load news'

      throw new Error(message)
    }

    const articles = Array.isArray(
      payload?.articles,
    )
      ? payload.articles
      : []

    const categoryValue =
      displayCategory || category || ''

    return {
      totalArticles:
        payload?.totalArticles ??
        articles.length,

      articles: articles
        .map((article) =>
          normalizeArticle(
            article,
            categoryValue,
          ),
        )
        .filter(
          (article) =>
            article.title &&
            article.url,
        ),
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      return getDevelopmentArticles({
        category:
          displayCategory || category,
        q,
        page,
      })
    }

    throw error
  }
}

export function getTopHeadlines({
  category,
  country,
  language = 'en',
  page = 1,
} = {}) {
  const gnewsCategory = category
    ? toGNewsCategory(category) || category
    : ''

  return fetchNews({
    category: gnewsCategory,
    country,
    language,
    page,
    displayCategory:
      category ?? '',
  })
}

export function searchArticles(
  q,
  {
    country,
    language = 'en',
    page = 1,
  } = {},
) {
  return fetchNews({
    q,
    country,
    language,
    page,
  })
}

export {
  normalizeArticle,
  fetchNews,
}