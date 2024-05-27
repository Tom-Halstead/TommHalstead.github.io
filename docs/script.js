"use strict";

const navHighlights = function () {
  document.querySelectorAll(".nav-btn").forEach((link) => {
    if (link.pathname === window.location.pathname || link.pathname === "/") {
      link.setAttribute("aria-current", "page");
    }
  });
};

const insertHTML = function () {
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/index.html"
  ) {
    const headerMarkup = `
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
      </div>`;

    const footerMarkup = `
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
  </div>
</div >`;

    document
      .querySelector("header")
      .insertAdjacentHTML("afterbegin", headerMarkup);

    document
      .querySelector("footer")
      .insertAdjacentHTML("afterbegin", footerMarkup);
  }
};

const openDropDown = function () {
  document.querySelector(".dropdown-menu").classList.toggle("open");
  const dropDown = document.querySelector(".dropdown-menu");
  const dropOpen = dropDown.classList.contains("open");
  const bars = document.querySelector("#bars");
  const mediaQuery = window.matchMedia("(min-width: 576px)");

  bars.classList = dropOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars fa-beat";

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

// document
//   .querySelectorAll(`.hex`)
//   .forEach((el) => el.addEventListener(`click`, () => console.log("clicked")));

const gallery = document.querySelector(`section`);
const modal = document.getElementById("modalBox");
const exitButton = document.querySelector(".close");

const modalWindow = function (e) {
  const img = e.target.closest("img");
  const modalImage = document.getElementById("modal-image");
  if (e.target === img) {
    modal.style.visibility = "visible";
    modalImage.src = img.src;
  }
};

const closeModal = function (e) {
  if (e.target === modal || e.target === exitButton) {
    modal.style.visibility = "hidden";
  }
};

gallery.addEventListener(`click`, modalWindow);
document.addEventListener(`click`, closeModal);
