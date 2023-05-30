"use strict";

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

// const insertHeaderAndFooter = function () {
//   if (window.location.pathname !== "/index.html") {
//     const head = document.createElement("header");
//     head.classList.add("head");
//     const foot = document.createElement("footer");
//     foot.classList.add("foot");
//     head.innerHTML = `
//   <nav class="nav">
//     <a href="#" class="logo">Logo</a>
//     <ul>
//       <li class="nav-link">
//         <a href="index.html" class="nav-btn">Home</a>
//       </li>
//       <li class="nav-link">
//         <a href="story.html" class="nav-btn">Story</a>
//       </li>
//       <li class="nav-link">
//         <a href="work.html" class="nav-btn">Work</a>
//       </li>
//       <li class="nav-link include">
//         <a href="contact.html" class="nav-btn include">Contact</a>
//       </li>
//     </ul>
//   </nav>`;

//     foot.innerHTML = `
// <section id="lab_social_icon_footer">
//   <div class="container">
//     <div class="onButton-center center-block">
//       <a href="https://www.facebook.com/tommy.halstead">
//         <i id="social-fb" class="fa fa-facebook-square fa-3x social"></i>
//       </a><span class="seperator">|</span>
//       <a href="https://twitter.com/bootsnipp">
//         <i id="social-tw" class="fa fa-twitter-square fa-3x social"></i>
//       </a><span class="seperator">|</span>
//       <a href="https://github.com/TommHalstead">
//         <i id ="social-gh" class="fa fa-github-square fa-3x social"></i>
//       </a><span class="seperator">|</span>
//       <a href="https://www.linkedin.com/in/thomas-halstead-073129180/">
//         <i id="social-li" class="fa fa-linkedin-square fa-3x social"></i></i>
//       </a>
//       <p class="copyright"> <span class="copy">&copy;</span> 2023 All rights reserved | Designed By: Thomas Halstead</p>
//     </div>
//   </div>
// </section>`;
//     document.body.append(head);
//     document.body.append(foot);
//   }
// };

const insertHTML = function () {
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/index.html"
  ) {
    const particlesDiv = document.querySelector("#particles-js");
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
    particlesDiv.insertAdjacentHTML("afterbegin", markup);
  }
};

const toggle = document.querySelector(".toggle");

const invertColors = function () {
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
};

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  toggle.addEventListener(`click`, invertColors);
}

const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
// const bars = document.querySelector("#bars");
const mediaQuery = window.matchMedia("(min-width: 576px)");

const openDropdown = function () {
  const bars = document.querySelector("#bars");

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

window.addEventListener("load", () => {
  insertHTML();
  navHighlights();
});

(function () {
  toggleBtn.addEventListener(`click`, openDropdown);
})();
