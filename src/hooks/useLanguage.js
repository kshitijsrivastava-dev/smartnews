import { useEffect, useState } from 'react'
import { getLocale, translate, translations } from '../data/translations.js'

function readLanguage() {
  const code = window.localStorage.getItem('smartnews-language') ?? 'en'
  return Object.hasOwn(translations, code) ? code : 'en'
}

export function useLanguage() {
  const [language, setLanguage] = useState(readLanguage)
  useEffect(() => {
    const syncLanguage = () => setLanguage(readLanguage())
    window.addEventListener('smartnews-language-change', syncLanguage)
    return () => window.removeEventListener('smartnews-language-change', syncLanguage)
  }, [])
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  return language
}

export function useTranslation() {
  const language = useLanguage()
  return { language, locale: getLocale(language), t: (key, values) => translate(language, key, values) }
}
