const e=()=>window.location.pathname.split("/").pop()||"index.html",a=function(){if(!["story.html","work.html","contact.html"].includes(e()))return;let a=`
    <nav class="nav">
      <a href="/" class="logo">Logo</a>
      <ul>
        <li class="nav-link"><a href="index.html" class="nav-btn">Home</a></li>
        <li class="nav-link"><a href="story.html" class="nav-btn">Story</a></li>
        <li class="nav-link"><a href="work.html" class="nav-btn">Work</a></li>
        <li class="nav-link"><a href="contact.html" class="nav-btn">Contact</a></li>
      </ul>
      <div class="toggle-btn">
        <i id="bars" class="fa-solid fa-bars fa-beat"></i>
      </div>
    </nav>
    <div class="dropdown-menu">
      <li class="nav-drop"><a href="index.html" class="nav-menu">Home</a></li>
      <li class="nav-drop"><a href="story.html" class="nav-menu">Story</a></li>
      <li class="nav-drop"><a href="work.html" class="nav-menu">Work</a></li>
      <li class="nav-drop"><a href="contact.html" class="nav-menu">Contact</a></li>
    </div>`,s=`
    <div class="text-center center-block">
      <a class="social-link" href="https://github.com/tom-halstead">
        <i id="social-gh" class="fa fa-github-square fa-3x social"></i>
      </a>
      <a class="social-link" href="https://www.linkedin.com/in/thomashalsteadeveloper">
        <i id="social-li" class="fa fa-linkedin-square fa-3x social"></i>
      </a>
    </div>
    <p class="copyright">
      <span class="copy">&copy;</span> 2023 All rights reserved | Designed By: Thomas Halstead
    </p>`,n=document.querySelector("header"),i=document.querySelector("footer");n&&n.insertAdjacentHTML("afterbegin",a),i&&i.insertAdjacentHTML("afterbegin",s),t(),l()},t=function(){let a=e();document.querySelectorAll(".nav-btn").forEach(e=>{let t=e.getAttribute("href").replace("/","");("index.html"===a&&"index.html"===t||a===t)&&e.setAttribute("aria-current","page")})},l=function(){let e=document.querySelector(".toggle-btn"),a=document.querySelector(".dropdown-menu"),t=document.querySelector("#bars");e&&a&&t&&e.addEventListener("click",()=>{a.classList.toggle("open"),t.className=a.classList.contains("open")?"fa-solid fa-xmark":"fa-solid fa-bars fa-beat"})},s=function(e){let a=e.target.closest("img"),t=document.getElementById("modalBox"),l=document.getElementById("modal-image");a&&t&&l&&(t.style.visibility="visible",l.src=a.src)},n=function(e){let a=document.getElementById("modalBox"),t=document.querySelector(".close");a&&(e.target===a||e.target===t)&&(a.style.visibility="hidden")};window.addEventListener("DOMContentLoaded",()=>{if(a(),"story.html"===e()){let e=document.querySelector("section");e&&e.addEventListener("click",s)}document.addEventListener("click",n)});
//# sourceMappingURL=index.3b70f8ff.js.map
