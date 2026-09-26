import { useTranslation } from '../../hooks/useLanguage.js'

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <p className="site-footer__mark">SmartNews</p>
      <p>
        {t('footer')}
      </p>
      <p className="site-footer__copy">{t('copyright', { year })}</p>
    </footer>
  )
}

export default Footer
