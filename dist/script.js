const burger = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    hNav.classList.toggle("open");
})