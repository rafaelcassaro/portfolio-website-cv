const sections = document.querySelectorAll("section");
const navOptions = document.querySelectorAll(".navigation__anchors-link")
let count = 0;

navOptions.forEach((option, index) => {
    //Como o HTML possui duas listas de navs após metade do array navOptions
    // é necesserio fazer um contador diminutivo para selecionar a section correta
    //pois a varivael sections possui metade do tamanho de navOptions 
    if (index > 4) {
        count++;
        option.addEventListener('click', (evento) => {
            evento.preventDefault();
            console.log(sections[index - count].offsetTop);
            const targetOffsetTop = sections[index - count].offsetTop;
            console.log(targetOffsetTop);

            window.scroll({
                top: targetOffsetTop,
                left: 100,
                behavior: "smooth",
            });
        })
    } else {
        option.addEventListener('click', (evento) => {
            evento.preventDefault();
            console.log(sections[index].offsetTop);
            const targetOffsetTop = sections[index].offsetTop;
            console.log(targetOffsetTop);

            window.scroll({
                top: targetOffsetTop,
                left: 100,
                behavior: "smooth",
            });
        })
    }

})


//---------------------nav-and-hover-when-in-section--------------------

const navShow = document.querySelector(".github-icon");
const posY = navShow.getBoundingClientRect().top;
//-------nav-anchors-text-----------
const navAbout = document.getElementById("nav-about");
const navTech = document.getElementById("nav-technologies");
const navPort = document.getElementById("nav-portfolio");
const navContact = document.getElementById("nav-contact");

// const navAbout = document.querySelector("nav-about");
// const navTech = document.querySelector("nav-technologies");
// const navPort = document.querySelector("nav-portfolio");


//----sections-height-length-----------------------
const aboutSection = document.querySelector(".about_me")
const technologiesSection = document.querySelector(".technologies")
const portfolioSection = document.querySelector(".portfolio")
const contactSection = document.querySelector(".footer_contact")

const aboutTop = aboutSection.getBoundingClientRect().top;
const aboutBottom = aboutSection.getBoundingClientRect().bottom;

const techSecTop = technologiesSection.getBoundingClientRect().top;
const techSecBottom = technologiesSection.getBoundingClientRect().bottom;

const portfolioTop = portfolioSection.getBoundingClientRect().top;
const portfolioBottom = portfolioSection.getBoundingClientRect().bottom;

const contactTop = contactSection.getBoundingClientRect().top;
const contactBottom = contactSection.getBoundingClientRect().bottom;


window.addEventListener('scroll', () => {
    const stickyElement = this.document.querySelector(".navigation");
    //console.log(window.scrollY);

    if (window.scrollY > posY) {
        stickyElement.style.display = 'grid';
    } else if (window.scrollY < posY) {
        stickyElement.style.display = 'none';
    }
    //-------------
    if (window.scrollY >= aboutTop - 220 && window.scrollY < aboutBottom) {
        navAbout.style.color = "var(--color-primary)";
    } else {
        navAbout.style.color = "var(--color-secundary)";
    }

    if (window.scrollY >= techSecTop - 100 && window.scrollY < techSecBottom - 100) {
        navTech.style.color = "var(--color-primary)";
    } else {
        navTech.style.color = "var(--color-secundary)";
    }

    if (window.scrollY >= portfolioTop - 140 && window.scrollY < portfolioBottom) {
        navPort.style.color = "var(--color-primary)";
    } else {
        navPort.style.color = "var(--color-secundary)";
    }

    if (window.scrollY >= contactTop - 1000 && window.scrollY < contactBottom) {
        navContact.style.color = "var(--color-primary)";
    } else {
        navContact.style.color = "var(--color-secundary)";
    }

    if(navContact.style.color === "var(--color-primary)"){
        navPort.style.color = "var(--color-secundary)";
    }

})

navOptions.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.color = "var(--color-primary)";
    })

    element.addEventListener("mouseout", () => {
        element.style.color = "var(--color-secundary)";
    })

})




