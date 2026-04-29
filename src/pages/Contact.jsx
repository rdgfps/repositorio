import { useForm, ValidationError } from '@formspree/react'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, CheckCircle } from 'lucide-react'
import { developer } from '../data/projects'

export default function Contact() {
  const [state, handleSubmit] = useForm('xzdynlyw')

  return (
    <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-2">contato</p>
          <h1 className="font-display font-extrabold text-4xl text-text-primary mb-3">
            Vamos Conversar
          </h1>
          <p className="text-text-secondary text-sm font-body max-w-md">
            Disponível para projetos freelance, consultorias e oportunidades fulltime. Respondo em até 24h.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <div className="md:col-span-3">
              {state.succeeded ? (
              <div className="card-glass rounded-xl p-10 text-center">
                <CheckCircle size={40} className="text-accent-lime mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl text-text-primary mb-2">Mensagem enviada!</h3>
                <p className="text-text-secondary text-sm">
                  Obrigado por entrar em contato. Responderei em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass rounded-xl p-6 flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-text-secondary text-xs font-mono">Nome</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      className="input-dark px-4 py-3 rounded-xl text-sm font-body"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-text-secondary text-xs font-mono">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      className="input-dark px-4 py-3 rounded-xl text-sm font-body"
                    />
                    <ValidationError field="email" errors={state.errors}
                      className="text-red-400 text-xs font-mono" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-text-secondary text-xs font-mono">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Descreva seu projeto ou oportunidade..."
                    className="input-dark px-4 py-3 rounded-xl text-sm font-body resize-none"
                  />
                  <ValidationError field="message" errors={state.errors}
                    className="text-red-400 text-xs font-mono" />
                </div>
                <ValidationError errors={state.errors} className="text-red-400 text-xs font-mono" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {state.submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="card-glass rounded-xl p-5 flex flex-col gap-4">
              <a href={`mailto:${developer.email}`}
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-accent-lime/8 border border-accent-lime/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-lime/15 transition-colors">
                  <Mail size={15} className="text-accent-lime" />
                </div>
                <div>
                  <p className="text-text-secondary text-xs font-mono">Email</p>
                  <p className="text-text-primary text-sm group-hover:text-accent-lime transition-colors">{developer.email}</p>
                </div>
              </a>

              <div className="divider" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-secondary border border-bg-border flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-text-secondary" />
                </div>
                <div>
                  <p className="text-text-secondary text-xs font-mono">Localização</p>
                  <p className="text-text-primary text-sm">{developer.location}</p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl p-5">
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-4">Redes</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Github, label: 'GitHub', href: developer.github },
                  { icon: Linkedin, label: 'LinkedIn', href: developer.linkedin },
                  { icon: Twitter, label: 'Twitter', href: developer.twitter },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={15} className="text-text-secondary group-hover:text-accent-lime transition-colors" />
                      <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">{label}</span>
                    </div>
                    <span className="text-text-muted text-xs font-mono group-hover:text-accent-lime transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="dot-status" />
                <p className="text-text-primary text-sm font-mono">Disponível agora</p>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                Aceito projetos de qualquer lugar do mundo. Timezone: BRT (UTC-3).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
