const STORAGE_PREFIX = 'smartnews-summary:'

export function getCachedSummary(url, language = 'en') {
  if (!url) {
    return ''
  }

  try {
    return (
      window.localStorage.getItem(
        `${STORAGE_PREFIX}${language}:${url}`,
      ) ?? ''
    )
  } catch {
    return ''
  }
}

export function setCachedSummary(url, language = 'en', summary) {
  if (!url || !summary) {
    return
  }

  try {
    window.localStorage.setItem(
      `${STORAGE_PREFIX}${language}:${url}`,
      summary,
    )
  } catch {
    // Ignore quota or private-mode failures.
  }
}