import portfolioData from "../mocks/portfolioCards.js";
import handleProjectsAnimatedCard from "./animatedProjectCard.js";

const swiperBtNext = document.querySelector(".bt-next");
const swiperBtPrev = document.querySelector(".bt-prev");
const portfolioCard = document.querySelector(".portfolio_card");
let swiper;

createSwipper();

function createSwipper() {
    if (window.innerWidth < 650) {
        swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        });
        swiperBtPrev.classList.remove("swiper-button-next");
        swiperBtNext.classList.remove("swiper-button-prev");
    } else {
        swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }, navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    addNewSlide(portfolioData);
    handleProjectsAnimatedCard(portfolioData);
}

//filter projects
export default function tradeSlides(list) {

    //close detailed project card if opened
    if (portfolioCard.classList.contains("show_card")) {
        portfolioCard.classList.toggle("show_card");
    }


    swiper.removeAllSlides();
    addNewSlide(list);

    handleProjectsAnimatedCard(list);
}
//add new html slide into swiper
function addNewSlide(list) {

    if (list.length === 0) {
        swiper.addSlide(0, `<div class="swiper-slide"> <img class="portfolio_img " src="./imgs/notFound.png"  alt="project picture">  </div>`)
    }

    list.forEach((e, i) => {
        swiper.addSlide(i, `<div class="swiper-slide"> <img class="portfolio_img " src="${e.imgPath}"  alt="project picture">  </div>`)
    });
}