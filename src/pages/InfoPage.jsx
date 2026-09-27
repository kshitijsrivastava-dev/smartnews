import { useTranslation } from '../hooks/useLanguage.js'

const pageContent = {
  about: {
    title: 'info.about.title',
    paragraphs: [
      'info.about.intro',
      'info.about.headlines',
      'info.about.reading',
    ],
  },
  how: {
    title: 'info.how.title',
    steps: [
      'info.how.step1',
      'info.how.step2',
      'info.how.step3',
      'info.how.step4',
      'info.how.step5',
    ],
  },
  sources: {
    title: 'info.sources.title',
    paragraphs: [
      'info.sources.intro',
      'info.sources.api',
      'info.sources.publisher',
    ],
  },
}

function InfoPage({ pageKey }) {
  const { t } = useTranslation()
  const page = pageContent[pageKey]

  return (
    <article className="info-page">
      <h1>{t(page.title)}</h1>

      {page.paragraphs?.map((key) => (
        <p key={key}>{t(key)}</p>
      ))}

      {page.steps ? (
        <ol className="info-page__steps">
          {page.steps.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ol>
      ) : null}
    </article>
  )
}

export default InfoPage
