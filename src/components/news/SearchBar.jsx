import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

function SearchBar() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) {
      navigate('/search')
      return
    }
    navigate(`/search?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <label className="visually-hidden" htmlFor="site-search">
        Search articles
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search headlines"
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
