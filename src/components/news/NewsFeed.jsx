import { useEffect, useState } from 'react'

import { useNews } from '../../hooks/useNews.js'

import ArticleList from './ArticleList.jsx'
import EmptyState from '../ui/EmptyState.jsx'
import ErrorMessage from '../ui/ErrorMessage.jsx'
import Spinner from '../ui/Spinner.jsx'

function NewsResults({ category, q, language, emptyMessage, onRetry }) {
  const { articles, error, loading } = useNews({
    category,
    q,
    language,
  })

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />
  }

  if (articles.length === 0) {
    return <EmptyState message={emptyMessage} />
  }

  return <ArticleList articles={articles} />
}

function NewsFeed({ category, q, emptyMessage }) {
  const [attempt, setAttempt] = useState(0)
  const [language, setLanguage] = useState(
    () => localStorage.getItem('smartnews-language') ?? 'en',
  )

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('smartnews-language') ?? 'en')
    }

    window.addEventListener('smartnews-language-change', handleLanguageChange)

    return () => {
      window.removeEventListener(
        'smartnews-language-change',
        handleLanguageChange,
      )
    }
  }, [])

  return (
    <NewsResults
      key={`${category ?? ''}-${q ?? ''}-${language}-${attempt}`}
      category={category}
      q={q}
      language={language}
      emptyMessage={emptyMessage}
      onRetry={() => setAttempt((value) => value + 1)}
    />
  )
}

export default NewsFeed