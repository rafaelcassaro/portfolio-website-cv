import portfolioData from "../mocks/portfolioCards.js";

const portfolioCard = document.querySelector(".portfolio_card");
const listSlideImgs = document.querySelectorAll(".portfolio_img");
let projectSelected = 999;

function gerarCardHTML(index, imgClass) {
  const { cardTitle, cardText, cardDeploy, cardGithub, cardTechImgs } = portfolioData[index];
  return `
    <img src="./imgs/portfolio/${imgClass}.png" id="img-portfio-card">
    <div class="portfolio_card__text_container">
        <div>
            <h3 class="portfolio_card__title">${cardTitle}</h3>
            <p class="portfolio_card__text">${cardText}</p>
        </div>
        <div>
            <a href="${cardDeploy}" target="_blank">
                <button class="portfolio_card__button">
                    <img class="card_img" src="./imgs/eye-transparent.png" alt="eye icon">Deploy
                </button>
            </a>
            <a href="${cardGithub}" target="_blank">
                <button class="portfolio_card__button">
                    <img class="card_img" src="./imgs/git-transparent.png" alt="github icon">Github
                </button>
            </a>
        </div>
        <p class="portfolio_card__technologies_title">Técnologias Utilizadas</p>
        <div class="card-tech-section">
            ${cardTechImgs}
        </div>
    </div>
  `;
}

listSlideImgs.forEach((element, index) => {
  element.addEventListener("click", () => {
    const imgClass = element.classList[element.classList.length - 1];

    if (portfolioCard.classList.contains("show_card") && projectSelected === index) {
      portfolioCard.classList.toggle("show_card");
      return;
    }

    portfolioCard.innerHTML = gerarCardHTML(index, imgClass);

    if (!portfolioCard.classList.contains("show_card")) {
      portfolioCard.classList.add("show_card");
    }

    projectSelected = index;
  });
});
