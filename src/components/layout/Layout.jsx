import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CategoryScrollManager from './CategoryScrollManager.jsx'

function Layout() {
  return (
    <div className="app-shell">
      <CategoryScrollManager />
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
