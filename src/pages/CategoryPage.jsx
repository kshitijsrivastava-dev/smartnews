import { useParams } from 'react-router-dom'
import { getCategoryBySlug } from '../data/categories.js'
import NewsFeed from '../components/news/NewsFeed.jsx'
import NotFoundPage from './NotFoundPage.jsx'

function CategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)

  if (!category) {
    return <NotFoundPage />
  }

  return (
    <section className="page-section">
      <p className="page-placeholder__eyebrow">Section</p>
      <h1>{category.label}</h1>
      <NewsFeed
        category={category.slug}
        emptyMessage={`No ${category.label.toLowerCase()} stories are available right now.`}
      />
    </section>
  )
}

export default CategoryPage
