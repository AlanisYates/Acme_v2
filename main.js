// Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

const menuToggler = selectElement(".menu-toggle");
const navList = selectElement(".nav-list");
const nav = selectElement("nav");

menuToggler.addEventListener("click", function () {
  menuToggler.classList.toggle("close");
  navList.classList.toggle("open");
});
