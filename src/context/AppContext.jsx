import { createContext, useContext, useState, useEffect } from 'react'

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

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const incrementView = (id) => {
    setViews(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const isFavorite = (id) => favorites.includes(id)

  const getViews = (id, base = 0) => (views[id] || 0) + base

  return (
    <AppContext.Provider value={{ favorites, toggleFavorite, isFavorite, incrementView, getViews }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
