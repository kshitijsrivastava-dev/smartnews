import { NavLink } from 'react-router-dom'
import { categories } from '../../data/categories.js'
import { useTranslation } from '../../hooks/useLanguage.js'

function CategoryNav() {
  const { t } = useTranslation()
  return (
    <nav className="category-nav" aria-label={t('nav')}>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/category/${category.slug}`}
              className={({ isActive }) =>
                isActive ? 'category-nav__link is-active' : 'category-nav__link'
              }
            >
              {t(`cat.${category.slug}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav
