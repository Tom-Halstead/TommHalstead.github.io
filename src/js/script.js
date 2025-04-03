"use strict";

import "animate.css";

/**
 * Utility function to get the current page name.
 */
const getPageName = () =>
  window.location.pathname.split("/").pop() || "index.html";

/**
 * Highlights the current navigation button.
 */
const navHighlights = () => {
  const page = getPageName().toLowerCase();

  const navLinks = document.querySelectorAll(".nav-btn, .nav-menu");

  // Remove previous active states
  navLinks.forEach((link) => {
    link.removeAttribute("aria-current");
    link.classList.remove("active");
  });

  // Highlight current page
  navLinks.forEach((link) => {
    const href = link
      .getAttribute("href")
      .replace(/^\.?\//, "")
      .toLowerCase();
    const isHomePage =
      (page === "" || page === "index.html") && href.includes("index.html");
    const isMatchingPage = page === href;

    if (isHomePage || isMatchingPage) {
      link.setAttribute("aria-current", "page");
      link.classList.add("active");
    }
  });
};

/**
 * Handles dropdown menu toggling.
 */
const setupDropdown = () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const dropDown = document.querySelector(".dropdown-menu");
  const bars = document.querySelector("#bars");

  if (!toggleBtn || !dropDown || !bars) return;

  // Remove any existing event listeners before adding a new one
  toggleBtn.removeEventListener("click", toggleBtn._clickHandler);

  // Add a new event listener and store a reference to prevent duplicates
  toggleBtn._clickHandler = () => {
    dropDown.classList.toggle("open");
    bars.className = dropDown.classList.contains("open")
      ? "fa-solid fa-beat fa-xmark"
      : "fa-bars fa-beat fa-solid";
  };
  toggleBtn.addEventListener("click", toggleBtn._clickHandler);
};

/**
 * Initialize everything after the DOM loads.
 */
window.addEventListener("DOMContentLoaded", () => {
  const page = getPageName();

  // Initialize navigation highlights and dropdown functionality
  navHighlights();
  setupDropdown();

  if (page === "story.html") {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    modal.style.display = "none";

    // Attach event listeners to images with class "collage"
    document.querySelectorAll(".collage").forEach((img) => {
      img.addEventListener("click", function () {
        modalImg.src = this.src;
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      setTimeout(() => (modal.style.display = "none"), 300);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => (modal.style.display = "none"), 300);
      }
    });
  }
  if (page === "work.html" || page === "story.html") {
    const header = document.getElementById("header");
    const headerHeight = header.offsetHeight;
    const triggerPoint = headerHeight * 4;

    window.addEventListener("scroll", () => {
      if (window.scrollY >= triggerPoint) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    });
  }
  let copyrightDate = document.getElementById("date");
  if (copyrightDate) {
    copyrightDate.innerText = new Date().getFullYear();
  }
});
