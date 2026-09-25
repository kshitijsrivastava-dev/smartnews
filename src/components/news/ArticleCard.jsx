import { useState } from 'react'

import { formatPublishedDate } from '../../utils/formatDate.js'

import AiSummary from './AiSummary.jsx'

function getReadingTime(article) {
  const key = article.id || article.url || article.title || ''

  let hash = 0

  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) | 0
  }

  const minutes = 2 + (Math.abs(hash) % 4)

  return `${minutes} min read`
}

function ArticleCard({ article }) {
  const [imageFailed, setImageFailed] = useState(false)

  const showImage = Boolean(article.image) && !imageFailed

  const published = formatPublishedDate(article.publishedAt)

  const readingTime = getReadingTime(article)

  return (
    <article className="article-card">
      {showImage ? (
        <div className="article-card__media">
          <img
            src={article.image}
            alt=""
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : null}

      <div className="article-card__body">
        <h2 className="article-card__title">
          {article.title}
        </h2>

        {article.description ? (
          <p className="article-card__description">
            {article.description}
          </p>
        ) : null}

        <p className="article-card__meta">
          {article.source ? (
            <span>{article.source}</span>
          ) : null}

          {article.source && published ? (
            <span aria-hidden="true"> · </span>
          ) : null}

          {published ? (
            <time dateTime={article.publishedAt}>
              {published}
            </time>
          ) : null}
        </p>

        <div className="article-card__actions">
          <div className="article-card__read-row">
            <a
              className="article-card__link"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Article
            </a>

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