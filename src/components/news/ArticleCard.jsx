import { useState } from 'react'
import { formatPublishedDate } from '../../utils/formatDate.js'
import AiSummary from './AiSummary.jsx'

function ArticleCard({ article }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(article.image) && !imageFailed
  const published = formatPublishedDate(article.publishedAt)

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
        <h2 className="article-card__title">{article.title}</h2>
        {article.description ? (
          <p className="article-card__description">{article.description}</p>
        ) : null}
        <p className="article-card__meta">
          {article.source ? <span>{article.source}</span> : null}
          {article.source && published ? <span aria-hidden="true"> · </span> : null}
          {published ? <time dateTime={article.publishedAt}>{published}</time> : null}
        </p>
        <div className="article-card__actions">
          <a
            className="article-card__link"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Article
          </a>
          <AiSummary article={article} />
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
