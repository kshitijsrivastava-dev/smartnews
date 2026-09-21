export async function summarizeArticle(article, language = 'en') {
  const response = await fetch('/api/summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: article.title,
      description: article.description,
      content: article.content,
      url: article.url,
      language,
    }),
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(payload?.error || 'Failed to generate summary')
  }

  const summary =
    typeof payload?.summary === 'string' ? payload.summary.trim() : ''

  if (!summary) {
    throw new Error('Summary was empty')
  }

  return { summary }
}