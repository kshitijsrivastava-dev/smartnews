import { useEffect, useState } from 'react'

import { getTopHeadlines, searchArticles } from '../services/newsService.js'

export function useNews({
  category,
  q,
  country,
  language = 'en',
} = {}) {
  const [articles, setArticles] = useState([])

  const [error, setError] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const request = q
      ? searchArticles(q, { country, language })
      : getTopHeadlines({ category, country, language })

    request
      .then((result) => {
        if (cancelled) {
          return
        }

        setArticles(result.articles)
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
    }
  }, [category, q, country, language])

  return { articles, error, loading }
}