const burger = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav.classList.toggle("open");
});

const aHeader = document.querySelectorAll(".accordion__header");
aHeader.forEach((Header) => {
  Header.addEventListener("click", () => {
    // Header.querySelector(".accordion__header").classList.toggle("active");
    Header.nextElementSibling.classList.toggle("active");
  });
});

// const headers = document.querySelectorAll(".accordion__header");
// headers.forEach((header) => {
//     header.addEventListener('click', () => {
//         header.nextElementSibling.classList.toggle("active");
        
//     });
// });