import { Link } from 'react-router-dom'
import { ArrowRight, Github, Instagram, Linkedin, MapPin, Star, GitCommit, Folder, Calendar, GraduationCap, Globe, Code2, Database, Wrench } from 'lucide-react'
import { developer, projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <div className="flex items-center gap-2">
        <Icon size={13} className="text-accent-lime flex-shrink-0" />
        <span className="font-display font-bold text-xl sm:text-2xl text-text-primary">{value}</span>
      </div>
      <span className="text-text-secondary text-[11px] sm:text-xs font-mono truncate">{label}</span>
    </div>
  )
}

function LangBar({ name, level }) {
  return (
    <div className="flex items-center gap-3 min-w-0">
      <span className="text-text-secondary text-xs w-16 sm:w-20 font-mono flex-shrink-0">{name}</span>
      <div className="flex gap-1 min-w-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`w-4 sm:w-5 h-1.5 rounded-full ${i < level ? 'bg-accent-lime' : 'bg-bg-border'}`} />
        ))}
      </div>
    </div>
  )
}

const stackGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'Next.js', 'Vite', 'TailwindCSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Dados e backend',
    icon: Database,
    items: ['Python', 'Node.js', 'SQLite', 'MySQL', 'Prisma', 'APIs REST'],
  },
  {
    title: 'Entrega',
    icon: Wrench,
    items: ['Git', 'Vercel', 'Deploy', 'Responsividade', 'UI polish', 'Automações'],
  },
]

const timelineItems = [
  {
    period: '2026',
    title: 'Portfólio focado em projetos reais',
    description: 'Organização dos principais projetos com deploy, detalhes técnicos e contato direto.',
  },
  {
    period: '2025',
    title: 'ADS na UniSenac',
    description: 'Base acadêmica em análise, estruturação de sistemas, dados e desenvolvimento web.',
  },
  {
    period: 'Projetos',
    title: 'Aplicações com uso prático',
    description: 'PDV, catálogo, landing pages, CRUDs e análises em Python com foco em resolver problemas reais.',
  },
]

export default function Home() {
  const featured = projects.filter(p => p.featured)
  const [firstName, ...lastNameParts] = developer.name.split(' ')
  const lastName = lastNameParts.join(' ')

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left */}
            <div className="flex flex-col gap-5 sm:gap-6 animate-stagger min-w-0">
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
                <h1 className="hero-title font-display font-extrabold text-text-primary">
                  <span>{firstName}</span>
                  <span>{lastName}</span>
                </h1>
                <h2 className="font-display font-medium text-lg sm:text-xl mt-2 text-gradient-lime">
                  {developer.title}
                </h2>
              </div>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-md font-body">
                {developer.bio}
              </p>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-text-secondary text-sm">
                <MapPin size={13} />
                <span className="font-mono text-xs">{developer.location}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link to="/projects" className="btn-primary px-5 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2">
                  Ver projetos
                  <ArrowRight size={14} />
                </Link>
                <a href={developer.github} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost px-5 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 bg-transparent">
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
                <a href={developer.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-lime transition-colors">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Right — Profile card */}
            <div className="flex justify-center md:justify-end min-w-0" style={{ opacity: 0, animation: 'fadeUp 0.6s ease forwards 0.3s' }}>
              <div className="card-glass rounded-2xl p-4 sm:p-6 w-full max-w-sm glow-lime flex flex-col gap-5">
                {/* Avatar */}
                <div className="flex items-start gap-4 min-w-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-accent-lime/10 border border-accent-lime/20">
                      <img src={developer.avatar} alt={developer.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-lime rounded-full border-2 border-bg-card" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-text-primary break-words">{developer.name}</h3>
                    <p className="text-text-secondary text-xs font-mono mt-0.5 truncate">@henriquerodeghiero</p>
                    <p className="text-text-secondary text-xs mt-1">{developer.title}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-bg-secondary border border-bg-border">
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

                <div className="border-t border-bg-border pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest">foco</p>
                    <p className="mt-1 text-text-primary text-xs">Interfaces web</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest">perfil</p>
                    <p className="mt-1 text-text-primary text-xs">Júnior em evolução</p>
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

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">competências</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                Stack organizada para entregar produtos completos
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                Tecnologias separadas por uso real no projeto: interface, dados, backend e entrega.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {stackGroups.map(({ title, icon: Icon, items }) => (
              <div key={title} className="card-glass rounded-xl p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg border border-accent-lime/15 bg-accent-lime/8 flex items-center justify-center">
                    <Icon size={17} className="text-accent-lime" />
                  </div>
                  <span className="text-text-muted text-[10px] font-mono uppercase tracking-widest">stack</span>
                </div>
                <h3 className="font-display font-semibold text-text-primary">{title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span key={item} className="tag-tech px-2 py-0.5 rounded">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12">
            <div>
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-2">trajetória</p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                Evolução visível em projetos
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                A timeline deixa claro o caminho de aprendizado e mostra que o portfólio não é só visual: ele acompanha prática, estudo e entrega.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-3 bottom-3 w-px bg-bg-border" />
              <div className="flex flex-col gap-4">
                {timelineItems.map((item, index) => (
                  <div key={item.title} className="relative pl-9">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full border border-accent-lime/25 bg-bg-primary flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-accent-lime" />
                    </div>
                    <div className="card-glass rounded-xl p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <p className="text-accent-lime text-xs font-mono">{item.period}</p>
                        <p className="text-text-muted text-[10px] font-mono">0{index + 1}</p>
                      </div>
                      <h3 className="font-display font-semibold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-1">selecionados</p>
              <h2 className="font-display font-bold text-2xl text-text-primary">Projetos em Destaque</h2>
            </div>
            <Link to="/projects" className="text-text-secondary text-sm hover:text-accent-lime transition-colors flex items-center gap-1 font-mono w-fit">
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
          <div className="card-glass rounded-2xl p-6 sm:p-10 text-left sm:text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent" />
            <p className="font-mono text-xs text-accent-lime uppercase tracking-widest mb-3">vamos trabalhar juntos</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-text-secondary text-sm max-w-md sm:mx-auto mb-7 font-body leading-relaxed">
              Estou disponível para projetos freelance, consultorias e posições fulltime. Vamos conversar.
            </p>
            <Link to="/contact" className="btn-primary w-full sm:w-auto px-8 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Entrar em contato <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
