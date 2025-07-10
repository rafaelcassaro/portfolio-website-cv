const cards = [
  {
    cardTitle: "Next-AppRouter",
    cardDeploy: "https://learn-next-three-omega.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/learn-next",
    cardAbout: "Painel financeiro de faturas.",
    cardResume: " Curso do site oficial do Next.js sobre App Router onde aprendi, através da construção de uma aplicação web full-stack, conceitos de Styling, Optimizations, Routing, Data Fetching entre outros.",
    imgPath: "./imgs/portfolio/next-app-router-course.png",
    techs: ["html", "css", "typeScript", "react", "nextjs", "tailwind"],
    cardTechImgs: ["html-logo", "css3-logo", "typescript-logo", "react-logo", "nextjs-logo", "tailwind-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "typescript Icon", "React Icon", "Next.js Icon", "Tailwind Icon"]
  },
  {
    cardTitle: "Github-api-consumer",
    cardDeploy: "https://search-github-repos-rho.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/search-github-repos",
    cardAbout: "Procura de repositórios no GitHub.",
    cardResume: "Busca repositórios de um usuário no GitHub. O projeto foi feito com shallow routing e useParams, pois a API do GitHub possui uma quantidade limitada de requisições.",
    imgPath: "./imgs/portfolio/search-git-repos.png",
    techs: ["html", "css", "typeScript", "react", "nextjs", "tailwind"],
    cardTechImgs: ["html-logo", "css3-logo", "typescript-logo", "react-logo", "nextjs-logo", "tailwind-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "typescript Icon", "React Icon", "Next.js Icon", "Tailwind Icon"]
  },

  {
    cardTitle: "Frontend-challenge-rocketseat",
    cardDeploy: "https://frontend-ecommerce-rocketseat-eje2v48tv.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/frontend-ecommerce-rocketseat",
    cardAbout: "Telas de um e-commerce (items e carrinho).",
    cardResume: "Contém minha solução inspirada em um desáfio Frontend da Rocketseat. A diferença é que eu consumi a api pública FakeStoreApi para pegar os dados da loja.",
    imgPath: "./imgs/portfolio/frontend-rocketseat.png",
    techs: ["html", "css", "typeScript", "react", "nextjs", "styledcomponent"],
    cardTechImgs: ["html-logo", "css3-logo", "typescript-logo", "react-logo", "nextjs-logo", "styledcomponent-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "typescript Icon", "React Icon", "Next.js Icon", "Styled Components Icon"]
  },
  {
    cardTitle: "Meteora",
    cardDeploy: "https://react-globals-state.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/react-globals-state",
    cardAbout: "E-commerce em fase de desenvolvimento inicial.",
    cardResume: "Gerenciei estados globais do react utilizando, context APi para evitar 'prop drilling', useReducer para controle de estado e useMemo para otimização e desempenho.",
    imgPath: "./imgs/portfolio/react-globals-state.png",
    techs: ["html", "css", "javascript", "react"],
    cardTechImgs: ["html-logo", "css3-logo", "js-logo2", "react-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "javascript Icon", "React Icon"]
  },
  {
    cardTitle: "SeachCountry",
    cardDeploy: "https://countries-api-react-rafael-cassaro-costas-projects.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/countries-api-react",
    cardAbout: "Consumo de uma API com React.",
    cardResume: "Consumi uma API pública de informações de países, e através de React Hooks, mostrei na tela e salvei em cards as informações.",
    imgPath: "./imgs/portfolio/countryApi.png",
    techs: ["html", "css", "javascript", "react"],
    cardTechImgs: ["html-logo", "css3-logo", "js-logo2", "react-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "javascript Icon", "React Icon"]
  },
  {
    cardTitle: "Alurabooks",
    cardDeploy: "https://rafaelcassaro.github.io/Alurabook-web/",
    cardGithub: "https://github.com/rafaelcassaro/Alurabook-web",
    cardAbout: "Landing page de loja de venda de livros.",
    cardResume: "Apliquei layouts responsivos com media queries, e utilizei HTML e CSS baseado em um protótipo do Figma para construção do site.",
    imgPath: "./imgs/portfolio/alurabooks.png",
    techs: ["html", "css"],
    cardTechImgs: ["html-logo", "css3-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon"]
  },
  {
    cardTitle: "Fokus",
    cardDeploy: "https://fokus-rafael-cassaro-costas-projects.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/fokus/tree/main",
    cardAbout: "Site para estudo com método Pomodoro.",
    cardResume: "Estudo sobre manipulação de DOM com JS e localStorage.",
    imgPath: "./imgs/portfolio/fokus.png",
    techs: ["html", "css", "javascript"],
    cardTechImgs: ["html-logo", "css3-logo", "js-logo2"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "javascript Icon"]
  },
  {
    cardTitle: "Alurabooks-Consumo-Api",
    cardDeploy: "https://alurabooks-list-rafael-cassaro-costas-projects.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/Alurabooks-list/tree/main",
    cardAbout: "Opções de livros em uma loja.",
    cardResume: "Estudo sobre manipulação de arrays e filtros de objetos na página.",
    imgPath: "./imgs/portfolio/Alurabooks-Consumo-Api.png",
    techs: ["html", "css", "javascript"],
    cardTechImgs: ["html-logo", "css3-logo", "js-logo2"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon", "javascript Icon"]
  },
  {
    cardTitle: "OptimusTech",
    cardDeploy: "https://optimus-tech-rafael-cassaro-costas-projects.vercel.app/",
    cardGithub: "https://github.com/rafaelcassaro/OptimusTech",
    cardAbout: "Site fictício para cliente.",
    cardResume: "Cliente fictício fornecido pelo desafio Alura 7DaysOfCode. Site feito seguindo template do Figma.",
    imgPath: "./imgs/portfolio/optimustech.png",
    techs: ["html", "css"],
    cardTechImgs: ["html-logo", "css3-logo"],
    cardTechImgsAlt: ["HTML Icon", "CSS Icon"]
  }
];

export default cards;