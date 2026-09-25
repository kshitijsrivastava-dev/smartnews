import { useEffect, useId, useRef, useState } from 'react'

function Dropdown({ label, value, options, onChange, ariaLabel, className = '' }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const listId = useId()

  const selected = options.find((option) => option.code === value)

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function handleSelect(option) {
    onChange(option.code)
    setOpen(false)
  }

  return (
    <div className={`dropdown ${className}`.trim()} ref={rootRef}>
      <span className="dropdown__label">{label}</span>

      <button
        type="button"
        className="dropdown__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="dropdown__value">{selected?.name}</span>
        <span className="dropdown__chevron" aria-hidden="true">
          &#9662;
        </span>
      </button>

      {open && (
        <ul className="dropdown__list" role="listbox" id={listId}>
          {options.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                role="option"
                aria-selected={option.code === value}
                className={
                  'dropdown__option' +
                  (option.code === value ? ' is-selected' : '')
                }
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
