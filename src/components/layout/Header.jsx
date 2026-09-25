import { useEffect, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'

import CategoryNav from '../news/CategoryNav.jsx'

import SearchBar from '../news/SearchBar.jsx'

import ThemeToggle from '../ui/ThemeToggle.jsx'

import Dropdown from '../ui/Dropdown.jsx'

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

  function handleLanguageChange(code) {
    localStorage.setItem('smartnews-language', code)

    setSelectedLanguage(code)

    window.dispatchEvent(new Event('smartnews-language-change'))
  }

  function handleCountryChange(code) {
    localStorage.setItem('smartnews-country', code)

    setSelectedCountry(code)

    window.dispatchEvent(new Event('smartnews-country-change'))
  }

  return (
    <header className="site-header">
      <div className="site-header__top">
        <div
          className="site-header__tools site-header__tools--left"
          role="group"
          aria-label="Country preference"
        >
          <Dropdown
            className="country-selector"
            label="Country"
            value={selectedCountry}
            options={countries}
            onChange={handleCountryChange}
            ariaLabel="Select country"
          />
        </div>

        <div className="site-header__identity">
          <Link to="/" className="site-header__brand">
            SmartNews
          </Link>
          <p className="site-header__kicker">AI-powered news briefing</p>
        </div>

        <div
          className="site-header__tools site-header__tools--right"
          role="group"
          aria-label="Language and theme preferences"
        >
          <Dropdown
            className="language-selector"
            label="Language"
            value={selectedLanguage}
            options={languages}
            onChange={handleLanguageChange}
            ariaLabel="Select language"
          />

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
