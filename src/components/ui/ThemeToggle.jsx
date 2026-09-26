import { useTheme } from '../../hooks/useTheme.js'
import { useTranslation } from '../../hooks/useLanguage.js'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === 'dark'
  const label = t(isDark ? 'light' : 'dark')

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀' : '☾'}
      </span>
    </button>
  )
}

export default ThemeToggle
