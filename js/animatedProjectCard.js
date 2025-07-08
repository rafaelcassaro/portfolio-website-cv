let projectSelected = 999;

//------- create project card ------
function gerarCardHTML(index,list) {
  const { cardTitle, cardText, cardDeploy, cardGithub, imgPath, cardTechImgs } = list[index];
  return `
    <img src="${imgPath}" id="img-portfio-card">
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

export default function handleProjectsAnimatedCard(list) {
  const portfolioCard = document.querySelector(".portfolio_card");
  const listSlideImgs = document.querySelectorAll(".portfolio_img");


  listSlideImgs.forEach((element, index) => {
    element.addEventListener("click", () => {

      if (portfolioCard.classList.contains("show_card") && projectSelected === index) {
        portfolioCard.classList.toggle("show_card");
        return;
      }

      portfolioCard.innerHTML = gerarCardHTML(index,list);

      if (!portfolioCard.classList.contains("show_card")) {
        portfolioCard.classList.add("show_card");
      }

      projectSelected = index;
    });
  });
}