import { useTranslation } from '../../hooks/useLanguage.js'

function ErrorMessage({ message, onRetry }) {
  const { t } = useTranslation()
  return (
    <div className="status-block status-block--error" role="alert">
      <p>{message || t('error.news')}</p>
      {onRetry ? (
        <button type="button" className="status-block__action" onClick={onRetry}>
          {t('retry')}
        </button>
      ) : null}
    </div>
  )
}

export default ErrorMessage
