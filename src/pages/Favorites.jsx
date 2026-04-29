import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { useApp } from '../context/AppContext'
import ProjectCard from '../components/ProjectCard'

export default function Favorites() {
  const { favorites } = useApp()
  const saved = projects.filter(p => favorites.includes(p.id))

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-2">coleção</p>
          <h1 className="font-display font-extrabold text-4xl text-text-primary mb-3 flex items-center gap-3">
            Favoritos
            {saved.length > 0 && (
              <span className="text-text-muted font-mono text-base">({saved.length})</span>
            )}
          </h1>
        </div>

        {saved.length === 0 ? (
          <div className="py-24 text-center">
            <Heart size={40} className="text-text-muted mx-auto mb-5" />
            <p className="text-text-secondary font-mono text-sm mb-2">Nenhum favorito ainda.</p>
            <p className="text-text-muted text-xs mb-8">Clique no ♥ em qualquer projeto para salvar aqui.</p>
            <Link to="/projects" className="btn-primary px-6 py-2.5 rounded-xl text-sm inline-flex items-center gap-2">
              Explorar projetos <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {saved.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        )}
      </div>
    </main>
  )
}
