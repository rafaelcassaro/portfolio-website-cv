const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const sectionsRT = document.querySelectorAll(".opacity-hid");
sectionsRT.forEach((element) => myObserver.observe(element));


const oberserverHidden = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show_nav')
        } else {
            entry.target.classList.remove('show_nav')
        }
    })
})

const sectionsHidden = document.querySelectorAll(".hidden");
sectionsHidden.forEach((element) => oberserverHidden.observe(element));


