import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Twitter, MapPin, Star, GitCommit, Folder, Calendar, GraduationCap, Globe } from 'lucide-react'
import { developer, projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Icon size={13} className="text-accent-lime" />
        <span className="font-display font-bold text-2xl text-text-primary">{value}</span>
      </div>
      <span className="text-text-secondary text-xs font-mono">{label}</span>
    </div>
  )
}

function LangBar({ name, level }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-text-secondary text-xs w-20 font-mono">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`w-5 h-1.5 rounded-full ${i < level ? 'bg-accent-lime' : 'bg-bg-border'}`} />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const featured = projects.filter(p => p.featured)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
        {/* BG effects */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent-lime/4 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent-cyan/3 blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6 animate-stagger">
              {/* Status badge */}
              <div className="flex items-center gap-2.5 w-fit">
                <div className="dot-status" />
                <span className="text-text-secondary text-xs font-mono">Disponível para projetos</span>
              </div>

              {/* Name */}
              <div>
                <p className="text-text-secondary text-sm font-mono mb-2 tracking-widest uppercase">
                  &lt;developer/&gt;
                </p>
                <h1 className="font-display font-extrabold text-5xl sm:text-6xl leading-none text-text-primary">
                  {developer.name}
                </h1>
                <h2 className="font-display font-medium text-xl mt-2 text-gradient-lime">
                  {developer.title}
                </h2>
              </div>

              <p className="text-text-secondary text-base leading-relaxed max-w-md font-body">
                {developer.bio}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-text-secondary text-sm">
                <MapPin size={13} />
                <span className="font-mono text-xs">{developer.location}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link to="/projects" className="btn-primary px-5 py-2.5 rounded-xl text-sm flex items-center gap-2">
                  Ver projetos
                  <ArrowRight size={14} />
                </Link>
                <a href={developer.github} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 bg-transparent">
                  <Github size={14} />
                  GitHub
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 pt-2">
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-lime transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href={developer.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-lime transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* Right — Profile card */}
            <div className="flex justify-center md:justify-end" style={{ opacity: 0, animation: 'fadeUp 0.6s ease forwards 0.3s' }}>
              <div className="card-glass rounded-2xl p-6 w-full max-w-sm glow-lime flex flex-col gap-5">
                {/* Avatar */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-accent-lime/10 border border-accent-lime/20">
                      <img src={developer.avatar} alt={developer.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-lime rounded-full border-2 border-bg-card" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary">{developer.name}</h3>
                    <p className="text-text-secondary text-xs font-mono mt-0.5">@henriquerodeghiero</p>
                    <p className="text-text-secondary text-xs mt-1">{developer.title}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-bg-secondary border border-bg-border">
                  <StatItem icon={Folder} value={developer.stats.projects} label="projetos" />
                  <StatItem icon={GitCommit} value={`${developer.stats.commits}+`} label="commits" />
                  <StatItem icon={Star} value={developer.stats.stars} label="stars" />
                  <StatItem icon={Calendar} value={`${developer.stats.years}a`} label="experiência" />
                </div>

                {/* Stack */}
                <div>
                  <p className="text-text-secondary text-xs font-mono mb-2 uppercase tracking-widest">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {developer.stack.map(tech => (
                      <span key={tech} className="tag-tech px-2 py-0.5 rounded">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <GraduationCap size={12} className="text-accent-lime" />
                    <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">Educação</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {developer.education.map((e, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-text-primary text-xs font-medium">{e.degree}</span>
                        <span className="text-text-secondary text-[10px] font-mono">{e.institution} · {e.period}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Globe size={12} className="text-accent-lime" />
                    <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">Idiomas</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {developer.languages.map(l => <LangBar key={l.name} name={l.name} level={l.level} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-1">selecionados</p>
              <h2 className="font-display font-bold text-2xl text-text-primary">Projetos em Destaque</h2>
            </div>
            <Link to="/projects" className="text-text-secondary text-sm hover:text-accent-lime transition-colors flex items-center gap-1 font-mono">
              ver todos <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="card-glass rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent" />
            <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-3">vamos trabalhar juntos</p>
            <h3 className="font-display font-bold text-3xl text-text-primary mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-7 font-body leading-relaxed">
              Estou disponível para projetos freelance, consultorias e posições fulltime. Vamos conversar.
            </p>
            <Link to="/contact" className="btn-primary px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              Entrar em contato <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
