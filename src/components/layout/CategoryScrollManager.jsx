import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

function CategoryScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const currentKey = useRef(location.key)
  const positions = useRef(new Map())

  useLayoutEffect(() => {
    const savePosition = () => {
      positions.current.set(currentKey.current, window.scrollY)
    }

    window.addEventListener('scroll', savePosition, { passive: true })
    return () => window.removeEventListener('scroll', savePosition)
  }, [])

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      window.scrollTo(0, positions.current.get(location.key) ?? 0)
    } else if (location.pathname.startsWith('/category/')) {
      window.scrollTo(0, 0)
    }

    currentKey.current = location.key
  }, [location.key, location.pathname, navigationType])

  return null
}

export default CategoryScrollManager
