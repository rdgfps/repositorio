import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Code2, Heart, Menu, X } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { favorites } = useApp()
  const location = useLocation()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-bg-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-accent-lime rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Code2 size={15} className="text-bg-primary" strokeWidth={2.5} />
          </div>
          <span className="font-display font-700 text-sm tracking-wide text-text-primary">
            dev<span className="text-accent-lime">folio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projetos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contato
          </NavLink>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/favorites"
            className="relative w-9 h-9 rounded-lg border border-bg-border flex items-center justify-center hover:border-text-muted transition-colors group"
          >
            <Heart size={15} className="text-text-secondary group-hover:text-accent-lime transition-colors" />
            {favorites.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent-lime rounded-full text-[9px] font-mono font-bold text-bg-primary flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link to="/projects" className="btn-primary px-4 py-2 rounded-lg text-sm">
            Ver Projetos
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-bg-border text-text-secondary"
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-bg-border px-4 py-6 flex flex-col gap-5">
          <NavLink to="/" end className={({ isActive }) => `text-sm ${isActive ? 'text-accent-lime' : 'text-text-secondary'}`}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `text-sm ${isActive ? 'text-accent-lime' : 'text-text-secondary'}`}>Projetos</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-sm ${isActive ? 'text-accent-lime' : 'text-text-secondary'}`}>Contato</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => `text-sm ${isActive ? 'text-accent-lime' : 'text-text-secondary'}`}>
            Favoritos {favorites.length > 0 && `(${favorites.length})`}
          </NavLink>
        </div>
      )}
    </header>
  )
}
