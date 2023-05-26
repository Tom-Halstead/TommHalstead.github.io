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
  console.log(`test`);
};
// window.addEventListener("load", navHighlights);

const insertHeaderAndFooter = function () {
  if (window.location.pathname !== "/index.html") {
    const head = document.createElement("header");
    head.classList.add("head");
    const foot = document.createElement("footer");
    foot.classList.add("foot");
    head.innerHTML = `
  <nav class="nav">
    <a href="#" class="logo">Logo</a>
    <ul>
      <li class="nav-link">
        <a href="index.html" class="nav-btn">Home</a>
      </li>
      <li class="nav-link">
        <a href="story.html" class="nav-btn">Story</a>
      </li>
      <li class="nav-link">
        <a href="work.html" class="nav-btn">Work</a>
      </li>
      <li class="nav-link include">
        <a href="contact.html" class="nav-btn include">Contact</a>
      </li>
    </ul>
  </nav>`;

    foot.innerHTML = `
<section id="lab_social_icon_footer">
  <div class="container">
    <div class="text-center center-block">
      <a href="https://www.facebook.com/tommy.halstead">
        <i id="social-fb" class="fa fa-facebook-square fa-3x social"></i>
      </a><span class="seperator">|</span>
      <a href="https://twitter.com/bootsnipp">
        <i id="social-tw" class="fa fa-twitter-square fa-3x social"></i>
      </a><span class="seperator">|</span>
      <a href="https://github.com/TommHalstead">
        <i id ="social-gh" class="fa fa-github-square fa-3x social"></i>
      </a><span class="seperator">|</span>
      <a href="https://www.linkedin.com/in/thomas-halstead-073129180/">
        <i id="social-li" class="fa fa-linkedin-square fa-3x social"></i></i>
      </a>
      <p class="copyright"> <span class="copy">&copy;</span> 2023 All rights reserved | Designed By: Thomas Halstead</p>
    </div>
  </div>
</section>`;
    document.body.append(head);
    document.body.append(foot);
  }
  console.log(`test`);
};

window.addEventListener("load", () => {
  insertHeaderAndFooter();
  navHighlights();
});
