"use strict";

import "animate.css";

/* -------------------- UTIL -------------------- */
const getPageName = () =>
  window.location.pathname.split("/").pop().toLowerCase() || "index.html";

/* -------------------- NAV HIGHLIGHTS -------------------- */
const navHighlights = (page) => {
  const navLinks = document.querySelectorAll(".nav-btn, .nav-menu");
  if (!navLinks.length) return;

  // Reset
  for (const link of navLinks) {
    link.removeAttribute("aria-current");
    link.classList.remove("active");
  }

  // Highlight
  for (const link of navLinks) {
    const href = (link.getAttribute("href") || "")
      .replace(/^\.?\//, "")
      .toLowerCase();
    const isHome =
      (page === "" || page === "index.html") && href.includes("index.html");
    const isMatch = page === href;
    if (isHome || isMatch) {
      link.setAttribute("aria-current", "page");
      link.classList.add("active");
    }
  }
};

/* -------------------- DROPDOWN -------------------- */
const setupDropdown = () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const dropDown = document.querySelector(".dropdown-menu");
  const bars = document.querySelector("#bars");
  if (!toggleBtn || !dropDown || !bars) return;

  const onClick = () => {
    const isOpen = dropDown.classList.toggle("open");
    bars.className = isOpen
      ? "fa-solid fa-beat fa-xmark"
      : "fa-bars fa-beat fa-solid";
  };

  // Ensure single listener
  toggleBtn.replaceWith(toggleBtn.cloneNode(true));
  const freshBtn = document.querySelector(".toggle-btn");
  freshBtn.addEventListener("click", onClick, { passive: true });
};

/* -------------------- STORY MODAL (delegated) -------------------- */
const setupStoryModal = () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  if (!modal || !modalImg || !closeBtn) return;

  modal.style.display = "none";

  // Delegate clicks on any future .collage image
  document.addEventListener(
    "click",
    (e) => {
      const img = e.target.closest(".collage");
      if (!img) return;
      modalImg.src = img.src;
      modal.style.display = "flex";
      // next frame to allow transition
      requestAnimationFrame(() => modal.classList.add("show"));
    },
    { passive: true }
  );

  const hide = () => {
    modal.classList.remove("show");
    setTimeout(() => (modal.style.display = "none"), 300);
  };

  closeBtn.addEventListener("click", hide, { passive: true });
  modal.addEventListener(
    "click",
    (e) => {
      if (e.target === modal) hide();
    },
    { passive: true }
  );
};

/* -------------------- HEADER PIN (work/story) -------------------- */
const setupHeaderPin = () => {
  const header = document.getElementById("header");
  if (!header) return;
  const triggerPoint = header.offsetHeight * 4; // single layout read

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY >= triggerPoint) header.classList.add("header-fixed");
      else header.classList.remove("header-fixed");
    },
    { passive: true }
  );
};

/* -------------------- COPYRIGHT YEAR -------------------- */
const setCopyright = () => {
  const el = document.getElementById("date");
  if (el) el.innerText = new Date().getFullYear();
};

/* -------------------- CUSTOM CURSOR (no trail) -------------------- */
(function customCursor() {
  const CSS = `
:root{ --cursor-size:18px; --cursor-link-color: darkred; } /* tweak here */
.has-custom-cursor{ cursor:none; }
/* Hide native cursor on interactive elements while active */
.has-custom-cursor a,
.has-custom-cursor button,
.has-custom-cursor input,
.has-custom-cursor textarea,
.has-custom-cursor select,
.has-custom-cursor label,
.has-custom-cursor img { cursor:none !important; }
.cursor{
  position:fixed; top:0; left:0;
  width:var(--cursor-size); height:var(--cursor-size);
  border-radius:50%;
  background:#fff;
  pointer-events:none;
  will-change:transform, background-color;
  z-index:2147483647;
  transform:translate3d(-9999px,-9999px,0);
  transition:background-color .12s ease;
}
@media (prefers-reduced-motion: reduce){
  .has-custom-cursor{ cursor:auto; }
  .cursor{ display:none; }
}`.replace(/\s+/g, " "); // compact

  if (matchMedia("(pointer: coarse)").matches) return; // skip on touch

  function injectCSS() {
    if (document.getElementById("custom-cursor-style")) return;
    const s = document.createElement("style");
    s.id = "custom-cursor-style";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function enable() {
    if (document.body?.dataset.cursor === "off") return;

    injectCSS();

    // Create once
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
    document.documentElement.classList.add("has-custom-cursor");

    // Cache size; recompute on resize (avoid CSS reads per frame)
    let cs =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--cursor-size"
        )
      ) || 14;
    let linkColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--cursor-link-color")
        .trim() || "darkred";

    let targetX = innerWidth / 2;
    let targetY = innerHeight / 2;
    let lastX = targetX;
    let lastY = targetY;

    const lerp = (a, b, n) => a + (b - a) * n;

    // Input
    addEventListener(
      "pointermove",
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        cursor.style.backgroundColor = e.target.closest("a")
          ? linkColor
          : "#fff";
      },
      { passive: true }
    );

    // Animation
    (function loop() {
      lastX = lerp(lastX, targetX, 0.7);
      lastY = lerp(lastY, targetY, 0.7);
      cursor.style.transform = `translate3d(${lastX - cs / 2}px, ${
        lastY - cs / 2
      }px, 0)`;
      requestAnimationFrame(loop);
    })();

    // Recompute size/color on resize or when CSS var changes (manual hook)
    addEventListener("resize", () => {
      targetX = Math.min(targetX, innerWidth);
      targetY = Math.min(targetY, innerHeight);
      cs =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--cursor-size"
          )
        ) || cs;
      linkColor =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--cursor-link-color")
          .trim() || linkColor;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enable, { once: true });
  } else {
    enable();
  }
})();

/* -------------------- BOOT -------------------- */
window.addEventListener(
  "DOMContentLoaded",
  () => {
    const page = getPageName();

    navHighlights(page);
    setupDropdown();

    if (page === "story.html") setupStoryModal();
    if (page === "work.html" || page === "story.html") setupHeaderPin();

    document.getElementById("date") && setCopyright();
  },
  { once: true }
);
