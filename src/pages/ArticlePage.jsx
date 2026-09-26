import { Link, useLocation, useParams } from 'react-router-dom'
import { formatPublishedDate } from '../utils/formatDate.js'
import { useTranslation } from '../hooks/useLanguage.js'
import AiSummary from '../components/news/AiSummary.jsx'
import '../styles/article-detail.css'

function readStoredArticle(id) {
  try {
    const possibleKeys = [id, encodeURIComponent(id)]

    for (const key of possibleKeys) {
      const storedArticle = window.sessionStorage.getItem(
        `smartnews-article:${key}`,
      )

      if (storedArticle) {
        return JSON.parse(storedArticle)
      }
    }

    return null
  } catch {
    return null
  }
}

function getReadingTime(article, t) {
  const key = article.id || article.url || article.title || ''
  let hash = 0

  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) | 0
  }

  return t('minutes', { minutes: 2 + (Math.abs(hash) % 4) })
}

function ArticlePage() {
  const { id } = useParams()
  const location = useLocation()
  const article = location.state?.article ?? readStoredArticle(id)
  const { language, t } = useTranslation()

  if (!article) {
    return (
      <section className="article-detail article-detail--missing">
        <p className="article-detail__eyebrow">{t('storyUnavailable')}</p>
        <h1>{t('couldNotLoad')}</h1>
        <p>{t('returnLatest')}</p>
        <Link className="article-detail__back-link" to="/">
          {t('backLatest')}
        </Link>
      </section>
    )
  }

  const published = formatPublishedDate(article.publishedAt, language)
  const readingTime = getReadingTime(article, t)

  return (
    <article className="article-detail">
      <header className="article-detail__header">
        <div className="article-detail__metadata" aria-label={t('articleDetails')}>
          {article.source ? <span>{article.source}</span> : null}
          {article.source && published ? <span aria-hidden="true"> · </span> : null}
          {published ? (
            <time dateTime={article.publishedAt}>{published}</time>
          ) : null}
          {article.source || published ? (
            <span aria-hidden="true"> · </span>
          ) : null}
          <span>{readingTime}</span>
        </div>
        <p className="article-detail__eyebrow">
          {article.category ? t(`cat.${article.category}`) : t('latestStory')}
        </p>
        <h1 className="article-detail__title">{article.title}</h1>
        {article.description ? (
          <p className="article-detail__description">{article.description}</p>
        ) : null}
      </header>

      {article.image ? (
        <figure className="article-detail__hero">
          <img src={article.image} alt="" />
        </figure>
      ) : null}

      <div className="article-detail__reading-layout">
        <section className="article-detail__summary" aria-label={t('aiSummary')}>
          <AiSummary key={language} article={article} />
        </section>

        {article.content ? (
          <div className="article-detail__content">
            <p>{article.content}</p>
          </div>
        ) : null}

        <a
          className="article-detail__publisher-link"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('readAt', { publisher: article.source || t('publisher') })}
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  )
}

export default ArticlePage
