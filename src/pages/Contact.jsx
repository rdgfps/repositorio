import { ExternalLink, Github, Mail, MapPin, MessageCircle } from 'lucide-react'
import { developer } from '../data/projects'

export default function Contact() {
  const whatsappNumber = '53991566695'
  const contactItems = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(53) 99156-6695',
      href: `https://wa.me/55${whatsappNumber}`,
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: developer.github.replace('https://github.com/', '@'),
      href: developer.github,
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: developer.email,
      href: `mailto:${developer.email}`,
      external: false,
    },
  ]

  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-2">contato</p>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary mb-3 break-words">
            Vamos Conversar
          </h1>
          <p className="text-text-secondary text-sm font-body max-w-md">
            Entre em contato direto por WhatsApp, GitHub ou email.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <div className="grid gap-4">
              {contactItems.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="card-glass rounded-xl p-5 sm:p-6 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-accent-lime/8 border border-accent-lime/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-lime/15 transition-colors">
                      <Icon size={18} className="text-accent-lime" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">{label}</p>
                      <p className="text-text-primary text-sm sm:text-base group-hover:text-accent-lime transition-colors break-all">
                        {value}
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={15} className="text-text-muted group-hover:text-accent-lime transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="card-glass rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-secondary border border-bg-border flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-text-secondary" />
                </div>
                <div>
                  <p className="text-text-secondary text-xs font-mono">Localizacao</p>
                  <p className="text-text-primary text-sm">{developer.location}</p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl p-5">
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest mb-3">Disponibilidade</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Para respostas mais rapidas, prefira o WhatsApp. Tambem acompanho mensagens pelo GitHub e email.
              </p>
            </div>

            <div className="card-glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="dot-status" />
                <p className="text-text-primary text-sm font-mono">Disponivel agora</p>
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
