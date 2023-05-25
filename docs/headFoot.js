const header = document.querySelector(".head");
const footer = document.querySelector(".foot");
const headerHTML = `
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

const footerHTML = `      
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

window.onload = function () {
  header.insertAdjacentHTML("afterbegin", headerHTML);
  footer.insertAdjacentHTML("afterbegin", footerHTML);
};
