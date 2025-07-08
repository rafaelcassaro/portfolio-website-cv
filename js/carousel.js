import portfolioData from "../mocks/portfolioCards.js";
import handleProjectsAnimatedCard from "./animatedProjectCard.js";

const swiperBtNext = document.querySelector(".bt-next");
const swiperBtPrev = document.querySelector(".bt-prev");

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

    portfolioData.forEach((e, i) => {
        swiper.addSlide(i, `<div class="swiper-slide"> <img class="portfolio_img " src="${e.imgPath}"  alt="project picture">  </div>`)
    });
    handleProjectsAnimatedCard(portfolioData);
}

export default function tradeSlides(list) {
    swiper.removeAllSlides();
    list.forEach((e, i) => {
        swiper.addSlide(i, `<div class="swiper-slide"> <img class="portfolio_img " src="${e.imgPath}"  alt="project picture">  </div>`)
    });

    handleProjectsAnimatedCard(list);
}