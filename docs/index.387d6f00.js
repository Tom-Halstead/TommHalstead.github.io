const e=()=>window.location.pathname.split("/").pop().toLowerCase()||"index.html",t=e=>{let t=document.querySelectorAll(".nav-btn, .nav-menu");if(t.length){for(let e of t)e.removeAttribute("aria-current"),e.classList.remove("active");for(let o of t){let t=(o.getAttribute("href")||"").replace(/^\.?\//,"").toLowerCase(),r=(""===e||"index.html"===e)&&t.includes("index.html"),n=e===t;(r||n)&&(o.setAttribute("aria-current","page"),o.classList.add("active"))}}},o=()=>{let e=()=>{let e=Math.floor(360*Math.random()),t=Math.floor(80+20*Math.random()),o=Math.floor(60+20*Math.random());return`hsl(${e} ${t}% ${o}%)`};document.querySelectorAll(".nav-btn, .nav-menu").forEach(t=>{if("page"===t.getAttribute("aria-current"))return;let o=e();t.classList.add("nav-highlighted"),t.style.color=o})},r=()=>{let e=document.querySelector(".toggle-btn"),t=document.querySelector(".dropdown-menu"),o=document.querySelector("#bars");e&&t&&o&&(e.replaceWith(e.cloneNode(!0)),document.querySelector(".toggle-btn").addEventListener("click",()=>{let e=t.classList.toggle("open");o.className=e?"fa-solid fa-beat fa-xmark":"fa-bars fa-beat fa-solid"},{passive:!0}))},n=()=>{let e=document.getElementById("image-modal"),t=document.getElementById("modal-img"),o=document.querySelector(".close");if(!e||!t||!o)return;e.style.display="none",document.addEventListener("click",o=>{let r=o.target.closest(".collage");r&&(t.src=r.src,e.style.display="flex",requestAnimationFrame(()=>e.classList.add("show")))},{passive:!0});let r=()=>{e.classList.remove("show"),setTimeout(()=>e.style.display="none",300)};o.addEventListener("click",r,{passive:!0}),e.addEventListener("click",t=>{t.target===e&&r()},{passive:!0})},s=()=>{let e=document.getElementById("header");if(!e)return;let t=4*e.offsetHeight;window.addEventListener("scroll",()=>{window.scrollY>=t?e.classList.add("header-fixed"):e.classList.remove("header-fixed")},{passive:!0})},a=()=>{let e=document.getElementById("date");e&&(e.innerText=new Date().getFullYear())};!function(){let e=`
:root{ --cursor-size:18px; --cursor-link-color: darkred; }
.has-custom-cursor{ cursor:none; }
.has-custom-cursor a,
.has-custom-cursor button,
.has-custom-cursor input,
.has-custom-cursor textarea,
.has-custom-cursor select,
.has-custom-cursor label,
.has-custom-cursor img,
.has-custom-cursor span { cursor:none !important; }
.cursor{
  position:fixed; top:0; left:0;
  width:var(--cursor-size); height:var(--cursor-size);
  border-radius:50%;
  background:#39FF00;
  pointer-events:none;
  will-change:transform, background-color;
  z-index:2147483647;
  transform:translate3d(-9999px,-9999px,0);
  transition:background-color .12s ease;
}
@media (prefers-reduced-motion: reduce){
  .has-custom-cursor{ cursor:auto; }
  .cursor{ display:none; }
}`.replace(/\s+/g," ");function t(){if(document.body?.dataset.cursor==="off")return;!function(){if(document.getElementById("custom-cursor-style"))return;let t=document.createElement("style");t.id="custom-cursor-style",t.textContent=e,document.head.appendChild(t)}();let t=document.createElement("div");t.className="cursor",document.body.appendChild(t),document.documentElement.classList.add("has-custom-cursor");let o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cursor-size"))||14,r=getComputedStyle(document.documentElement).getPropertyValue("--cursor-link-color").trim()||"darkred",n=innerWidth/2,s=innerHeight/2,a=n,l=s,c=(e,t,o)=>e+(t-e)*o;addEventListener("pointermove",e=>{n=e.clientX,s=e.clientY,t.style.backgroundColor=e.target.closest("a")?r:"#ffffffff"},{passive:!0}),function e(){a=c(a,n,1),l=c(l,s,1),t.style.transform=`translate3d(${a-o/2}px, ${l-o/2}px, 0)`,requestAnimationFrame(e)}(),addEventListener("resize",()=>{n=Math.min(n,innerWidth),s=Math.min(s,innerHeight),o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cursor-size"))||o,r=getComputedStyle(document.documentElement).getPropertyValue("--cursor-link-color").trim()||r})}matchMedia("(pointer: coarse)").matches||("loading"===document.readyState?document.addEventListener("DOMContentLoaded",t,{once:!0}):t())}();const l=()=>{let e=document.querySelector("div.max-width");if(!e)return;e.classList.add("scroll-roll");let t=document.createElement("button");t.type="button",t.className="scroll-toggle",t.setAttribute("aria-expanded","false"),t.innerHTML=`<span class="label">Unroll</span> <span class="chev">\u{25BE}</span>`,e.appendChild(t);let o=o=>{e.classList.toggle("is-open",o),t.setAttribute("aria-expanded",String(o)),t.querySelector(".label").textContent=o?"Collapse":"Unroll",t.querySelector(".chev").textContent=o?"▴":"▾"};t.addEventListener("click",t=>{t.stopPropagation(),o(!e.classList.contains("is-open"))}),e.addEventListener("click",t=>{t.target.closest("a, .scroll-toggle")||o(!e.classList.contains("is-open"))}),e.tabIndex=0,e.setAttribute("role","button"),e.setAttribute("aria-expanded","false"),e.addEventListener("keydown",t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),o(!e.classList.contains("is-open")))})};window.addEventListener("DOMContentLoaded",()=>{let c=e();t(c),o(),r(),"story.html"===c&&n(),("work.html"===c||"story.html"===c)&&s(),l(),document.getElementById("date")&&a()},{once:!0});
//# sourceMappingURL=index.387d6f00.js.map
