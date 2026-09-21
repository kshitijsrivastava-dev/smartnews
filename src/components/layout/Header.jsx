import { useEffect, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'

import CategoryNav from '../news/CategoryNav.jsx'

import SearchBar from '../news/SearchBar.jsx'

import ThemeToggle from '../ui/ThemeToggle.jsx'

import { languages } from '../../data/languages.js'

import { countries } from '../../data/countries.js'

function Header() {
  const [searchParams] = useSearchParams()

  const searchKey = searchParams.get('q') ?? ''

  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem('smartnews-language') ?? 'en',
  )

  const [selectedCountry, setSelectedCountry] = useState(
    () => localStorage.getItem('smartnews-country') ?? 'in',
  )

  useEffect(() => {
    const handleLanguageChange = () => {
      setSelectedLanguage(
        localStorage.getItem('smartnews-language') ?? 'en',
      )
    }

    window.addEventListener('smartnews-language-change', handleLanguageChange)

    return () => {
      window.removeEventListener(
        'smartnews-language-change',
        handleLanguageChange,
      )
    }
  }, [])

  useEffect(() => {
    const handleCountryChange = () => {
      setSelectedCountry(
        localStorage.getItem('smartnews-country') ?? 'in',
      )
    }

    window.addEventListener('smartnews-country-change', handleCountryChange)

    return () => {
      window.removeEventListener(
        'smartnews-country-change',
        handleCountryChange,
      )
    }
  }, [])

  function handleLanguageChange(event) {
    const language = event.target.value

    localStorage.setItem('smartnews-language', language)

    setSelectedLanguage(language)

    window.dispatchEvent(new Event('smartnews-language-change'))
  }

  function handleCountryChange(event) {
    const country = event.target.value

    localStorage.setItem('smartnews-country', country)

    setSelectedCountry(country)

    window.dispatchEvent(new Event('smartnews-country-change'))
  }

  return (
    <header className="site-header">
      <div className="site-header__top">
        <p className="site-header__kicker">AI-powered news briefing</p>

        <Link to="/" className="site-header__brand">
          SmartNews
        </Link>

        <div className="site-header__tools">
          <label className="country-selector">
            <span className="sr-only">Country</span>

            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              aria-label="Select country"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>

          <label className="language-selector">
            <span className="sr-only">Language</span>

            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              aria-label="Select language"
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>
          </label>

          <ThemeToggle />
        </div>
      </div>

      <div className="site-header__search">
        <SearchBar key={searchKey} />
      </div>

      <CategoryNav />
    </header>
  )
}

export default Header