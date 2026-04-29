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
  },
  {
    id: 'price-checker',
    name: 'Price Checker',
    description: 'Script Python que monitora preços de produtos em sites de e-commerce e envia alertas por email quando o preço cai abaixo de um valor definido.',
    longDescription: `Price Checker surgiu de uma necessidade pessoal: queria comprar um HD externo mas o preço estava alto. Em vez de ficar checando manualmente, escrevi um script para fazer isso por mim.

Usa BeautifulSoup4 para scraping e smtplib para enviar os emails de alerta. A lista de produtos e preços-alvo é configurada em um arquivo JSON simples. O script roda via cron job a cada 6 horas.

Aprendi muito sobre ética de scraping, handling de erros de rede, parsing de HTML inconsistente entre lojas diferentes e configuração de tarefas agendadas no Linux.`,
    techs: ['Python', 'Git'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    github: 'https://github.com/henriquerodeghiero/price-checker',
    demo: null,
    featured: false,
    status: 'active',
    stars: 2,
    views: 95,
    createdAt: '2025-04-01',
  },
  {
    id: 'quiz-js',
    name: 'Quiz Interativo',
    description: 'Aplicação de quiz com banco de perguntas, timer, pontuação e ranking local. Interface animada construída com JavaScript e CSS puro.',
    longDescription: `Projeto desenvolvido como exercício de JavaScript para praticar manipulação de DOM, eventos, timers e armazenamento local com localStorage.

O quiz tem categorias de perguntas, timer regressivo por questão, feedback visual imediato e um sistema de pontuação que considera o tempo de resposta. O ranking é salvo localmente para comparar suas tentativas.

Foi o projeto em que mais aprendi sobre organização de código JavaScript — refatorei três vezes até chegar numa estrutura que considero limpa e legível, sem framework.`,
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80',
    github: 'https://github.com/henriquerodeghiero/quiz-js',
    demo: 'https://henriquerodeghiero.github.io/quiz-js',
    featured: false,
    status: 'active',
    stars: 1,
    views: 143,
    createdAt: '2025-02-28',
  },
  {
    id: 'crud-mysql',
    name: 'CRUD com MySQL',
    description: 'Aplicação CRUD completa com Python e MySQL. Interface via terminal para cadastro, consulta, atualização e remoção de registros em banco relacional.',
    longDescription: `Projeto acadêmico desenvolvido durante os estudos de banco de dados na UniSenac para colocar em prática os conceitos de SQL com MySQL.

Implementa as quatro operações básicas (Create, Read, Update, Delete) via interface interativa no terminal. Usa mysql-connector-python para a conexão, com tratamento de exceções para erros de integridade e conexão.

O schema modela um cadastro de clientes com endereço, contatos e histórico de compras — estrutura que eu queria entender antes de partir para ORMs.`,
    techs: ['Python', 'MySQL', 'Git'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
    github: 'https://github.com/henriquerodeghiero/crud-mysql',
    demo: null,
    featured: false,
    status: 'active',
    stars: 1,
    views: 88,
    createdAt: '2025-03-25',
  },
]
