import portfolioData from "../mocks/portfolioCards.js";
import tradeSlides from "./carousel.js";


const portfolioFilterImgs = document.querySelectorAll(".portfolio__filter-img");
let filteredList = [];
const techsList = [];
//add click event to techs icons
for (const e of portfolioFilterImgs) {
    e.addEventListener("click", () => {


        e.classList.toggle("select-img");
        //add or remove tech from filter
        if (e.classList[1] === "select-img") {
            techsList.push(e.alt);
            console.log("techsList2: "+techsList);

        } else {
            techsList.splice(techsList.indexOf(e.alt), 1);
            
        }
        filter();
    });
}

//filter each project if he has all techs 
function filter() {
    let count = 0;
    filteredList = [];

    for (const project of portfolioData) {
        count = 0;
        //verify in selected techs if the project has all of them
        for (const tech of techsList) {
            if (!project.techs.includes(tech)) {
                break;  //if he hasnt one tech the loop will break
            }
            count++;
        }
        if (count === techsList.length) {//if the project has all the techs will add in filtered projects list
            filteredList.push(project);
        }
    }

    tradeSlides(filteredList);  //trade slides in swiper api
}