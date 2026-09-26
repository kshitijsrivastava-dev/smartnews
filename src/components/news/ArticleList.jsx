import { useState } from 'react'

import ArticleCard from './ArticleCard.jsx'

const ARTICLES_PER_PAGE = 9

function ArticleList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE)

  const visibleArticles = articles.slice(0, visibleCount)

  const hasMore = visibleCount < articles.length

  function handleLoadMore() {
    setVisibleCount((current) =>
      Math.min(current + ARTICLES_PER_PAGE, articles.length),
    )
  }

  return (
    <>
      <ul className="article-list">
        {visibleArticles.map((article) => (
          <li key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div className="article-list__load-more">
          <button
            type="button"
            className="load-more-button"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      ) : null}
    </>
  )
}

export default ArticleList