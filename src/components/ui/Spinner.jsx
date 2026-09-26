import { useTranslation } from '../../hooks/useLanguage.js'

function Spinner({ label }) {
  const { t } = useTranslation()
  label = label ?? t('loading')
  return (
    <div className="status-block" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <p>{label}…</p>
    </div>
  )
}

export default Spinner
