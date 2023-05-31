"use strict";

(function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
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
    document
      .querySelector(".particles-js-canvas-el")
      .addEventListener(`click`, () => {
        myName.style.color = `${randomColor()}`;
      });
  }
})();

const navHighlights = function () {
  document.querySelectorAll(".nav-btn").forEach((link) => {
    if (
      link.pathname === window.location.pathname
      // window.location.pathname === "/"
    ) {
      link.setAttribute("aria-current", "page");
    }
  });
};

const insertHTML = function () {
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/index.html"
  ) {
    const markup = `
    <header class="head">
      <nav class="nav">
        <a href="#" class="logo">
          Logo
        </a>
        <ul>
          <li class="nav-link">
            <a href="index.html" class="nav-btn">
              Home
            </a>
          </li>
          <li class="nav-link">
            <a href="story.html" class="nav-btn">
              Story
            </a>
          </li>
          <li class="nav-link">
            <a href="work.html" class="nav-btn">
              Work
            </a>
          </li>
          <li class="nav-link">
            <a href="contact.html" class="nav-btn">
              Contact
            </a>
          </li>
        </ul>
        <div class="toggle-btn">
           <i id="bars" class="fa-solid fa-bars fa-beat"></i>
        </div>
      </nav>
       <div class="dropdown-menu">
         <li class="nav-drop">
           <a href="index.html" class="nav-menu">
               Home
           </a>
         </li>
         <li class="nav-drop">
            <a href="story.html" class="nav-menu">
               Story
            </a>
         </li>
         <li class="nav-drop">
            <a href="work.html" class="nav-menu">
               Work
            </a>
         </li>
         <li class="nav-drop">
           <a href="contact.html" class="nav-menu">
             Contact
           </a>
        </li>
      </div>
    </header>

    <footer id="lab_social_icon_footer">
      <div class="text-center center-block">
        <a
          class="social-link"
          href="https://www.facebook.com/tommy.halstead"
        >
          <i id="social-fb" class="fa fa-facebook-square fa-3x social"></i>
        </a>
        <span class="seperator">|</span>
        <a class="social-link" href="https://twitter.com/bootsnipp">
          <i id="social-tw" class="fa fa-twitter-square fa-3x social"></i>
        </a>
        <span class="seperator">|</span>

        <a class="social-link" href="https://github.com/TommHalstead">
          <i id="social-gh" class="fa fa-github-square fa-3x social"></i>
        </a>
        <span class="seperator">|</span>
        <a
          class="social-link"
          href="https://www.linkedin.com/in/thomas-halstead-073129180/"
        >
          <i id="social-li" class="fa fa-linkedin-square fa-3x social"></i>
        </a>
      </div>
      <p class="copyright">
        <span class="copy">&copy;</span> 2023 All rights reserved | Designed
        By: Thomas Halstead
      </p>
    </footer>
  </div>
</div >`;
    document
      .querySelector("#particles-js")
      .insertAdjacentHTML("afterbegin", markup);
  }
};

const toggle = document.querySelector(".toggle");

const invertColors = function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    const onButton = document.querySelector(".onoff");
    const nav = document.querySelector(".nav");
    const footer = document.querySelector("footer");
    const navBtns = document.querySelectorAll(".nav-btn");
    const copyright = document.querySelector(".copyright");
    const socialIcons = document.querySelectorAll(".fa");
    navBtns.forEach((link, index) => {
      socialIcons[index].classList.toggle("inverted");
      link.classList.toggle("inverted");
    });
    copyright.classList.toggle("test");
    toggle.classList.toggle("active");
    document.body.classList.toggle("invert");
    nav.classList.toggle("activate");
    footer.classList.toggle("activater");

    if (toggle.classList.contains("active")) {
      onButton.innerHTML = "ON";
    } else {
      onButton.innerHTML = "OFF";
      document.body.classList.remove("invert");
      nav.classList.remove("activate");
      footer.classList.remove("activater");
      toggle.classList.remove("active");
      copyright.classList.remove("inverted");
    }
  }
};

const mediaQuery = window.matchMedia("(min-width: 576px)");
const openDropDown = function () {
  document.querySelector(".dropdown-menu").classList.toggle("open");
  const dropDown = document.querySelector(".dropdown-menu");
  const dropOpen = dropDown.classList.contains("open");
  const bars = document.querySelector("#bars");
  bars.classList = dropOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars fa-beat";

  if (
    window.location.pathname !== "/index.html" &&
    window.location.pathname !== "/"
  ) {
  }

  mediaQuery.onchange = function () {
    if (dropOpen) {
      dropDown.classList.remove("open");
      bars.classList = dropOpen
        ? "fa-solid fa-bars fa-beat"
        : "fa-solid fa-xmark";
    }
  };
};

window.onload = function () {
  insertHTML();
  navHighlights();
  document.querySelector(".toggle-btn").addEventListener("click", openDropDown);
};

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  toggle.addEventListener(`click`, invertColors);
}

// toggleBtn.addEventListener(`click`, openDropDown);

const addDropMenuAndBars = function () {
  const toggleDiv = document.createElement("div");
  // nav.append(toggleDiv);
};
// addDropMenuAndBars();
