export const developer = {
  name: 'Henrique Rodeghiero',
  title: 'Desenvolvedor Júnior',
  bio: 'Estudante de Análise e Desenvolvimento de Sistemas na UniSenac, com experiência em atendimento ao público e foco no desenvolvimento de soluções web e automações com Python e JavaScript.',
  location: 'Canguçu, RS',
  email: 'henrique_rodeghiero@hotmail.com',
  phone: '(53) 99156-6695',
  github: 'https://github.com/rdgfps',
  linkedin: 'https://linkedin.com/in/henriquerodeghiero',
  instagram: 'https://instagram.com/rodeghierotech',
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
    projects: 7,
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
    id: 'analise-dataset',
    name: 'Análise de dataset do kaggle',
  description: 'Análise de reservas de hotel desenvolvida em Python, com leitura de dataset, menu interativo, agrupamentos, rankings, comparação entre hotéis e geração de gráficos.',

longDescription: `Programa em Python baseado no dataset Hotel Booking Demand, usado para analisar reservas de hotel por meio de listas, dicionários e conjuntos. A aplicação permite agrupar reservas por tipo de hotel, listar os países com mais reservas, comparar City Hotel e Resort Hotel, analisar países usando operações de conjuntos e gerar gráficos em SVG com os resultados.`,
    techs: ['Python'],
    image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/analise-dataset',
    deploy: null,
    featured: true,
    status: 'active',
    stars: 0,
    views: 8,
    createdAt: '2026-05-25',
  },
  {
    id: 'catalogo-bpc',
    name: 'Catálogo de Produtos Bom Pra Cachorro',
  description: 'Catálogo digital para pet shop desenvolvido em Next.js, com importação de produtos, área admin protegida, busca inteligente, contatos via WhatsApp e identidade visual personalizada.',

longDescription: `Aplicação web criada para o Bom Pra Cachorro Pet Shop, com foco em apresentar produtos de forma rápida e diferente de um ecommerce tradicional. O projeto conta com catálogo público, filtros por categoria, busca estilo command palette, cards personalizados por tipo de produto, botão flutuante de WhatsApp com escolha de atendimento, seção de localização com radar visual e página 404 personalizada. Também inclui área administrativa protegida por login, importação de produtos por arquivo exportado do MarketUP e configuração de contatos e localização da loja.`,
    techs: ['TypeScript', 'Git', 'CSS', 'HTML'],
    image: 'https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/catalogo-bpc',
    deploy: 'https://catalogo-bpc.vercel.app/',
    featured: true,
    status: 'active',
    stars: 2,
    views: 60,
    createdAt: '2026-05-31',
  },
   {
    id: 'pdv-adega-demo',
    name: 'PDV - Santa Adega Demo',
    description: 'Sistema de gestão para adega/PDV desenvolvido com Next.js, TypeScript e SQLite. Possui controle de vendas, comandas, produtos e leitura de código de barras. Interface moderna e focada em uso rápido no balcão.',
    longDescription: `Sistema completo de ponto de venda (PDV) para adega, desenvolvido com foco em performance, usabilidade e aplicação em cenário real. O projeto utiliza Next.js 15 com App Router, TypeScript, TailwindCSS e shadcn/ui para uma interface moderna e responsiva.

O sistema permite gerenciar produtos, comandas e vendas de forma prática, incluindo funcionalidades como leitura de código de barras, aplicação de descontos, cálculo automático de troco e múltiplas formas de pagamento.

No backend, utiliza SQLite com Drizzle ORM para persistência de dados, além de validação com Zod e gerenciamento de estado com React Query. A autenticação é feita com Better Auth, garantindo proteção de rotas e segurança básica para o ambiente administrativo.

O objetivo do projeto foi simular um sistema real de uso em balcão, priorizando velocidade no atendimento e organização das vendas. A estrutura foi pensada para facilitar futuras expansões, como controle de estoque, relatórios financeiros e gestão de usuários.`,
    techs: ['CSS', 'TypeScript', 'Git'],
    image: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/sistema-adega-demo',
    deploy: 'https://sistema-adega-demo.vercel.app/',
    featured: true,
    status: 'active',
    stars: 0,
    views: 31,
    createdAt: '2026-05-02',
  },
  {
    id: 'lp-nutri',
    name: 'Landing Page Profissional',
    description: 'Landing page profissional para nutricionista, desenvolvida com foco em conversão e captação de pacientes. Design moderno, responsivo e otimizado para transmitir autoridade e facilitar o contato direto via WhatsApp.',

longDescription: `Landing page desenvolvida para nutricionista com foco em posicionamento profissional e atração de novos pacientes no digital. O projeto foi pensado para funcionar como uma vitrine estratégica, destacando os serviços oferecidos, diferenciais e a credibilidade da profissional.

A página conta com um design moderno, limpo e totalmente responsivo, garantindo uma ótima experiência tanto no desktop quanto no mobile. A estrutura foi planejada para conduzir o usuário de forma intuitiva, utilizando técnicas de conversão como chamadas para ação (CTAs), seções de prova social e apresentação clara dos benefícios do acompanhamento nutricional.

Além disso, a landing page foi otimizada para performance e carregamento rápido, com integração direta ao WhatsApp para facilitar o contato e aumentar a taxa de conversão.

O principal objetivo do projeto foi transformar visitantes em potenciais clientes, criando uma presença digital profissional e eficiente para a nutricionista.`,
    techs: ['CSS', 'TypeScript', 'Git'],
    image: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/lp-profissional',
    deploy: 'https://nutricionista-landing-rose.vercel.app/',
    featured: true,
    status: 'active',
    stars: 0,
    views: 27,
    createdAt: '2026-05-13',
  },
  {
    id: 'crud-cantina',
    name: 'CRUD - Cantina Escolar',
    description: 'Sistema CRUD para gerenciamento de cantina, permitindo cadastro, edição, listagem e exclusão de produtos e dados.',
    longDescription: `Projeto de um sistema CRUD voltado para gerenciamento de cantina, permitindo o controle de dados como produtos, pedidos ou registros relacionados.

A aplicação implementa as quatro operações fundamentais (Create, Read, Update e Delete), possibilitando cadastrar novos itens, visualizar registros existentes, atualizar informações e remover dados. O projeto foi desenvolvido com foco em organização lógica, manipulação de dados e estruturação de funcionalidades comuns em sistemas reais de gestão.`,
    techs: ['TypeScript'  , 'JavaScript', 'HTML', 'CSS'],
    image: 'https://plus.unsplash.com/premium_photo-1663050786427-8d71c177946c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/crud-cantina',
    deploy: null,
    featured: true,
    status: 'active',
    stars: 7,
    views: 312,
    createdAt: '2026-03-10',
  },
  {
    id: 'postai',
    name: 'PostAí',
    description: 'Dashboard demo para gerenciamento de posts em redes sociais, com criação, agendamento, calendário, métricas e perfil de usuário.',

longDescription: `Projeto de uma aplicação web voltada para planejamento e gerenciamento de conteúdo em redes sociais.

A plataforma permite realizar login em modo demo, criar posts, selecionar plataformas como Instagram, Facebook, Twitter, LinkedIn e TikTok, agendar publicações, acompanhar posts recentes e visualizar métricas no dashboard.

O sistema também conta com calendário editorial, tela de analytics, edição de perfil, configurações e suporte. A aplicação foi adaptada para funcionar como demo de portfólio, sem necessidade de backend, utilizando dados simulados e persistência local no navegador.

O projeto foi desenvolvido com foco em interface moderna, organização de componentes, manipulação de estado, rotas com React Router e experiência prática próxima de um sistema real de gestão de conteúdo digital.`,
    techs: ['TypeScript', 'HTML', 'CSS', 'Git'],
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/postai-tailwind',
    deploy: 'https://postai-pi.vercel.app/',
    featured: true,
    status: 'active',
    stars: 3,
    views: 102,
    createdAt: '2025-10-10',
  },
  {
    id: 'car-catalog',
    name: 'Catálogo de Carros',
    description: 'Catálogo de carros desenvolvido em React JS com funcionalidades de listagem, cadastro, pesquisa e interação com os veículos. Utiliza Json Server para simular API e persistência de dados.',
    longDescription: `Aplicação web feita em React JS que simula um catálogo de carros, permitindo listar, cadastrar e pesquisar veículos. Os usuários podem interagir com os modelos por meio de avaliações e comentários, com dados persistidos em uma API Fake (Json Server).

O projeto foi desenvolvido com foco em componentes reutilizáveis, rotas e gerenciamento de estado, servindo como prática de conceitos essenciais do desenvolvimento front-end moderno.`,
    techs: ['JavaScript', 'CSS', 'HTML'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/rdgfps/car-catalog',
    deploy: 'https://car-catalog-lime.vercel.app/',
    featured: true,
    status: 'active',
    stars: 0,
    views: 14,
    createdAt: '2026-01-22',
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
    deploy: null,
    featured: true,
    status: 'active',
    stars: 3,
    views: 410,
    createdAt: '2026-02-05',
  }
]
