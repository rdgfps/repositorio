export const developer = {
  name: 'Henrique Rodeghiero',
  title: 'Desenvolvedor Júnior',
  bio: 'Estudante de Análise e Desenvolvimento de Sistemas na UniSenac, com experiência em atendimento ao público e foco no desenvolvimento de soluções web e automações com Python e JavaScript.',
  location: 'Canguçu, RS',
  email: 'henrique_rodeghiero@hotmail.com',
  phone: '(53) 991566695',
  github: 'https://github.com/henriquerodeghiero',
  linkedin: 'https://linkedin.com/in/henriquerodeghiero',
  twitter: 'https://twitter.com/henriquerodeghiero',
  avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=HR&backgroundColor=c8f135&textColor=0a0a0b&fontSize=38',
  stack: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'MySQL', 'Git'],
  education: [
    { degree: 'Tecnólogo em ADS', institution: 'UniSenac — Pelotas', period: '2025 – Presente' },
    { degree: 'Computação e Robótica', institution: 'MooDev', period: '2018' },
    { degree: 'Inglês Intermediário', institution: 'Portal de Estudos', period: '2019' },
  ],
  languages: [
    { name: 'Português', level: 5 },
    { name: 'Inglês', level: 4 },
    { name: 'Espanhol', level: 2 },
  ],
  stats: {
    projects: 6,
    commits: 140,
    stars: 18,
    years: 1,
  },
}

export const allTechs = [
  'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
  'MySQL', 'Git', 'TailwindCSS', 'Node.js', 'Flask',
]

export const projects = [
  {
    id: 'petshop-manager',
    name: 'PetShop Manager',
    description: 'Sistema web de gerenciamento para petshops. Cadastro de clientes, animais, agendamentos e controle de estoque, com painel administrativo simples e responsivo.',
    longDescription: `Projeto desenvolvido com base na minha experiência diária no atendimento da Bom pra Cachorro. A ideia foi digitalizar processos que eram feitos em papel ou de forma verbal, como agendamento de banho e tosa, controle de clientes e histórico dos animais.

O frontend foi construído com HTML, CSS e JavaScript puro, com foco em ser simples de usar em tablet ou celular no balcão. O backend usa Flask com SQLite para persistência dos dados, sem necessidade de infraestrutura complexa.

O módulo de agendamento envia um lembrete por WhatsApp via API do Twilio no dia anterior à consulta, reduzindo faltas em cerca de 30% nos testes com usuários reais.`,
    techs: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=80',
    github: 'https://github.com/henriquerodeghiero/petshop-manager',
    demo: null,
    featured: true,
    status: 'active',
    stars: 7,
    views: 312,
    createdAt: '2025-03-10',
  },
  {
    id: 'task-cli',
    name: 'Task CLI',
    description: 'Gerenciador de tarefas pela linha de comando. Suporte a prioridades, tags, filtros e exportação em CSV. Desenvolvido em Python puro, sem dependências externas.',
    longDescription: `Task CLI foi meu primeiro projeto Python "de verdade", desenvolvido para aprender estruturas de dados, persistência em arquivo JSON e design de interfaces de linha de comando.

O sistema suporta criação, edição, conclusão e exclusão de tarefas, com filtragem por tag ou prioridade. Os dados são salvos localmente em um arquivo JSON estruturado no diretório home do usuário.

Implementei também exportação para CSV compatível com Excel e Google Sheets, o que tornou a ferramenta útil no dia a dia para organizar minha rotina de estudos.`,
    techs: ['Python', 'Git'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    github: 'https://github.com/henriquerodeghiero/task-cli',
    demo: null,
    featured: true,
    status: 'active',
    stars: 4,
    views: 198,
    createdAt: '2025-01-22',
  },
  {
    id: 'portfolio-site',
    name: 'Portfólio Pessoal',
    description: 'Site de portfólio pessoal com HTML, CSS e JavaScript vanilla. Design responsivo, tema escuro e animações CSS. Hospedado no GitHub Pages.',
    longDescription: `Meu primeiro projeto web completo, construído do zero sem frameworks. O objetivo foi aprender os fundamentos de HTML semântico, CSS flexbox/grid e JavaScript DOM antes de partir para bibliotecas.

O site tem seções de apresentação, habilidades, projetos e contato. As animações de entrada são feitas com Intersection Observer API para disparar quando os elementos entram na viewport.

O formulário de contato usa a API do Formspree para enviar emails sem backend. Todo o deploy é feito automaticamente via GitHub Actions para o GitHub Pages a cada push na main.`,
    techs: ['HTML', 'CSS', 'JavaScript', 'Git'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    github: 'https://github.com/henriquerodeghiero/portfolio',
    demo: 'https://henriquerodeghiero.github.io/portfolio',
    featured: true,
    status: 'active',
    stars: 3,
    views: 410,
    createdAt: '2025-02-05',
  }
]