"use strict";
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-btn");
const stickyNav = ()=>window.scrollY > window.innerHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
window.addEventListener(`scroll`, stickyNav);

//# sourceMappingURL=index.7e34b664.js.map
