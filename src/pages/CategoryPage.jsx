import { useParams } from 'react-router-dom'
import { getCategoryBySlug } from '../data/categories.js'
import NewsFeed from '../components/news/NewsFeed.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { useTranslation } from '../hooks/useLanguage.js'

function CategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const { t } = useTranslation()

  if (!category) {
    return <NotFoundPage />
  }

  const label = t(`cat.${category.slug}`)

  return (
    <section className="page-section">
      <p className="page-placeholder__eyebrow">{t('section')}</p>
      <h1>{label}</h1>
      <NewsFeed
        category={category.slug}
        emptyMessage={t('empty.category', { category: label.toLocaleLowerCase() })}
      />
    </section>
  )
}

export default CategoryPage
