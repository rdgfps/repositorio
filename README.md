# DevFolio

Repositório de projetos moderno para desenvolvedores. Construído com React, Vite e TailwindCSS.

## Features

- Página inicial com perfil completo do dev (stats, stack, bio)
- Listagem de projetos com busca e filtro por tecnologia
- Ordenação por Stars, Views ou Recentes
- Página individual de cada projeto com descrição detalhada
- Sistema de favoritos (salvo no localStorage)
- Contador de visualizações por projeto
- Projetos relacionados na página de detalhe
- Tema escuro com efeitos visuais (grain, grid, gradients)
- Layout responsivo mobile-first
- Animações suaves (fade-up, hover, transições)
- Página de contato com formulário

## Como rodar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e dev

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

### Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

O `vercel.json` já está configurado para SPA routing.

## Customização

1. **Seus dados**: Edite `src/data/projects.js`
   - `developer` — nome, bio, stats, stack, links sociais
   - `projects` — lista de projetos com todas as propriedades

2. **Cores**: Edite as variáveis em `tailwind.config.js` (`accent.lime`, etc.)

3. **Fontes**: Edite os links no `index.html` e `tailwind.config.js`

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx        # Navegação com favoritos counter
│   ├── ProjectCard.jsx   # Card reutilizável de projeto
│   ├── SearchFilter.jsx  # Busca + filtro por tech
│   └── Footer.jsx
├── context/
│   └── AppContext.jsx    # Favoritos + views (localStorage)
├── data/
│   └── projects.js       # Dados do dev e projetos
├── pages/
│   ├── Home.jsx          # Hero + projetos em destaque
│   ├── Projects.jsx      # Lista com busca/filtro/sort
│   ├── ProjectDetail.jsx # Página individual do projeto
│   ├── Favorites.jsx     # Projetos salvos
│   └── Contact.jsx       # Formulário de contato
├── App.jsx               # Rotas
└── index.css             # Estilos globais + classes utilitárias
```
