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
    id: 'caca-tesouro',
    name: 'Jogo Caça ao Tesouro 5x5',
    description: 'Jogo de caça ao tesouro em Python com tabuleiro 5x5, sistema de pontuação e ranking salvo em arquivo.',
    longDescription: `Projeto em Python de um jogo de caça ao tesouro no terminal, onde o jogador deve encontrar a posição correta em um tabuleiro 5x5 com número limitado de tentativas.
O sistema inclui validação de entrada, pontuação dinâmica a cada erro e um ranking persistente salvo em arquivo. Também conta com um modo administrador para facilitar testes e um menu interativo com opções de jogo, visualização e limpeza do ranking.`,
    techs: ['Python'],
    image: 'https://images.unsplash.com/photo-1612257998531-70e0d0a15f6d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/henriquerodeghiero/petshop-manager',
    demo: null,
    featured: true,
    status: 'active',
    stars: 2,
    views: 92,
    createdAt: '2025-03-10',
  },
  {
    id: 'crud-palavras',
    name: 'Gerenciador de Palavras e Dicas',
    description: 'Sistema CRUD em Python para gerenciamento de palavras e dicas, com operações de cadastro, listagem, atualização, exclusão e ordenação de dados.',
    longDescription: `Projeto em Python de um sistema CRUD para gerenciamento de palavras e dicas. Permite adicionar, listar, atualizar, excluir e ordenar registros, mantendo a consistência dos dados.

Desenvolvido com foco em lógica de programação, utilizando funções, estruturas de repetição e manipulação de listas, além de organização modular do código.`,
    techs: ['JavaScript', 'Git'],
    image: 'https://images.unsplash.com/photo-1650661926447-9efb2610f64c?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/crud-palavras-dicas',
    demo: null,
    featured: true,
    status: 'active',
    stars: 4,
    views: 198,
    createdAt: '2025-03-22',
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
    demo: null,
    featured: true,
    status: 'active',
    stars: 3,
    views: 410,
    createdAt: '2025-04-28',
  },
  {
    id: 'car-catalog',
    name: 'Catálogo de Carros',
    description: 'Catálogo de carros desenvolvido em React JS com funcionalidades de listagem, cadastro, pesquisa e interação com os veículos. Utiliza Json Server para simular API e persistência de dados.',
    longDescription: `Aplicação web feita em React JS que simula um catálogo de carros, permitindo listar, cadastrar e pesquisar veículos. Os usuários podem interagir com os modelos por meio de avaliações e comentários, com dados persistidos em uma API Fake (Json Server).

O projeto foi desenvolvido com foco em componentes reutilizáveis, rotas e gerenciamento de estado, servindo como prática de conceitos essenciais do desenvolvimento front-end moderno.`,
    techs: ['JavaScript', 'Git'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    github: 'https://github.com/rdgfps/car-catalog',
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
