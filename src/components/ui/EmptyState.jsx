function EmptyState({ title, message }) {
  return (
    <div className="status-block">
      {title ? <h2>{title}</h2> : null}
      <p>{message}</p>
    </div>
  )
}

export default EmptyState
