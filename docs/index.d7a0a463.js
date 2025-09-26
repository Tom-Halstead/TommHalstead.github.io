const e=()=>window.location.pathname.split("/").pop().toLowerCase()||"index.html",t=e=>{let t=document.querySelectorAll(".nav-btn, .nav-menu");if(t.length){for(let e of t)e.removeAttribute("aria-current"),e.classList.remove("active");for(let o of t){let t=(o.getAttribute("href")||"").replace(/^\.?\//,"").toLowerCase(),r=(""===e||"index.html"===e)&&t.includes("index.html"),n=e===t;(r||n)&&(o.setAttribute("aria-current","page"),o.classList.add("active"))}}},o=()=>{let e=document.querySelector(".toggle-btn"),t=document.querySelector(".dropdown-menu"),o=document.querySelector("#bars");e&&t&&o&&(e.replaceWith(e.cloneNode(!0)),document.querySelector(".toggle-btn").addEventListener("click",()=>{let e=t.classList.toggle("open");o.className=e?"fa-solid fa-beat fa-xmark":"fa-bars fa-beat fa-solid"},{passive:!0}))},r=()=>{let e=document.getElementById("image-modal"),t=document.getElementById("modal-img"),o=document.querySelector(".close");if(!e||!t||!o)return;e.style.display="none",document.addEventListener("click",o=>{let r=o.target.closest(".collage");r&&(t.src=r.src,e.style.display="flex",requestAnimationFrame(()=>e.classList.add("show")))},{passive:!0});let r=()=>{e.classList.remove("show"),setTimeout(()=>e.style.display="none",300)};o.addEventListener("click",r,{passive:!0}),e.addEventListener("click",t=>{t.target===e&&r()},{passive:!0})},n=()=>{let e=document.getElementById("header");if(!e)return;let t=4*e.offsetHeight;window.addEventListener("scroll",()=>{window.scrollY>=t?e.classList.add("header-fixed"):e.classList.remove("header-fixed")},{passive:!0})},s=()=>{let e=document.getElementById("date");e&&(e.innerText=new Date().getFullYear())};!function(){let e=`
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
}`.replace(/\s+/g," ");function t(){if(document.body?.dataset.cursor==="off")return;!function(){if(document.getElementById("custom-cursor-style"))return;let t=document.createElement("style");t.id="custom-cursor-style",t.textContent=e,document.head.appendChild(t)}();let t=document.createElement("div");t.className="cursor",document.body.appendChild(t),document.documentElement.classList.add("has-custom-cursor");let o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cursor-size"))||14,r=getComputedStyle(document.documentElement).getPropertyValue("--cursor-link-color").trim()||"darkred",n=innerWidth/2,s=innerHeight/2,a=n,c=s,d=(e,t,o)=>e+(t-e)*o;addEventListener("pointermove",e=>{n=e.clientX,s=e.clientY,t.style.backgroundColor=e.target.closest("a")?r:"#fff"},{passive:!0}),function e(){a=d(a,n,.7),c=d(c,s,.7),t.style.transform=`translate3d(${a-o/2}px, ${c-o/2}px, 0)`,requestAnimationFrame(e)}(),addEventListener("resize",()=>{n=Math.min(n,innerWidth),s=Math.min(s,innerHeight),o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cursor-size"))||o,r=getComputedStyle(document.documentElement).getPropertyValue("--cursor-link-color").trim()||r})}matchMedia("(pointer: coarse)").matches||("loading"===document.readyState?document.addEventListener("DOMContentLoaded",t,{once:!0}):t())}(),window.addEventListener("DOMContentLoaded",()=>{let a=e();t(a),o(),"story.html"===a&&r(),("work.html"===a||"story.html"===a)&&n(),document.getElementById("date")&&s()},{once:!0});
//# sourceMappingURL=index.d7a0a463.js.map
