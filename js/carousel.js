const swiperBtNext = document.querySelector(".bt-next");
const swiperBtPrev = document.querySelector(".bt-prev");


windowSize();

function windowSize() {
    if (window.innerWidth < 650) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }

        });
        swiperBtPrev.classList.remove("swiper-button-prev")
        swiperBtPrev.classList.remove("swiper-button-next")
        swiperBtNext.classList.remove("swiper-button-next")
        swiperBtNext.classList.remove("swiper-button-prev")
    } else {
        const swiper = new Swiper('.swiper', {
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

}


