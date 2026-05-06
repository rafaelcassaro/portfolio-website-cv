const themeToggles = document.querySelectorAll(".theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const hamburguerIcon = document.querySelector(".hamburguer_icon");


const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

setTheme(initialTheme);

themeToggles.forEach((themeToggle) => {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    nextTheme === "dark" ? hamburguerIcon.src = './imgs/menuham2.png' : hamburguerIcon.src = './imgs/menuham2-light.png';
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
   
  });
});

function setTheme(theme) {
  const isDark = theme === "dark";

  root.dataset.theme = isDark ? "dark" : "light";

  themeToggles.forEach((themeToggle) => {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Ativar modo claro" : "Ativar modo escuro"
    );
  });
}
