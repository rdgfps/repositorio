import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, Github, ExternalLink, Eye, Star, Heart, Calendar, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { useApp } from '../context/AppContext'
import ProjectCard from '../components/ProjectCard'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toggleFavorite, isFavorite, incrementView, getViews } = useApp()

  const project = projects.find(p => p.id === id)
  const related = projects.filter(p => p.id !== id && p.techs.some(t => project?.techs.includes(t))).slice(0, 3)

  useEffect(() => {
    if (!project) return navigate('/projects')
    incrementView(project.id)
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return null

  const fav = isFavorite(project.id)

  return (
    <main className="min-h-screen pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-8 transition-colors font-mono group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          projetos
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {project.featured && (
                <span className="px-2 py-0.5 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-accent-lime text-[10px] font-mono">
                  featured
                </span>
              )}
              {project.status === 'archived' && (
                <span className="px-2 py-0.5 rounded-full bg-text-muted/20 border border-text-muted/20 text-text-secondary text-[10px] font-mono">
                  archived
                </span>
              )}
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary">
              {project.name}
            </h1>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => toggleFavorite(project.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all ${
                fav
                  ? 'bg-red-500/10 border-red-500/20 text-red-400'
                  : 'border-bg-border text-text-secondary hover:border-text-muted hover:text-text-primary'
              }`}
            >
              <Heart size={13} fill={fav ? 'currentColor' : 'none'} />
              {fav ? 'Salvo' : 'Salvar'}
            </button>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-5 mb-8 text-text-secondary">
          <span className="flex items-center gap-1.5 number-counter">
            <Star size={12} /> {project.stars} stars
          </span>
          <span className="flex items-center gap-1.5 number-counter">
            <Eye size={12} /> {getViews(project.id, project.views)} views
          </span>
          <span className="flex items-center gap-1.5 number-counter">
            <Calendar size={12} /> {new Date(project.createdAt).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}
          </span>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-8 border border-bg-border">
          <img src={project.image} alt={project.name} className="w-full aspect-video object-cover" />
        </div>

        {/* Description */}
        <div className="prose-custom mb-8">
          <p className="text-text-secondary text-base leading-relaxed font-body mb-4">
            {project.description}
          </p>
          {project.longDescription && (
            <div className="card-glass rounded-xl p-6 mt-4">
              {project.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className={`text-text-secondary text-sm leading-relaxed font-body ${i > 0 ? 'mt-4' : ''}`}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Techs */}
        <div className="mb-8">
          <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-3">tecnologias</p>
          <div className="flex flex-wrap gap-2">
            {project.techs.map(tech => (
              <Link
                key={tech}
                to={`/projects?tech=${tech}`}
                className="tag-tech px-3 py-1.5 rounded-lg"
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mb-16">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
          >
            <Github size={15} />
            Ver no GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
            >
              <ExternalLink size={14} />
              Ver Demo
            </a>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <div className="divider mb-10" />
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-semibold text-xl text-text-primary">Projetos Relacionados</h2>
              <Link to="/projects" className="text-text-secondary text-xs font-mono hover:text-accent-lime transition-colors flex items-center gap-1">
                ver todos <ArrowRight size=  {11} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
