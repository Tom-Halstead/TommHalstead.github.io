const a=function(){document.querySelectorAll(".nav-btn").forEach(a=>{(a.pathname===window.location.pathname||"/"===a.pathname)&&a.setAttribute("aria-current","page")})},s=function(){if("/story.html"===window.location.pathname||"/work.html"===window.location.pathname||"/contact.html"===window.location.pathname){let a=`
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
      </div>`,s=`
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
  </div>
</div >`;document.querySelector("header").insertAdjacentHTML("afterbegin",a),document.querySelector("footer").insertAdjacentHTML("afterbegin",s)}},t=function(){document.querySelector(".dropdown-menu").classList.toggle("open");let a=document.querySelector(".dropdown-menu"),s=a.classList.contains("open"),t=document.querySelector("#bars"),e=window.matchMedia("(min-width: 576px)");t.classList=s?"fa-solid fa-xmark":"fa-solid fa-bars fa-beat",e.onchange=function(){s&&(a.classList.remove("open"),t.classList=s?"fa-solid fa-bars fa-beat":"fa-solid fa-xmark")}};window.onload=function(){s(),a(),document.querySelector(".toggle-btn").addEventListener("click",t)};const e=document.querySelector("section"),l=document.getElementById("modalBox"),n=document.querySelector(".close");e.addEventListener("click",function(a){let s=a.target.closest("img"),t=document.getElementById("modal-image");a.target===s&&(l.style.visibility="visible",t.src=s.src)}),document.addEventListener("click",function(a){(a.target===l||a.target===n)&&(l.style.visibility="hidden")});
//# sourceMappingURL=index.a1a4b555.js.map
