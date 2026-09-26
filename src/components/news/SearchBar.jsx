import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from '../../hooks/useLanguage.js'

function SearchBar() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '')
  const { t } = useTranslation()

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
        {t('search.label')}
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t('search.placeholder')}
        autoComplete="off"
      />
      <button type="submit">{t('search.button')}</button>
    </form>
  )
}

export default SearchBar
