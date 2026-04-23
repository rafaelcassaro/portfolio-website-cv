// Seleciona os elementos do overlay
const overlay = document.getElementById('overlay-project-card');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('overlay-close-btn');

// Seleciona todas as imagens dos projetos principais
const projectImages = document.querySelectorAll('.main_projects__img');

// Função para abrir o overlay
function openOverlay(imageSrc) {
  overlayImg.src = imageSrc;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Previne scroll
}

// Função para fechar o overlay
function closeOverlay() {
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Restaura scroll
}

// Adiciona event listeners para cada imagem
projectImages.forEach(img => {
  img.addEventListener('click', () => {
    openOverlay(img.src);
  });
  img.style.cursor = 'pointer'; // Indica que é clicável
});

// Fecha o overlay ao clicar no botão de fechar
closeBtn.addEventListener('click', closeOverlay);

// Fecha o overlay ao clicar no fundo (fora da imagem)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeOverlay();
  }
});

// Fecha o overlay ao pressionar a tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeOverlay();
  }
});


function createCardHTML(index, list) {
  const { cardTitle, cardDeploy, cardGithub, cardAbout, cardResume, imgPath, cardTechImgs, cardTechImgsAlt, projectType } = list[index];
  let techsIcon = "";

  if (cardTechImgs.length > 0) {
    cardTechImgs.forEach((e, i) => {
      techsIcon += `<img class='portfolio_technologies__img card-tech-img' src='./imgs/techs/${e}.png' alt='${cardTechImgsAlt[i]}'>`;
    })
  }
  //different shape per type of project
  if (projectType === "tcc") {
    return `
    <img src="${imgPath}" id="img-portfio-card">
    <div class="portfolio_card__text_container">
        <div>
            <h3 class="portfolio_card__title">${cardTitle}</h3>
            <p class="portfolio_card__text">
            
            <span class='text-bold'>Projeto:</span> ${cardAbout} <br>---<br>${cardResume}
            </p>
        </div>
        <div>
            <a href="${list[index].cardDocument}" target="_blank">
                <button class="portfolio_card__button">
                    <img class="card_img" src="./imgs/eye-transparent.png" alt="eye icon">projeto
                </button>
            </a>
            <a href="${cardDeploy}" target="_blank">
                <button class="portfolio_card__button">
                    <img class="card_img" src="./imgs/git-transparent.png" alt="github icon">front-end
                </button>
            </a>
            <a href="${cardGithub}" target="_blank">
                <button class="portfolio_card__button">
                    <img class="card_img" src="./imgs/git-transparent.png" alt="github icon">back-end
                </button>
            </a>
        </div>
        <p class="portfolio_card__technologies_title">Técnologias Utilizadas</p>
        <div class="card-tech-section">
            ${techsIcon}
        </div>
    </div>
  `;
  }

  if (projectType === "backend") {
    return `
    <img src="${imgPath}" id="img-portfio-card">
    <div class="portfolio_card__text_container">
        <div>
            <h3 class="portfolio_card__title">${cardTitle}</h3>
            <p class="portfolio_card__text">
            
            <span class='text-bold'>Projeto:</span> ${cardAbout} <br>---<br>${cardResume}
            </p>
        </div>
        <div>
            <a href="${cardGithub}" target="_blank">
                <button class="portfolio_card__button">
                    <img class="card_img" src="./imgs/git-transparent.png" alt="github icon">código
                </button>
            </a>
        </div>
        <p class="portfolio_card__technologies_title">Técnologias Utilizadas</p>
        <div class="card-tech-section">
            ${techsIcon}
        </div>
    </div>
  `;
  }


  return `
    <img src="${imgPath}" id="img-portfio-card">
    <div class="portfolio_card__text_container">
        <div>
            <h3 class="portfolio_card__title">${cardTitle}</h3>
            <p class="portfolio_card__text">
            
            <span class='text-bold'>Projeto:</span> ${cardAbout} <br>---<br>${cardResume}
            </p>
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
            ${techsIcon}
        </div>
    </div>
  `;
}


export default function handleMainProjects(list) {
  const portfolioCard = document.querySelector(".portfolio_card");
  const listSlideImgs = document.querySelectorAll(".portfolio_img");

    if(list.length === 0) {
        return;
    }


  listSlideImgs.forEach((element, index) => {
    element.addEventListener("click", () => {

      if (portfolioCard.classList.contains("show_card") && projectSelected === index) {
        portfolioCard.classList.toggle("show_card");
        return;
      }

      portfolioCard.innerHTML = createCardHTML(index, list);

      if (!portfolioCard.classList.contains("show_card")) {
        portfolioCard.classList.add("show_card");
      }

      projectSelected = index;
    });
  });
}