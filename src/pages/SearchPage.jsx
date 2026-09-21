import { useSearchParams } from 'react-router-dom'
import NewsFeed from '../components/news/NewsFeed.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'

function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')?.trim() ?? ''

  return (
    <section className="page-section">
      <p className="page-placeholder__eyebrow">Search</p>
      <h1>{query ? `Results for “${query}”` : 'Search SmartNews'}</h1>
      {query ? (
        <NewsFeed
          q={query}
          emptyMessage={`No stories matched “${query}”. Try a different topic.`}
        />
      ) : (
        <EmptyState message="Enter a headline or topic in the search bar to look through stories." />
      )}
    </section>
  )
}

export default SearchPage
