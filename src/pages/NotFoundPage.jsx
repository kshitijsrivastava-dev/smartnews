import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useLanguage.js'

function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <section className="page-placeholder page-placeholder--error">
      <p className="page-placeholder__eyebrow">404</p>
      <h1>{t('notFound')}</h1>
      <p>{t('notFoundInfo')}</p>
      <p>
        <Link to="/" className="page-placeholder__link">
          {t('backHome')}
        </Link>
      </p>
    </section>
  )
}

export default NotFoundPage
