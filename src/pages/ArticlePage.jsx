import { useParams } from 'react-router-dom'

function ArticlePage() {
  const { id } = useParams()

  return (
    <section className="page-placeholder">
      <p className="page-placeholder__eyebrow">Article</p>
      <h1>Story detail</h1>
      <p>
        The full article view, original-source link, and AI summary will live
        here. Placeholder id:{' '}
        <span className="page-placeholder__id">{id}</span>
      </p>
    </section>
  )
}

export default ArticlePage
