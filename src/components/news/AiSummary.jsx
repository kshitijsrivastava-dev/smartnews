import { useState } from 'react'

import { summarizeArticle } from '../../services/summarizeApi.js'
import {
  getCachedSummary,
  setCachedSummary,
} from '../../utils/summaryCache.js'

function AiSummary({ article }) {
  const selectedLanguage =
    localStorage.getItem('smartnews-language') ?? 'en'

  const cached = getCachedSummary(article.url, selectedLanguage)

  const [open, setOpen] = useState(false)
  const [summary, setSummary] = useState(cached)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleClick() {
    if (summary) {
      setOpen((current) => !current)
      return
    }

    setOpen(true)
    setLoading(true)
    setError('')

    try {
      const result = await summarizeArticle(article, selectedLanguage)

      setSummary(result.summary)
      setCachedSummary(
        article.url,
        selectedLanguage,
        result.summary,
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

          {!loading && !error && summary ? <p>{summary}</p> : null}
        </div>
      ) : null}
    </div>
  )
}

export default AiSummary