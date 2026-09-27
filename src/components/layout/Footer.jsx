import { Link } from 'react-router-dom'

import { categories } from '../../data/categories.js'
import { useTranslation } from '../../hooks/useLanguage.js'

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <p className="site-footer__mark">SmartNews</p>
          <div className="site-footer__description">
            <p className="site-footer__tagline">{t('footer.tagline')}</p>
            <p className="site-footer__disclaimer">{t('footer.disclaimer')}</p>
          </div>
        </div>

        <div className="site-footer__explore">
          <p className="site-footer__explore-label">Explore</p>
          <nav aria-label="Explore">
            <ul className="site-footer__category-grid">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link to={`/category/${category.slug}`}>
                    {t(`cat.${category.slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <nav className="site-footer__nav" aria-label={t('footer.navLabel')}>
        <Link to="/about">{t('footer.about')}</Link>
        <Link to="/how-it-works">{t('footer.howItWorks')}</Link>
        <Link to="/sources">{t('footer.sources')}</Link>
      </nav>

      <p className="site-footer__copy">{t('copyright', { year })}</p>
    </footer>
  )
}

export default Footer
