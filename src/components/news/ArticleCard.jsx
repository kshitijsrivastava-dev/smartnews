import { useState } from 'react'

import { Link } from 'react-router-dom'

import { formatPublishedDate } from '../../utils/formatDate.js'

import AiSummary from './AiSummary.jsx'
import { useTranslation } from '../../hooks/useLanguage.js'

function getReadingTime(article, t) {
  const key = article.id || article.url || article.title || ''
  let hash = 0

  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0
  }

  const minutes = 2 + (Math.abs(hash) % 4)

  return t('minutes', { minutes })
}

function ArticleCard({ article }) {
  const [imageFailed, setImageFailed] = useState(false)
  const { language, t } = useTranslation()

  const showImage = Boolean(article.image) && !imageFailed
  const published = formatPublishedDate(article.publishedAt, language)
  const readingTime = getReadingTime(article, t)
  const articleId =
    article.id || encodeURIComponent(article.url || article.title)

  function handleArticleClick() {
    try {
      window.sessionStorage.setItem(
        `smartnews-article:${articleId}`,
        JSON.stringify(article),
      )
    } catch {
      // React Router state still makes the article available for this navigation.
    }
  }

  return (
    <article className="article-card">
      <div className="article-card__media">
        {showImage ? (
          <img
            src={article.image}
            alt=""
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="article-card__media-placeholder"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="article-card__body">
        <h2 className="article-card__title">{article.title}</h2>

        {article.description ? (
          <p className="article-card__description">
            {article.description}
          </p>
        ) : null}

        <p className="article-card__meta">
          {article.source ? <span>{article.source}</span> : null}

          {article.source && published ? (
            <span aria-hidden="true"> · </span>
          ) : null}

          {published ? (
            <time dateTime={article.publishedAt}>{published}</time>
          ) : null}
        </p>

        <div className="article-card__actions">
          <div className="article-card__read-row">
            <Link
              className="article-card__link"
              to={`/article/${encodeURIComponent(articleId)}`}
              state={{ article }}
              onClick={handleArticleClick}
            >
              {t('read')}
            </Link>

            <span className="article-card__reading-time">
              {readingTime}
            </span>
          </div>

          <AiSummary article={article} />
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
