import ArticleCard from './ArticleCard.jsx'

function ArticleList({ articles }) {
  return (
    <ul className="article-list">
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
