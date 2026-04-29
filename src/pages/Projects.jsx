import { useState, useMemo } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SearchFilter from '../components/SearchFilter'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [activeTechs, setActiveTechs] = useState([])
  const [sort, setSort] = useState('stars')

  const filtered = useMemo(() => {
    let result = [...projects]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techs.some(t => t.toLowerCase().includes(q))
      )
    }

    if (activeTechs.length > 0) {
      result = result.filter(p =>
        activeTechs.every(t => p.techs.includes(t))
      )
    }

    result.sort((a, b) => {
      if (sort === 'stars') return b.stars - a.stars
      if (sort === 'views') return b.views - a.views
      if (sort === 'recent') return new Date(b.createdAt) - new Date(a.createdAt)
      return 0
    })

    return result
  }, [query, activeTechs, sort])

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10" style={{ opacity: 0, animation: 'fadeUp 0.5s ease forwards 0.1s' }}>
          <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-2">repositório</p>
          <h1 className="font-display font-extrabold text-4xl text-text-primary mb-3">
            Todos os Projetos
          </h1>
          <p className="text-text-secondary text-sm font-body max-w-lg">
            {projects.length} projetos públicos. Filtrar por tecnologia ou buscar pelo nome.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8" style={{ opacity: 0, animation: 'fadeUp 0.5s ease forwards 0.2s' }}>
          <SearchFilter
            query={query}
            setQuery={setQuery}
            activeTechs={activeTechs}
            setActiveTechs={setActiveTechs}
          />
        </div>

        {/* Sort + count */}
        <div className="flex items-center justify-between mb-6" style={{ opacity: 0, animation: 'fadeUp 0.5s ease forwards 0.25s' }}>
          <span className="text-text-secondary text-xs font-mono">
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </span>
          <div className="flex items-center gap-1 bg-bg-card border border-bg-border rounded-lg p-1">
            {[
              { value: 'stars', label: 'Stars' },
              { value: 'views', label: 'Views' },
              { value: 'recent', label: 'Recentes' },
            ].map(s => (
              <button
                key={s.value}
                onClick={() => setSort(s.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  sort === s.value
                    ? 'bg-accent-lime text-bg-primary font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-text-muted text-4xl mb-4">∅</p>
            <p className="text-text-secondary font-mono text-sm">Nenhum projeto encontrado.</p>
            <p className="text-text-muted text-xs mt-2">Tente outros termos ou filtros.</p>
          </div>
        )}
      </div>
    </main>
  )
}
