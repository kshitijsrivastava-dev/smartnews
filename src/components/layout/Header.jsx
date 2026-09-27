import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'

import CategoryNav from '../news/CategoryNav.jsx'

import SearchBar from '../news/SearchBar.jsx'

import ThemeToggle from '../ui/ThemeToggle.jsx'

import Dropdown from '../ui/Dropdown.jsx'

import { languages } from '../../data/languages.js'

import { countries } from '../../data/countries.js'
import { useTranslation } from '../../hooks/useLanguage.js'

function Header() {
  const [searchParams] = useSearchParams()
  const [isCompact, setIsCompact] = useState(
    () => window.scrollY > 80,
  )
  const compactState = useRef(isCompact)
  const stateAnchorY = useRef(window.scrollY)
  const transitionLockUntil = useRef(0)
  const transitionTimer = useRef(null)

  const searchKey = searchParams.get('q') ?? ''
  const { language, locale, t } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem('smartnews-language') ?? 'en',
  )

  const [selectedCountry, setSelectedCountry] = useState(
    () => localStorage.getItem('smartnews-country') ?? 'in',
  )

  const localizedCountries = useMemo(() => {
    try {
      const names = new Intl.DisplayNames([locale], { type: 'region' })
      return countries.map((country) => ({ ...country, name: names.of(country.code.toUpperCase()) ?? country.name }))
    } catch {
      return countries
    }
  }, [locale])

  const setCompactMode = useCallback((compact) => {
    if (compactState.current === compact) return

    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current)
      transitionTimer.current = null
    }

    compactState.current = compact
    setIsCompact(compact)
    stateAnchorY.current = window.scrollY
    transitionLockUntil.current = Date.now() + 230
    transitionTimer.current = window.setTimeout(() => {
      transitionTimer.current = null
      transitionLockUntil.current = 0
      stateAnchorY.current = window.scrollY
    }, 230)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY)

      if (currentY <= 32) {
        if (transitionTimer.current !== null) {
          window.clearTimeout(transitionTimer.current)
          transitionTimer.current = null
        }
        transitionLockUntil.current = 0
        stateAnchorY.current = currentY
        setCompactMode(false)
        return
      }

      const lockRemaining = transitionLockUntil.current - Date.now()
      if (lockRemaining > 0) return

      const displacement = currentY - stateAnchorY.current

      if (
        !compactState.current &&
        currentY > 80 &&
        displacement >= 28
      ) {
        setCompactMode(true)
      } else if (compactState.current && displacement <= -28) {
        setCompactMode(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current)
        transitionTimer.current = null
      }
    }
  }, [setCompactMode])

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

  function handlePointerEnter(event) {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    const pointerMovement =
      Math.abs(event.movementX || 0) + Math.abs(event.movementY || 0)
    if (pointerMovement === 0) return

    if (compactState.current) {
      stateAnchorY.current = window.scrollY
      setCompactMode(false)
    }
  }

  return (
    <header
      className={`site-header${isCompact ? ' site-header--compact' : ''}`}
      onPointerEnter={handlePointerEnter}
    >
      <div className="site-header__top">
        <div
          className="site-header__tools site-header__tools--left"
          role="group"
          aria-label={t('countryPrefs')}
        >
          <Dropdown
            className="country-selector"
            label={t('country')}
            value={selectedCountry}
            options={localizedCountries}
            onChange={handleCountryChange}
            ariaLabel={t('selectCountry')}
          />
        </div>

        <div className="site-header__identity">
          <Link to="/" className="site-header__brand">
            SmartNews
          </Link>
          <p className="site-header__kicker">{t('tagline')}</p>
        </div>

        <div
          className="site-header__tools site-header__tools--right"
          role="group"
          aria-label={t('langPrefs')}
        >
          <Dropdown
            className="language-selector"
            label={t('language')}
            value={selectedLanguage || language}
            options={languages}
            onChange={handleLanguageChange}
            ariaLabel={t('selectLanguage')}
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
