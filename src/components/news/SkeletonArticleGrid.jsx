function SkeletonArticleGrid({ label }) {
  return (
    <div
      className="article-skeleton-status"
      role="status"
      aria-label={label}
      aria-busy="true"
    >
      <ul className="article-list article-list--skeleton" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <li key={index}>
            <article className="article-card article-card--skeleton">
              <div className="article-card__media">
                <span className="skeleton-block skeleton-block--image" />
              </div>
              <div className="article-card__body">
                <div className="skeleton-group skeleton-group--title">
                  <span className="skeleton-block skeleton-line" />
                  <span className="skeleton-block skeleton-line skeleton-line--short" />
                </div>
                <div className="skeleton-group skeleton-group--description">
                  <span className="skeleton-block skeleton-line" />
                  <span className="skeleton-block skeleton-line" />
                  <span className="skeleton-block skeleton-line skeleton-line--medium" />
                </div>
                <span className="skeleton-block skeleton-line skeleton-line--meta" />
                <div className="article-card__actions">
                  <div className="article-card__read-row">
                    <span className="skeleton-block skeleton-action" />
                    <span className="skeleton-block skeleton-reading-time" />
                  </div>
                  <span className="skeleton-block skeleton-summary-action" />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkeletonArticleGrid
