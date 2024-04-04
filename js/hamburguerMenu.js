const bodyElement = document.body;
const hamburguerIcon = document.querySelector(".hamburguer_icon");

var menu = document.getElementById("lista");

bodyElement.addEventListener('click', toggleMenuBody);
hamburguerIcon.addEventListener('click', toggleMenu);



function toggleMenu() {
    menu.classList.toggle("hamb-open");
    hamburguerIcon.classList.toggle("hamburguer_icon2")
    hamburguerIcon.src = './imgs/MenuAberto.svg';

}


function toggleMenuBody() {
    console.log(!menu.classList.contains("hamb-open"));
    if (!menu.classList.contains("hamb-open")) {
        return;
    }
    else {
        menu.classList.add("hamb-open");
    }
}