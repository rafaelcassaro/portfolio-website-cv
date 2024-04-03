const sections = document.querySelectorAll("section");
const navOptions = document.querySelectorAll(".navigation__anchors-link")

navOptions.forEach((option, index) => {
    option.addEventListener('click', (evento) => {
        evento.preventDefault();

        const targetOffsetTop = sections[index].offsetTop;
        console.log(targetOffsetTop);

        window.scroll({
            top: targetOffsetTop,
            left: 100,
            behavior: "smooth",
        });
    })
})


//---------------------nav-and-hover-when-in-section--------------------

const navShow = document.querySelector(".github-icon");
const posY = navShow.getBoundingClientRect().top;
//-------nav-anchors-text-----------
const navAbout = document.getElementById("nav-about");
const navTech = document.getElementById("nav-technologies");
const navPort = document.getElementById("nav-portfolio");

//----sections
const aboutSection =document.querySelector(".about_me")
const technologiesSection = document.querySelector(".technologies")
const portfolioSection = document.querySelector(".portfolio")

const aboutTop = aboutSection.getBoundingClientRect().top;
const aboutBottom = aboutSection.getBoundingClientRect().bottom;

const techSecTop = technologiesSection.getBoundingClientRect().top;
const techSecBottom = technologiesSection.getBoundingClientRect().bottom;

const portfolioTop = portfolioSection.getBoundingClientRect().top;
const portfolioBottom = portfolioSection.getBoundingClientRect().bottom;



window.addEventListener('scroll', ()=> {
    const stickyElement = this.document.querySelector(".navigation");
    console.log(window.scrollY);
    
    if (window.scrollY > posY) {
        stickyElement.style.display = 'grid';
    } else if (window.scrollY < posY) {
        stickyElement.style.display = 'none';
    }
    //-------------
    if(window.scrollY >= aboutTop - 100 && window.scrollY < aboutBottom){
        navAbout.style.color = "var(--color-primary)";
    }else{
        navAbout.style.color = "var(--color-secundary)";
    }

    if(window.scrollY >= techSecTop - 100 && window.scrollY < techSecBottom - 20){
        navTech.style.color = "var(--color-primary)";
    }else{
        navTech.style.color = "var(--color-secundary)";
    }

    if(window.scrollY >= portfolioTop - 70 && window.scrollY < portfolioBottom){
        navPort.style.color = "var(--color-primary)";
    }else{
        navPort.style.color = "var(--color-secundary)";
    }

})




function rolar() {
    window.scrollTo(0, 500)
}




// rolamento.addEventListener('click', rolar);



// const elemento = this.document.querySelector(".about__img")
// const posY = elemento.getBoundingClientRect().top;
// console.log(posY);
// window.addEventListener('scroll', function () {
//     const stickyElement = this.document.querySelector(".header");

//     //const threshold = 400;
//     //console.log(window.scrollY);

//     if (window.scrollY > posY - 61) {
//         stickyElement.style.display = 'none';
//         //stickyElement.style.top = (window.scrollY - threshold) + 'px';
//     } else if (window.scrollY < posY - 140) {
//         stickyElement.style.display = 'grid';
//     } else {
//         //stickyElement.style.display =  'none';
//     }

// })