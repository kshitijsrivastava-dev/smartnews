import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page-placeholder page-placeholder--error">
      <p className="page-placeholder__eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        That route does not exist. Return to the latest briefing or pick a
        section from the masthead.
      </p>
      <p>
        <Link to="/" className="page-placeholder__link">
          Back to home
        </Link>
      </p>
    </section>
  )
}

export default NotFoundPage
