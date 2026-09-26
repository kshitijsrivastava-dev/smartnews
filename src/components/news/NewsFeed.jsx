import { useEffect, useState } from 'react'

import { useNews } from '../../hooks/useNews.js'

import ArticleList from './ArticleList.jsx'

import EmptyState from '../ui/EmptyState.jsx'

import ErrorMessage from '../ui/ErrorMessage.jsx'

import Spinner from '../ui/Spinner.jsx'

function NewsResults({
  category,
  q,
  country,
  language,
  emptyMessage,
  onRetry,
}) {
  const {
    articles,
    error,
    loading,
    loadingMore,
    hasMore,
    loadMore,
  } = useNews({
    category,
    q,
    country,
    language,
  })

  if (loading) {
    return <Spinner />
  }

  if (error && articles.length === 0) {
    return (
      <ErrorMessage
        message={error}
        onRetry={onRetry}
      />
    )
  }

  if (articles.length === 0) {
    return (
      <EmptyState message={emptyMessage} />
    )
  }

  return (
    <>
      <ArticleList articles={articles} />

      {error && articles.length > 0 ? (
        <p className="news-feed__load-error">
          {error}
        </p>
      ) : null}

      {hasMore ? (
        <div className="news-feed__load-more">
          <button
            type="button"
            className="news-feed__load-more-button"
            onClick={loadMore}
            disabled={loadingMore}
          >
            {loadingMore
              ? 'Loading...'
              : 'Load More'}
          </button>
        </div>
      ) : null}
    </>
  )
}

function NewsFeed({
  category,
  q,
  emptyMessage,
}) {
  const [attempt, setAttempt] = useState(0)

  const [language, setLanguage] = useState(
    () =>
      localStorage.getItem(
        'smartnews-language',
      ) ?? 'en',
  )

  const [country, setCountry] = useState(
    () =>
      localStorage.getItem(
        'smartnews-country',
      ) ?? 'in',
  )

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(
        localStorage.getItem(
          'smartnews-language',
        ) ?? 'en',
      )
    }

    window.addEventListener(
      'smartnews-language-change',
      handleLanguageChange,
    )

    return () => {
      window.removeEventListener(
        'smartnews-language-change',
        handleLanguageChange,
      )
    }
  }, [])

  useEffect(() => {
    const handleCountryChange = () => {
      setCountry(
        localStorage.getItem(
          'smartnews-country',
        ) ?? 'in',
      )
    }

    window.addEventListener(
      'smartnews-country-change',
      handleCountryChange,
    )

    return () => {
      window.removeEventListener(
        'smartnews-country-change',
        handleCountryChange,
      )
    }
  }, [])

  return (
    <NewsResults
      key={`${category ?? ''}-${q ?? ''}-${country}-${language}-${attempt}`}
      category={category}
      q={q}
      country={country}
      language={language}
      emptyMessage={emptyMessage}
      onRetry={() =>
        setAttempt(
          (value) => value + 1,
        )
      }
    />
  )
}

export default NewsFeed