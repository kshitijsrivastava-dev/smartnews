import { getLocale } from '../data/translations.js'

export function formatPublishedDate(isoDate, language = 'en') {
  if (!isoDate) {
    return ''
  }

  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toLocaleDateString(getLocale(language), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
