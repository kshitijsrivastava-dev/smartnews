import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

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
    () => window.scrollY >= 120,
  )
  const compactMode = useRef(isCompact)
  const headerElement = useRef(null)
  const spacerElement = useRef(null)

  const searchKey = searchParams.get('q') ?? ''
  const { language, locale, t } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem('smartnews-language') ?? 'en',
  )

  const [selectedCountry, setSelectedCountry] = useState(
    () => localStorage.getItem('smartnews-country') ?? 'in',
  )

  const setCompactMode = useCallback((compact) => {
    if (compactMode.current === compact) return
    compactMode.current = compact
    setIsCompact(compact)
  }, [])

  useLayoutEffect(() => {
    const header = headerElement.current
    const spacer = spacerElement.current
    if (!header || !spacer) return undefined

    const setSpacerHeight = (height) => {
      const nextHeight = `${Math.ceil(height)}px`
      if (spacer.style.height !== nextHeight) {
        spacer.style.height = nextHeight
      }
    }

    setSpacerHeight(header.offsetHeight)
    if (typeof ResizeObserver === 'undefined') {
      const updateSpacer = () => setSpacerHeight(header.offsetHeight)
      header.addEventListener('transitionend', updateSpacer)
      window.addEventListener('resize', updateSpacer)
      return () => {
        header.removeEventListener('transitionend', updateSpacer)
        window.removeEventListener('resize', updateSpacer)
      }
    }

    const observer = new ResizeObserver(([entry]) => {
      const borderBox = Array.isArray(entry.borderBoxSize)
        ? entry.borderBoxSize[0]
        : entry.borderBoxSize
      setSpacerHeight(borderBox?.blockSize ?? header.offsetHeight)
    })
    observer.observe(header)

    return () => observer.disconnect()
  }, [])

  const localizedCountries = useMemo(() => {
    try {
      const names = new Intl.DisplayNames([locale], { type: 'region' })
      return countries.map((country) => ({ ...country, name: names.of(country.code.toUpperCase()) ?? country.name }))
    } catch {
      return countries
    }
  }, [locale])

  useEffect(() => {
    let animationFrame = 0
    const updateHeader = () => {
      animationFrame = 0
      const currentY = window.scrollY
      if (currentY < 80) {
        setCompactMode(false)
      } else if (currentY >= 120) {
        setCompactMode(true)
      }
    }

    const handleScroll = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateHeader)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame)
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

    if (compactMode.current) setCompactMode(false)
  }

  return (
    <>
      <header
        ref={headerElement}
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
      <div
        ref={spacerElement}
        className="site-header-spacer"
        aria-hidden="true"
      />
    </>
  )
}

export default Header
