import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getTopHeadlines,
  NEWS_PAGE_SIZE,
  searchArticles,
} from '../services/newsService.js'

function requestNews({ category, q, country, language, page }) {
  return q
    ? searchArticles(q, { country, language, page })
    : getTopHeadlines({ category, country, language, page })
}

function hasAnotherPage(result, page) {
  const articles = Array.isArray(result.articles) ? result.articles : []
  const totalArticles = Number(result.totalArticles) || 0

  if (articles.length === 0) {
    return false
  }

  return totalArticles > 0
    ? totalArticles > page * NEWS_PAGE_SIZE
    : articles.length >= NEWS_PAGE_SIZE
}

export function useNews({
  category,
  q,
  country,
  language = 'en',
} = {}) {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const pageRef = useRef(1)
  const requestVersionRef = useRef(0)
  const loadingMoreRef = useRef(false)

  useEffect(() => {
    let cancelled = false
    const requestVersion = ++requestVersionRef.current

    pageRef.current = 1
    loadingMoreRef.current = false

    requestNews({ category, q, country, language, page: 1 })
      .then((result) => {
        if (cancelled) {
          return
        }

        const firstPage = Array.isArray(result.articles)
          ? result.articles.slice(0, NEWS_PAGE_SIZE)
          : []

        setArticles(firstPage)
        setHasMore(hasAnotherPage({ ...result, articles: firstPage }, 1))
        setError(null)
        setLoading(false)
      })
      .catch((requestError) => {
        if (cancelled) {
          return
        }

        setArticles([])
        setError(requestError.message || 'Failed to load news')
        setLoading(false)
      })

    return () => {
      cancelled = true
      if (requestVersionRef.current === requestVersion) {
        requestVersionRef.current += 1
      }
    }
  }, [category, q, country, language])

  const loadMore = useCallback(async () => {
    if (loadingMoreRef.current || loading || !hasMore) {
      return
    }

    loadingMoreRef.current = true
    setLoadingMore(true)
    setError(null)

    const requestVersion = requestVersionRef.current
    const nextPage = pageRef.current + 1

    try {
      const result = await requestNews({
        category,
        q,
        country,
        language,
        page: nextPage,
      })

      if (requestVersionRef.current !== requestVersion) {
        return
      }

      const newArticles = Array.isArray(result.articles)
        ? result.articles
        : []

      setArticles((currentArticles) => {
        const existingIds = new Set(
          currentArticles.map((article) => article.id),
        )
        const uniqueArticles = newArticles.filter(
          (article) => !existingIds.has(article.id),
        )

        return [...currentArticles, ...uniqueArticles]
      })

      pageRef.current = nextPage
      setHasMore(hasAnotherPage(result, nextPage))
    } catch (requestError) {
      if (requestVersionRef.current === requestVersion) {
        setError(requestError.message || 'Failed to load more articles')
      }
    } finally {
      if (requestVersionRef.current === requestVersion) {
        loadingMoreRef.current = false
        setLoadingMore(false)
      }
    }
  }, [category, q, country, language, loading, hasMore])

  return {
    articles,
    error,
    loading,
    loadingMore,
    hasMore,
    loadMore,
  }
}
