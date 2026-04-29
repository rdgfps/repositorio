import { Search, X } from 'lucide-react'
import { allTechs } from '../data/projects'

export default function SearchFilter({ query, setQuery, activeTechs, setActiveTechs }) {
  const toggle = (tech) => {
    setActiveTechs(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    )
  }

  const clear = () => {
    setQuery('')
    setActiveTechs([])
  }

  const hasFilters = query || activeTechs.length > 0

  return (
    <div className="flex flex-col gap-4">
      {/* Search input */}
      <div className="relative">
        <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Buscar projetos..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input-dark w-full pl-10 pr-10 py-3 rounded-xl text-sm font-body"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Tech filters */}
      <div className="flex flex-wrap gap-2">
        {allTechs.map(tech => (
          <button
            key={tech}
            onClick={() => toggle(tech)}
            className={`tag-tech px-2.5 py-1 rounded cursor-pointer ${activeTechs.includes(tech) ? 'active' : ''}`}
          >
            {tech}
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={clear}
            className="px-2.5 py-1 rounded text-[0.7rem] font-mono text-text-secondary border border-bg-border hover:border-text-muted hover:text-text-primary transition-colors"
          >
            limpar
          </button>
        )}
      </div>
    </div>
  )
}
