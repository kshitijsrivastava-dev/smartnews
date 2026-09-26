import { useSearchParams } from 'react-router-dom'
import NewsFeed from '../components/news/NewsFeed.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import { useTranslation } from '../hooks/useLanguage.js'

function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')?.trim() ?? ''
  const { t } = useTranslation()

  return (
    <section className="page-section">
      <p className="page-placeholder__eyebrow">{t('search.eyebrow')}</p>
      <h1>{query ? t('search.results', { query }) : t('search.title')}</h1>
      {query ? (
        <NewsFeed
          q={query}
          emptyMessage={t('search.none', { query })}
        />
      ) : (
        <EmptyState message={t('search.empty')} />
      )}
    </section>
  )
}

export default SearchPage
