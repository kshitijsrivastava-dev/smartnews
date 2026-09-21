function Spinner({ label = 'Loading stories' }) {
  return (
    <div className="status-block" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <p>{label}…</p>
    </div>
  )
}

export default Spinner
