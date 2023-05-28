"use strict";

const logo = document.querySelector(".logo");
const myName = document.querySelector(".name");

// const randomColor = () => {
//   return (
//     `#` +
//     Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, "0")
//       .toUpperCase()
//   );
// };

// const bodyClick = document.body.addEventListener(
//   `click`,
//   () => (myName.style.color = `${randomColor()}`)
// );

(function () {
  if (window.location.pathname === "/index.html") {
    const randomColor = () => {
      return (
        `#` +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
          .toUpperCase()
      );
    };
    const myName = document.querySelector(".name");
    const canvas = document
      .querySelector(".particles-js-canvas-el")
      .addEventListener(`click`, () => {
        myName.style.color = `${randomColor()}`;
      });
  }
})();

const navHighlights = function () {
  document.querySelectorAll(".nav-btn").forEach((link) => {
    if (link.pathname === window.location.pathname) {
      link.setAttribute("aria-current", "page");
    }
  });
};

window.addEventListener("load", () => {
  navHighlights();
});

const toggle = document.querySelector(".toggle");

const invertColors = function () {
  const text = document.querySelector(".text");
  const nav = document.querySelector(".nav");
  const footer = document.querySelector("footer");
  const socials = document.querySelectorAll(".social-link");

  toggle.classList.toggle("active");
  document.body.classList.toggle("invert");
  nav.classList.toggle("activate");
  footer.classList.toggle("activater");

  if (toggle.classList.contains("active")) {
    text.innerHTML = "ON";
  } else {
    text.innerHTML = "OFF";
    document.body.classList.remove("invert");
    nav.classList.remove("activate");
    footer.classList.remove("activater");
    toggle.classList.remove("active");
  }
};

if (window.location.pathname === "/index.html") {
  toggle.addEventListener(`click`, invertColors);
}

const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const bars = document.querySelector("#bars");
const mediaQuery = window.matchMedia("(min-width: 786px)");

const openDropdown = function () {
  dropDownMenu.classList.toggle("open");
  const dropOpen = dropDownMenu.classList.contains("open");
  bars.classList = dropOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars fa-beat";

  mediaQuery.onchange = function () {
    if (dropOpen) {
      dropDownMenu.classList.remove("open");
      bars.classList = dropOpen
        ? "fa-solid fa-bars fa-beat"
        : "fa-solid fa-xmark";
    }
  };
};
toggleBtn.addEventListener(`click`, openDropdown);

const insertDropDown = function () {};
