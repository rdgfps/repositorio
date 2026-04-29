import { Link } from 'react-router-dom'
import { Github, Linkedin, Code2 } from 'lucide-react'
import { developer } from '../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-secondary mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 bg-accent-lime rounded flex items-center justify-center">
                <Code2 size={13} className="text-bg-primary" />
              </div>
              <span className="font-display font-bold text-sm text-text-primary">
                dev<span className="text-accent-lime">folio</span>
              </span>
            </Link>
            <p className="text-text-secondary text-xs max-w-xs leading-relaxed">
              Repositório de projetos de {developer.name}. Construído com React, Vite e TailwindCSS.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-text-secondary hover:text-text-primary text-xs transition-colors">Home</Link>
              <Link to="/projects" className="text-text-secondary hover:text-text-primary text-xs transition-colors">Projetos</Link>
              <Link to="/favorites" className="text-text-secondary hover:text-text-primary text-xs transition-colors">Favoritos</Link>
              <Link to="/contact" className="text-text-secondary hover:text-text-primary text-xs transition-colors">Contato</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href={developer.github} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-muted transition-all">
                <Github size={13} />
              </a>
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-muted transition-all">
                <Linkedin size={13} />
              </a>
              <a href={developer.twitter} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-muted transition-all">
                <Twitter size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="divider mt-8 mb-6" />

        <div className="flex items-center justify-between">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} {developer.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
