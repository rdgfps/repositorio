import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink, Eye, Star, Heart } from 'lucide-react'
import { useApp } from '../context/AppContext'

const ProjectCard = memo(function ProjectCard({ project, index = 0 }) {
  const { toggleFavorite, isFavorite, getViews } = useApp()
  const fav = isFavorite(project.id)

  return (
    <article
      className="card-glass rounded-xl overflow-hidden flex flex-col group"
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animation: `fadeUp 0.5s ease forwards ${index * 0.08}s` }}
    >
      {/* Thumbnail */}
      <Link to={`/projects/${project.id}`} className="project-thumbnail block">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.featured && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-accent-lime text-[10px] font-mono">
            featured
          </div>
        )}
        {project.status === 'archived' && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-text-muted/20 border border-text-muted/20 text-text-secondary text-[10px] font-mono">
            archived
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/projects/${project.id}`}>
            <h3 className="font-display font-semibold text-base text-text-primary group-hover:text-accent-lime transition-colors leading-tight">
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

        {/* Techs */}
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

        {/* Footer */}
        <div className="pt-2 border-t border-bg-border flex items-center justify-between">
          <div className="flex items-center gap-3 text-text-secondary">
            <span className="flex items-center gap-1 number-counter">
              <Star size={11} />
              {project.stars}
            </span>
            <span className="flex items-center gap-1 number-counter">
              <Eye size={11} />
              {getViews(project.id, project.views)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-md border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-muted transition-all"
              title="GitHub"
            >
              <Github size={12} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md border border-bg-border flex items-center justify-center text-text-secondary hover:text-accent-lime hover:border-accent-lime/30 transition-all"
                title="Demo"
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
