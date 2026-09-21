import { NavLink } from 'react-router-dom'
import { categories } from '../../data/categories.js'

function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="News categories">
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/category/${category.slug}`}
              className={({ isActive }) =>
                isActive ? 'category-nav__link is-active' : 'category-nav__link'
              }
            >
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav
