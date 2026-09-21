import NewsFeed from '../components/news/NewsFeed.jsx'

function HomePage() {
  return (
    <section className="page-section">
      <p className="page-placeholder__eyebrow">Latest</p>
      <h1>Today’s briefing</h1>
      <NewsFeed emptyMessage="No headlines are available right now. Please try again later." />
    </section>
  )
}

export default HomePage
