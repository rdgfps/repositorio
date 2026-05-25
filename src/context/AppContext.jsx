import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('devfolio_favorites') || '[]')
    } catch { return [] }
  })

  const [views, setViews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('devfolio_views') || '{}')
    } catch { return {} }
  })

  useEffect(() => {
    localStorage.setItem('devfolio_favorites', JSON.stringify(favorites))
    localStorage.setItem('devfolio_views', JSON.stringify(views))
  }, [favorites, views])

  const toggleFavorite = useCallback((id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }, [])

  const incrementView = useCallback((id) => {
    setViews(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }, [])

  const isFavorite = useCallback((id) => favorites.includes(id), [favorites])

  const getViews = useCallback((id, base = 0) => (views[id] || 0) + base, [views])

  const value = useMemo(() => ({
    favorites,
    toggleFavorite,
    isFavorite,
    incrementView,
    getViews,
  }), [favorites, toggleFavorite, isFavorite, incrementView, getViews])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
