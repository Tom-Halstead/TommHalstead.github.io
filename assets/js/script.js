"use strict";

const nav = document.querySelector(".nav");
const header = document.querySelector("header");

const stickyNav = () =>
  window.scrollY > window.innerHeight
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
window.addEventListener(`scroll`, stickyNav);
