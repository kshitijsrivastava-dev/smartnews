import NewsFeed from '../components/news/NewsFeed.jsx'
import { useTranslation } from '../hooks/useLanguage.js'

function HomePage() {
  const { t } = useTranslation()
  return (
    <section className="page-section">
      <p className="page-placeholder__eyebrow">{t('home.latest')}</p>
      <h1>{t('home.title')}</h1>
      <NewsFeed emptyMessage={t('empty.latest')} />
    </section>
  )
}

export default HomePage
