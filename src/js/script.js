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

  // Remove previous active states
  document.querySelectorAll(".nav-btn").forEach((link) => {
    link.removeAttribute("aria-current");
    link.classList.remove("active");
  });

  // Highlight current page
  document.querySelectorAll(".nav-btn").forEach((link) => {
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

    // Attach event listeners to images with class "collage"
    document.querySelectorAll(".collage").forEach((img) => {
      img.addEventListener("click", function () {
        console.log("clicked");
        modalImg.src = this.src; // Corrected to use 'this' instead of 'img'
        modal.style.display = "flex"; // Ensure modal is shown
        setTimeout(() => modal.classList.add("show"), 10); // Smooth fade-in effect
      });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      setTimeout(() => (modal.style.display = "none"), 300); // Delay hiding for fade-out
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => (modal.style.display = "none"), 300);
      }
    });
  }
});
