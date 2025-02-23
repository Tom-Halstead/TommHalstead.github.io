"use strict";

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
 * Handles modal window functionality (uses display instead of visibility).
 */
const modalWindow = (e) => {
  const img = e.target.closest("img");
  const modal = document.getElementById("modalBox");
  const modalImage = document.getElementById("modal-image");

  if (img && modal && modalImage) {
    modal.style.display = "flex"; // Show modal using flex
    modalImage.src = img.src;
  }
};

/**
 * Closes the modal window (uses display instead of visibility).
 */
const closeModal = (e) => {
  const modal = document.getElementById("modalBox");
  const exitButton = document.querySelector(".close");

  if (modal && (e.target === modal || e.target === exitButton)) {
    modal.style.display = "none"; // Hide modal
  }
};

/**
 * Initialize everything after the DOM loads.
 */
window.addEventListener("DOMContentLoaded", () => {
  // Initialize navigation highlights and dropdown functionality
  navHighlights();
  setupDropdown();

  const page = getPageName();

  // For story.html, attach the modal event listener to the section
  if (page === "story.html") {
    document.querySelector("section")?.addEventListener("click", modalWindow);
  }

  document.addEventListener("click", closeModal);
});
