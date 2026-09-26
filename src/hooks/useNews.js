import { useEffect, useState } from 'react'

import {
  getTopHeadlines,
  searchArticles,
} from '../services/newsService.js'

const DISPLAY_SIZE = 9
const API_PAGE_SIZE = 10

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
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    let cancelled = false

    const request = q
      ? searchArticles(q, {
          country,
          language,
          page,
        })
      : getTopHeadlines({
          category,
          country,
          language,
          page,
        })

    if (page === 1) {
      setLoading(true)
      setError(null)
    } else {
      setLoadingMore(true)
      setError(null)
    }

    request
      .then((result) => {
        if (cancelled) {
          return
        }

        const newArticles = Array.isArray(
          result.articles,
        )
          ? result.articles
          : []

        const totalArticles =
          Number(result.totalArticles) || 0

        if (page === 1) {
          const firstNine = newArticles.slice(
            0,
            DISPLAY_SIZE,
          )

          setArticles(firstNine)

          setHasMore(
            newArticles.length > DISPLAY_SIZE ||
              totalArticles > firstNine.length,
          )
        } else {
          setArticles((currentArticles) => {
            const existingIds = new Set(
              currentArticles.map(
                (article) => article.id,
              ),
            )

            const uniqueArticles =
              newArticles.filter(
                (article) =>
                  !existingIds.has(article.id),
              )

            const combined = [
              ...currentArticles,
              ...uniqueArticles,
            ]

            const visibleArticles =
              combined.slice(
                0,
                Math.floor(
                  combined.length / DISPLAY_SIZE,
                ) * DISPLAY_SIZE,
              )

            setHasMore(
              totalArticles >
                visibleArticles.length ||
                combined.length >
                  visibleArticles.length,
            )

            return visibleArticles
          })
        }

        setError(null)
        setLoading(false)
        setLoadingMore(false)
      })
      .catch((requestError) => {
        if (cancelled) {
          return
        }

        setError(
          requestError.message ||
            (page === 1
              ? 'Failed to load news'
              : 'Failed to load more news'),
        )

        if (page === 1) {
          setArticles([])
          setLoading(false)
        }

        setLoadingMore(false)
      })

    return () => {
      cancelled = true
    }
  }, [
    category,
    q,
    country,
    language,
    page,
  ])

  function loadMore() {
    if (
      loadingMore ||
      loading ||
      !hasMore
    ) {
      return
    }

    setPage(
      (currentPage) => currentPage + 1,
    )
  }

  return {
    articles,
    error,
    loading,
    loadingMore,
    hasMore,
    loadMore,
  }
}