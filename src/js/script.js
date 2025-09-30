"use strict";

// import "animate.css";

// /* -------------------- UTIL -------------------- */
// const getPageName = () =>
//   window.location.pathname.split("/").pop().toLowerCase() || "index.html";

// /* -------------------- NAV HIGHLIGHTS -------------------- */
// const navHighlights = (page) => {
//   const navLinks = document.querySelectorAll(".nav-btn, .nav-menu");
//   if (!navLinks.length) return;

//   // Reset
//   for (const link of navLinks) {
//     link.removeAttribute("aria-current");
//     link.classList.remove("active");
//   }

//   // Highlight
//   for (const link of navLinks) {
//     const href = (link.getAttribute("href") || "")
//       .replace(/^\.?\//, "")
//       .toLowerCase();
//     const isHome =
//       (page === "" || page === "index.html") && href.includes("index.html");
//     const isMatch = page === href;
//     if (isHome || isMatch) {
//       link.setAttribute("aria-current", "page");
//       link.classList.add("active");
//     }
//   }
// };

// /* -------------------- RANDOM NAV TEXT HIGHLIGHTS -------------------- */
// const randomizeNavHighlights = () => {
//   // Helper: very light pastel text color
//   const pastel = () => {
//     const h = Math.floor(Math.random() * 360); // hue 0–360
//     const s = Math.floor(80 + Math.random() * 20); // 50–70% saturation (a little less washed out)
//     const l = Math.floor(60 + Math.random() * 20); // 50–70% lightness (darker than before)
//     return `hsl(${h} ${s}% ${l}%)`;
//   };

//   const links = document.querySelectorAll(".nav-btn, .nav-menu");
//   links.forEach((link) => {
//     // Skip the "current page" link so it keeps its normal highlight
//     if (link.getAttribute("aria-current") === "page") return;

//     const color = pastel();
//     link.classList.add("nav-highlighted"); // adds smooth transition
//     link.style.color = color;
//   });
// };

// /* -------------------- DROPDOWN -------------------- */
// const setupDropdown = () => {
//   const toggleBtn = document.querySelector(".toggle-btn");
//   const dropDown = document.querySelector(".dropdown-menu");
//   const bars = document.querySelector("#bars");
//   if (!toggleBtn || !dropDown || !bars) return;

//   const onClick = () => {
//     const isOpen = dropDown.classList.toggle("open");
//     bars.className = isOpen
//       ? "fa-solid fa-beat fa-xmark"
//       : "fa-bars fa-beat fa-solid";
//   };

//   // Ensure single listener
//   toggleBtn.replaceWith(toggleBtn.cloneNode(true));
//   const freshBtn = document.querySelector(".toggle-btn");
//   freshBtn.addEventListener("click", onClick, { passive: true });
// };

// /* -------------------- STORY MODAL (delegated) -------------------- */
// const setupStoryModal = () => {
//   const modal = document.getElementById("image-modal");
//   const modalImg = document.getElementById("modal-img");
//   const closeBtn = document.querySelector(".close");
//   if (!modal || !modalImg || !closeBtn) return;

//   modal.style.display = "none";

//   // Delegate clicks on any future .collage image
//   document.addEventListener(
//     "click",
//     (e) => {
//       const img = e.target.closest(".collage");
//       if (!img) return;
//       modalImg.src = img.src;
//       modal.style.display = "flex";
//       requestAnimationFrame(() => modal.classList.add("show"));
//     },
//     { passive: true }
//   );

//   const hide = () => {
//     modal.classList.remove("show");
//     setTimeout(() => (modal.style.display = "none"), 300);
//   };

//   closeBtn.addEventListener("click", hide, { passive: true });
//   modal.addEventListener(
//     "click",
//     (e) => {
//       if (e.target === modal) hide();
//     },
//     { passive: true }
//   );
// };

// /* -------------------- HEADER PIN (work/story) -------------------- */
// const setupHeaderPin = () => {
//   const header = document.getElementById("header");
//   if (!header) return;
//   const triggerPoint = header.offsetHeight;

//   window.addEventListener(
//     "scroll",
//     () => {
//       if (window.scrollY >= triggerPoint) header.classList.add("header-fixed");
//       else header.classList.remove("header-fixed");
//     },
//     { passive: true }
//   );
// };

// /* -------------------- COPYRIGHT YEAR -------------------- */
// const setCopyright = () => {
//   const el = document.getElementById("date");
//   if (el) el.innerText = new Date().getFullYear();
// };

// /* -------------------- CUSTOM CURSOR (no trail) -------------------- */
// (function customCursor() {
//   const CSS = `
// :root{ --cursor-size:18px; --cursor-link-color: darkred; }
// .has-custom-cursor,
// .has-custom-cursor * { cursor:none !important; }
// .cursor{
//   position:fixed; top:0; left:0;
//   width:var(--cursor-size); height:var(--cursor-size);
//   border-radius:50%;
//   background:#FFFFFF;
//   pointer-events:none;
//   will-change:transform, background-color;
//   z-index:2147483647;
//   transform:translate3d(-9999px,-9999px,0);
//   transition:background-color .12s ease;
// }
// @media (prefers-reduced-motion: reduce){
//   .has-custom-cursor{ cursor:auto; }
//   .cursor{ display:none; }
// }`.replace(/\s+/g, " ");

//   if (matchMedia("(pointer: coarse)").matches) return;

//   function injectCSS() {
//     if (document.getElementById("custom-cursor-style")) return;
//     const s = document.createElement("style");
//     s.id = "custom-cursor-style";
//     s.textContent = CSS;
//     document.head.appendChild(s);
//   }

//   function enable() {
//     if (document.body?.dataset.cursor === "off") return;

//     injectCSS();

//     const cursor = document.createElement("div");
//     cursor.className = "cursor";
//     document.body.appendChild(cursor);
//     document.documentElement.classList.add("has-custom-cursor");

//     let cs =
//       parseFloat(
//         getComputedStyle(document.documentElement).getPropertyValue(
//           "--cursor-size"
//         )
//       ) || 14;
//     let linkColor =
//       getComputedStyle(document.documentElement)
//         .getPropertyValue("--cursor-link-color")
//         .trim() || "darkred";

//     let targetX = innerWidth / 2;
//     let targetY = innerHeight / 2;
//     let lastX = targetX;
//     let lastY = targetY;

//     const lerp = (a, b, n) => a + (b - a) * n;

//     addEventListener(
//       "pointermove",
//       (e) => {
//         targetX = e.clientX;
//         targetY = e.clientY;
//         cursor.style.backgroundColor = e.target.closest("a")
//           ? linkColor
//           : "#ffffffff";
//       },
//       { passive: true }
//     );

//     (function loop() {
//       lastX = lerp(lastX, targetX, 1);
//       lastY = lerp(lastY, targetY, 1);
//       cursor.style.transform = `translate3d(${lastX - cs / 2}px, ${
//         lastY - cs / 2
//       }px, 0)`;
//       requestAnimationFrame(loop);
//     })();

//     addEventListener("resize", () => {
//       targetX = Math.min(targetX, innerWidth);
//       targetY = Math.min(targetY, innerHeight);
//       cs =
//         parseFloat(
//           getComputedStyle(document.documentElement).getPropertyValue(
//             "--cursor-size"
//           )
//         ) || cs;
//       linkColor =
//         getComputedStyle(document.documentElement)
//           .getPropertyValue("--cursor-link-color")
//           .trim() || linkColor;
//     });
//   }

//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", enable, { once: true });
//   } else {
//     enable();
//   }
// })();

// /* -------------------- ONE-PIECE SCROLL UNROLL -------------------- */
// const setupWholeBlockUnroll = () => {
//   const block = document.querySelector("div.max-width");
//   if (!block) return;

//   // mark as scroll-roll container
//   block.classList.add("scroll-roll");

//   // add visible toggle
//   const btn = document.createElement("button");
//   btn.type = "button";
//   btn.className = "scroll-toggle";
//   btn.setAttribute("aria-expanded", "false");
//   btn.innerHTML = `<span class="label">Unroll</span> <span class="chev">▾</span>`;
//   block.appendChild(btn);

//   const setState = (open) => {
//     block.classList.toggle("is-open", open);
//     btn.setAttribute("aria-expanded", String(open));
//     btn.querySelector(".label").textContent = open ? "Collapse" : "Unroll";
//     btn.querySelector(".chev").textContent = open ? "▴" : "▾";
//   };

//   // clicking the toggle always toggles state
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     setState(!block.classList.contains("is-open"));
//   });

//   // clicking inside the block toggles too, unless on a link or the toggle
//   block.addEventListener("click", (e) => {
//     if (e.target.closest("a, .scroll-toggle")) return;
//     setState(!block.classList.contains("is-open"));
//   });

//   // keyboard accessibility
//   block.tabIndex = 0;
//   block.setAttribute("role", "button");
//   block.setAttribute("aria-expanded", "false");
//   block.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       setState(!block.classList.contains("is-open"));
//     }
//   });
// };

// /* -------------------- BOOT -------------------- */
// window.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     const page = getPageName();

//     navHighlights(page);
//     randomizeNavHighlights(); // random pastel text colors

//     setupDropdown();
//     if (page === "about.html") {
//       setupStoryModal();
//       setupWholeBlockUnroll();
//     }

//     if (page === "projects.html" || page === "about.html") setupHeaderPin();

//     document.getElementById("date") && setCopyright();
//   },
//   { once: true }
// );

// console.log("Hi");

"use strict";

import "animate.css";

/* -------------------- UTIL -------------------- */
const getPageName = () =>
  window.location.pathname.split("/").pop().toLowerCase() || "index.html";

/* -------------------- NAV HIGHLIGHTS -------------------- */
const navHighlights = (page) => {
  const navLinks = document.querySelectorAll(".nav-btn, .nav-menu");
  if (!navLinks.length) return;

  for (const link of navLinks) {
    link.removeAttribute("aria-current");
    link.classList.remove("active");
  }

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

/* -------------------- RANDOM NAV TEXT HIGHLIGHTS -------------------- */
const randomizeNavHighlights = () => {
  const pastel = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(80 + Math.random() * 20);
    const l = Math.floor(60 + Math.random() * 20);
    return `hsl(${h} ${s}% ${l}%)`;
  };

  const links = document.querySelectorAll(".nav-btn, .nav-menu");
  links.forEach((link) => {
    if (link.getAttribute("aria-current") === "page") return;
    const color = pastel();
    link.classList.add("nav-highlighted");
    link.style.color = color;
  });
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

  document.addEventListener(
    "click",
    (e) => {
      const img = e.target.closest(".collage");
      if (!img) return;
      modalImg.src = img.src;
      modal.style.display = "flex";
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
  const triggerPoint = header.offsetHeight;

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
:root{ --cursor-size:18px; --cursor-link-color: darkred; }
.has-custom-cursor,
.has-custom-cursor * { cursor:none !important; }
.cursor{
  position:fixed; top:0; left:0;
  width:var(--cursor-size); height:var(--cursor-size);
  border-radius:50%;
  background:#FFFFFF;
  pointer-events:none;
  will-change:transform, background-color;
  z-index:2147483647;
  transform:translate3d(-9999px,-9999px,0);
  transition:background-color .12s ease;
}
@media (prefers-reduced-motion: reduce){
  .has-custom-cursor{ cursor:auto; }
  .cursor{ display:none; }
}`.replace(/\s+/g, " ");

  if (matchMedia("(pointer: coarse)").matches) return;

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

    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
    document.documentElement.classList.add("has-custom-cursor");

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

    addEventListener(
      "pointermove",
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        cursor.style.backgroundColor = e.target.closest("a")
          ? linkColor
          : "#ffffffff";
      },
      { passive: true }
    );

    (function loop() {
      lastX = lerp(lastX, targetX, 1);
      lastY = lerp(lastY, targetY, 1);
      cursor.style.transform = `translate3d(${lastX - cs / 2}px, ${
        lastY - cs / 2
      }px, 0)`;
      requestAnimationFrame(loop);
    })();

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

/* -------------------- ONE-PIECE SCROLL UNROLL -------------------- */
const setupWholeBlockUnroll = () => {
  const block = document.querySelector("div.max-width");
  if (!block) return;

  block.classList.add("scroll-roll");

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "scroll-toggle";
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = `<span class="label">Unroll</span> <span class="chev">▾</span>`;
  block.appendChild(btn);

  const setState = (open) => {
    block.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector(".label").textContent = open ? "Collapse" : "Unroll";
    btn.querySelector(".chev").textContent = open ? "▴" : "▾";
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setState(!block.classList.contains("is-open"));
  });

  block.addEventListener("click", (e) => {
    if (e.target.closest("a, .scroll-toggle")) return;
    setState(!block.classList.contains("is-open"));
  });

  block.tabIndex = 0;
  block.setAttribute("role", "button");
  block.setAttribute("aria-expanded", "false");
  block.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setState(!block.classList.contains("is-open"));
    }
  });
};

/* -------------------- TYPEWRITER (keeps inner spans/styles) -------------------- */
function wrapChars(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const frag = document.createDocumentFragment();
    const text = node.nodeValue;
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.className = "t-char";
      span.textContent = text[i];
      frag.appendChild(span);
    }
    node.replaceWith(frag);
    return;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    const children = Array.from(node.childNodes);
    for (const c of children) wrapChars(c);
  }
}

function typewriter(el, speedMs = 45, startDelayMs = 0) {
  if (!el) return;

  // Avoid double-wrapping if hot-reloaded
  if (!el.querySelector(".t-char")) {
    wrapChars(el);
  }

  const chars = Array.from(el.querySelectorAll(".t-char"));

  // Insert a blinking caret before first char (or at end if no chars)
  const caret = document.createElement("span");
  caret.className = "type-caret";
  if (chars[0]?.parentNode) {
    chars[0].parentNode.insertBefore(caret, chars[0]);
  } else {
    el.appendChild(caret);
  }

  let i = 0;
  const step = () => {
    if (i >= chars.length) return;
    chars[i].classList.add("show");
    chars[i].insertAdjacentElement("afterend", caret);
    i++;
    if (i < chars.length) setTimeout(step, speedMs);
  };

  if (startDelayMs > 0) setTimeout(step, startDelayMs);
  else step();
}

/* -------------------- BOOT -------------------- */
window.addEventListener(
  "DOMContentLoaded",
  () => {
    const page = getPageName();

    navHighlights(page);
    randomizeNavHighlights();

    setupDropdown();
    if (page === "about.html") {
      setupStoryModal();
      setupWholeBlockUnroll();
    }

    if (page === "projects.html" || page === "about.html") setupHeaderPin();

    // Typewriter only on home page: target the one h2 inside .text
    if (page === "index.html") {
      const h2 = document.querySelector(".text h2");
      // start after your existing animate.css delay (~2s)
      typewriter(h2, /*speed*/ 45, /*startDelay*/ 2000);
    }

    document.getElementById("date") && setCopyright();
  },
  { once: true }
);

console.log("Hi");
