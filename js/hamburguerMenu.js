const hamburguerIcon = document.querySelector(".hamburguer_icon");
const menuList = document.querySelector("#lista");
const section = document.querySelectorAll('section');
const menuOptions = document.querySelectorAll(".navigation__anchors-link");

let menuOpen = false;


// open-close the hamburguer menu list
hamburguerIcon.addEventListener('click', toggleMenu);

// add for each section, if clicked close the menu
section.forEach((element) => {
    element.onclick = () => nonSelectedMenuHamb();
})

menuOptions.forEach((element) => {
    element.onclick = () => nonSelectedMenuHamb();
})


//trade picture when menu is closed
function nonSelectedMenuHamb() {
    menuOpen = false;
    hamburguerIcon.src = './imgs/menuham2.png'
    menuList.classList.add("hamb-close")
}

function toggleMenu() {
    tradeMenu();
    menuList.classList.toggle("hamb-close");
}

function tradeMenu() {
    console.log(menuOpen);
    if (!menuOpen) {
        hamburguerIcon.src = './imgs/menuham1.png'
        menuOpen = true;
    }
    else {
        menuOpen = false;
        hamburguerIcon.src = './imgs/menuham2.png'
    }
}