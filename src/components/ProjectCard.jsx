import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink, Eye, Star, Heart, ArrowUpRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const ProjectCard = memo(function ProjectCard({ project, index = 0 }) {
  const { toggleFavorite, isFavorite, getViews } = useApp()
  const fav = isFavorite(project.id)

  return (
    <article
      className="card-glass project-card rounded-xl overflow-hidden flex flex-col group min-w-0 relative"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animation: `fadeUp 0.5s ease forwards ${index * 0.08}s` }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-lime/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <Link to={`/projects/${project.id}`} className="project-thumbnail block">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-text-primary text-xs font-mono">abrir projeto</span>
          <span className="w-8 h-8 rounded-lg bg-accent-lime text-bg-primary flex items-center justify-center">
            <ArrowUpRight size={14} />
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-bg-primary/70 backdrop-blur border border-accent-lime/25 text-accent-lime text-[10px] font-mono">
            destaque
          </div>
        )}
        {project.deploy && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-accent-cyan/10 backdrop-blur border border-accent-cyan/20 text-accent-cyan text-[10px] font-mono">
            online
          </div>
        )}
        {project.status === 'archived' && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-text-muted/20 border border-text-muted/20 text-text-secondary text-[10px] font-mono">
            archived
          </div>
        )}
      </Link>

      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 min-w-0">
          <Link to={`/projects/${project.id}`} className="min-w-0">
            <h3 className="font-display font-semibold text-base text-text-primary group-hover:text-accent-lime transition-colors leading-tight break-words">
              {project.name}
            </h3>
          </Link>
          <button
            onClick={() => toggleFavorite(project.id)}
            className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all ${
              fav
                ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                : 'bg-bg-border/30 border border-transparent text-text-secondary hover:text-red-400'
            }`}
            title={fav ? 'Remover favorito' : 'Adicionar favorito'}
          >
            <Heart size={12} fill={fav ? 'currentColor' : 'none'} />
          </button>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 font-body flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.techs.slice(0, 4).map(tech => (
            <span key={tech} className="tag-tech px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
          {project.techs.length > 4 && (
            <span className="tag-tech px-2 py-0.5 rounded text-text-secondary border-bg-border">
              +{project.techs.length - 4}
            </span>
          )}
        </div>

        <div className="pt-3 mt-auto border-t border-bg-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-text-secondary min-w-0">
            <span className="flex items-center gap-1 number-counter">
              <Star size={11} />
              {project.stars}
            </span>
            <span className="flex items-center gap-1 number-counter">
              <Eye size={11} />
              {getViews(project.id, project.views)}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-md border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-muted transition-all"
              title="GitHub"
            >
              <Github size={12} />
            </a>
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md border border-bg-border flex items-center justify-center text-text-secondary hover:text-accent-lime hover:border-accent-lime/30 transition-all"
                title="Ver deploy"
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
})

export default ProjectCard
