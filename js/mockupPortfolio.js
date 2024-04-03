//fazer um objeto 'json' no final q contem todos eles
// portfolio: {
// 	titulo
// 	texto
// 	deploy
// 	github
// 	techs:{
// 		tech:1
// 		tech:2
// 		tech:3...
// 	}

// }

const cardTitles = [
    "Alurabooks",
    "Fokus",
    "Alurabooks-Consumo-Api",
    "Alura+"
]

const cardText = [
    "Projeto: Uma loja de venda de livros. <br> Apliquei layouts resposivos com media queries, e utilizei o HTML e CSS baseado em um protótipo do figma para construção do site"

]

const cardDeploy = [
    "https://rafaelcassaro.github.io/Alurabook-web/",
    "https://fokus-rafael-cassaro-costas-projects.vercel.app/",
    "https://alurabooks-list-rafael-cassaro-costas-projects.vercel.app/",
    "https://alura-plus-web-rafael-cassaro-costas-projects.vercel.app/"
]
const cardGithub = [
    "https://github.com/rafaelcassaro/Alurabook-web",
    "https://github.com/rafaelcassaro/fokus/tree/main",
    "https://github.com/rafaelcassaro/Alurabooks-list/tree/main",
    "https://github.com/rafaelcassaro/AluraPlus-web/tree/main"
]


export const dataPortfolio = {
    cardTitles,     //put title in expanded card
    cardText,       //put text in expanded card
    cardDeploy,     //put deplay link in expanded card
    cardGithub      //put github link in expanded card
}