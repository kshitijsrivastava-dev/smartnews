function ErrorMessage({ message, onRetry }) {
  return (
    <div className="status-block status-block--error" role="alert">
      <p>{message || 'Something went wrong while loading stories.'}</p>
      {onRetry ? (
        <button type="button" className="status-block__action" onClick={onRetry}>
          Try again
        </button>
      ) : null}
    </div>
  )
}

export default ErrorMessage
