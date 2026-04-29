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
    id: 'crud-cantina',
    name: 'CRUD - Cantina Escolar',
    description: 'Sistema CRUD para gerenciamento de cantina, permitindo cadastro, edição, listagem e exclusão de produtos e dados.',
    longDescription: `Projeto de um sistema CRUD voltado para gerenciamento de cantina, permitindo o controle de dados como produtos, pedidos ou registros relacionados.

A aplicação implementa as quatro operações fundamentais (Create, Read, Update e Delete), possibilitando cadastrar novos itens, visualizar registros existentes, atualizar informações e remover dados. O projeto foi desenvolvido com foco em organização lógica, manipulação de dados e estruturação de funcionalidades comuns em sistemas reais de gestão.`,
    techs: ['TypeScript'  , 'JavaScript', 'HTML', 'CSS'],
    image: 'https://plus.unsplash.com/premium_photo-1663050786427-8d71c177946c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/henriquerodeghiero/petshop-manager',
    demo: null,
    featured: true,
    status: 'active',
    stars: 7,
    views: 312,
    createdAt: '2025-03-10',
  },
  {
    id: 'car-catalog',
    name: 'Catálogo de Carros',
    description: 'Catálogo de carros desenvolvido em React JS com funcionalidades de listagem, cadastro, pesquisa e interação com os veículos. Utiliza Json Server para simular API e persistência de dados.',
    longDescription: `Aplicação web feita em React JS que simula um catálogo de carros, permitindo listar, cadastrar e pesquisar veículos. Os usuários podem interagir com os modelos por meio de avaliações e comentários, com dados persistidos em uma API Fake (Json Server).

O projeto foi desenvolvido com foco em componentes reutilizáveis, rotas e gerenciamento de estado, servindo como prática de conceitos essenciais do desenvolvimento front-end moderno.`,
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
    id: 'devfolio',
    name: 'Portfólio Dev Pessoal',
    description: 'Site de portfólio pessoal com HTML, CSS e JavaScript vanilla. Design responsivo, tema escuro e animações CSS. Hospedado no GitHub Pages.',
    longDescription: `Meu primeiro projeto web completo, construído do zero sem frameworks. O objetivo foi aprender os fundamentos de HTML semântico, CSS flexbox/grid e JavaScript DOM antes de partir para bibliotecas.

O site tem seções de apresentação, habilidades, projetos e contato. As animações de entrada são feitas com Intersection Observer API para disparar quando os elementos entram na viewport.

O formulário de contato usa a API do Formspree para enviar emails sem backend. Todo o deploy é feito automaticamente via GitHub Actions para o GitHub Pages a cada push na main.`,
    techs: ['HTML', 'CSS', 'JavaScript', 'Git'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    github: 'https://github.com/rdgfps/repositorio',
    demo: null,
    featured: true,
    status: 'active',
    stars: 3,
    views: 410,
    createdAt: '2025-02-05',
  }
]