import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import InfoPage from './pages/InfoPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/about" element={<InfoPage pageKey="about" />} />
        <Route path="/how-it-works" element={<InfoPage pageKey="how" />} />
        <Route path="/sources" element={<InfoPage pageKey="sources" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
