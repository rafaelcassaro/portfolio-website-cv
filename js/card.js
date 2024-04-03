import { dataPortfolio } from "./mockupPortfolio.js";

const portfolioCard = document.querySelector(".portfolio_card");
const slideAlurabooks = document.querySelector(".portfolio_img");
const portfolioContainer = document.querySelector(".portfolio");
const listSlideImgs = document.querySelectorAll(".portfolio_img");
let projectSelected = 999;
portfolioContainer.style.height = 110 + 'vh';

listSlideImgs.forEach((element, index) => {
    element.addEventListener('click', () => {


        console.log(projectSelected);
        if (portfolioCard.classList.contains('hidden')) {
            portfolioCard.classList.toggle('hidden');
            projectSelected = 999;
        }
        if (!portfolioCard.classList.contains('hidden')) {

            if (projectSelected === index) {
                portfolioCard.classList.toggle('hidden');
                //portfolioContainer.style.height = 100 + 'vh';

            } else {
                //portfolioContainer.style.height = 120 + 'vh';
                portfolioCard.innerHTML = `<img src="./imgs/portfolio/${element.classList[element.classList.length - 1]}.png" id="img-portfio-card">
                <div class="portfolio_card__text_container">
                    <div>
                        <h3 class="portfolio_card__title">${dataPortfolio.cardTitles[index]}</h3>
                        <p class="portfolio_card__text">${dataPortfolio.cardText}</p>
                    </div>
                    <div>
                    <a href="${dataPortfolio.cardDeploy[index]}" target="_blank"><button class="portfolio_card__button"><img class="card_img" src="./imgs/eye-transparent.png" alt="eye icon">Deploy</button></a>
                    <a href="${dataPortfolio.cardGithub[index]}" target="_blank"><button class="portfolio_card__button"><img class="card_img" src="./imgs/git-transparent.png" alt="github icon">Github</button></a>
                    </div>
                    <p class="portfolio_card__technologies_title">Técnologias Utilizadas</p>
                    <div>
                    <img class="technologies__img" src="./imgs/techs/x-logo.png" alt="Logo da Linguagem C">
                    <img class="technologies__img" src="./imgs/techs/x-logo.png" alt="Logo da Linguagem C">
                    </div>
                </div>`
            }
        }

        projectSelected = index;

    })
})

























// slideAlurabooks.addEventListener('click', () => {
//     portfolioCard.classList.toggle('hidden');
//     portfolioContainer.style.height = 120 + 'vh';

//     if (form.classList.contains('hidden')) {
//         portfolioContainer.style.height = 100 + 'vh';
//     } else {
//         portfolioContainer.style.height = 120 + 'vh';
//         listSlideImgs.forEach((element) => {
//             portfolioCard.innerHTML = `<img src="./imgs/portfolio/${element.classList[1]}.png" id="img-portfio-card">
//             <div class="portfolio_card__text_container">
//                 <div>
//                     <h3 class="portfolio_card__title">Ola mundo</h3>
//                     <p class="portfolio_card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Incidunt, accusamus quisquam. Ex
//                         eos,
//                         provident voluptatem ullam culpa rerum corporis? Voluptatibus quaerat explicabo molestiae
//                         perferendis eveniet sapiente unde impedit laudantium ratione?</p>
//                 </div>
//                 <div>
//                     <button class="portfolio_card__button">Deploy</button>
//                     <button class="portfolio_card__button">Github</button>
//                 </div>
//             </div>`;
//         })
//     }
// });