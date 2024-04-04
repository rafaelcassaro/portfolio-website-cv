import { dataPortfolio } from "./mockupPortfolio.js";

const portfolioCard = document.querySelector(".portfolio_card");
const portfolioContainer = document.querySelector(".portfolio");
const listSlideImgs = document.querySelectorAll(".portfolio_img");
let projectSelected = 999;

//pega a lista do carrossel no html e através de suas classes, da quantidade de classes, adiciona os textos de cada item da lista atraves do mockup que possui a mesma posicao e tamanho da lista
listSlideImgs.forEach((element, index) => {
    element.addEventListener('click', () => {


        if (portfolioCard.classList.contains('show_card')) {

            if (projectSelected === index) {
                portfolioCard.classList.toggle('show_card');

                return;
            } else {

                portfolioCard.innerHTML = `<img src="./imgs/portfolio/${element.classList[element.classList.length - 1]}.png" id="img-portfio-card">
                <div class="portfolio_card__text_container">
                    <div>
                        <h3 class="portfolio_card__title">${dataPortfolio.projects[index].cardTitle}</h3>
                        <p class="portfolio_card__text">${dataPortfolio.projects[index].cardText}</p>
                    </div>
                    <div>
                    <a href="${dataPortfolio.projects[index].cardDeploy}" target="_blank"><button class="portfolio_card__button"><img class="card_img" src="./imgs/eye-transparent.png" alt="eye icon">Deploy</button></a>
                    <a href="${dataPortfolio.projects[index].cardGithub}" target="_blank"><button class="portfolio_card__button"><img class="card_img" src="./imgs/git-transparent.png" alt="github icon">Github</button></a>
                    </div>
                    <p class="portfolio_card__technologies_title">Técnologias Utilizadas</p>
                    <div class="card-tech-section">
                    ${dataPortfolio.projects[index].cardTechImgs}
                    </div>
                </div>`

            }
        }

        if (!portfolioCard.classList.contains('show_card')) {


            portfolioCard.classList.toggle('show_card');

            projectSelected = 999;
            portfolioCard.innerHTML = `<img src="./imgs/portfolio/${element.classList[element.classList.length - 1]}.png" id="img-portfio-card">
            <div class="portfolio_card__text_container">
                <div>
                    <h3 class="portfolio_card__title">${dataPortfolio.projects[index].cardTitle}</h3>
                    <p class="portfolio_card__text">${dataPortfolio.projects[index].cardText}</p>
                </div>
                <div>
                <a href="${dataPortfolio.projects[index].cardDeploy}" target="_blank"><button class="portfolio_card__button"><img class="card_img" src="./imgs/eye-transparent.png" alt="eye icon">Deploy</button></a>
                <a href="${dataPortfolio.projects[index].cardGithub}" target="_blank"><button class="portfolio_card__button"><img class="card_img" src="./imgs/git-transparent.png" alt="github icon">Github</button></a>
                </div>
                <p class="portfolio_card__technologies_title">Técnologias Utilizadas</p>
                <div class="card-tech-section">
                ${dataPortfolio.projects[index].cardTechImgs}
                </div>
            </div>`

        }

        projectSelected = index;
    })
})
