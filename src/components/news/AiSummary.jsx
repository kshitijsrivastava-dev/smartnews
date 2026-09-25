import { useState } from 'react'

import { summarizeArticle } from '../../services/summarizeApi.js'
import {
  getCachedSummary,
  setCachedSummary,
} from '../../utils/summaryCache.js'

function readCachedPoints(rawCached) {
  if (!rawCached) {
    return null
  }

  try {
    const parsed = JSON.parse(rawCached)
    return Array.isArray(parsed) ? parsed : [String(parsed)]
  } catch {
    // Backward compatibility: older cache entries stored plain text
    return [rawCached]
  }
}

function AiSummary({ article }) {
  const selectedLanguage =
    localStorage.getItem('smartnews-language') ?? 'en'

  const cached = getCachedSummary(article.url, selectedLanguage)

  const [open, setOpen] = useState(false)
  const [points, setPoints] = useState(() => readCachedPoints(cached))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleClick() {
    if (points) {
      setOpen((current) => !current)
      return
    }

    setOpen(true)
    setLoading(true)
    setError('')

    try {
      const result = await summarizeArticle(article, selectedLanguage)
      const resolvedPoints =
        Array.isArray(result.points) && result.points.length > 0
          ? result.points
          : [result.summary]

      setPoints(resolvedPoints)
      setCachedSummary(
        article.url,
        selectedLanguage,
        JSON.stringify(resolvedPoints),
      )
    } catch (requestError) {
      setError(requestError.message || 'Failed to generate summary')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ai-summary">
      <button
        type="button"
        className="article-card__summary-button"
        onClick={handleClick}
        disabled={loading}
        aria-expanded={open}
      >
        AI Summary
      </button>

      {open ? (
        <div className="ai-summary__panel" aria-live="polite">
          {loading ? <p>Generating summary…</p> : null}

          {error ? (
            <p className="ai-summary__error" role="alert">
              {error}
            </p>
          ) : null}

          {!loading && !error && points ? (
            <ul className="ai-summary__points">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default AiSummary
