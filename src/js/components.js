// src/js/components.js
import headerHtml from "bundle-text:../html/header.partial";
import footerHtml from "bundle-text:../html/footer.partial";

class SiteHeader extends HTMLElement {
  connectedCallback() {
    console.log("[SiteHeader] connected"); // sanity log
    this.innerHTML = headerHtml.trim();
    const file = location.pathname.split("/").pop() || "index.html";
    this.querySelectorAll(".nav a, .dropdown-menu a").forEach(
      (a) => a.getAttribute("href")?.endsWith(file) && a.classList.add("active")
    );
  }
}
customElements.define("site-header", SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    console.log("[SiteFooter] connected"); // sanity log
    this.innerHTML = footerHtml.trim();
    const y = this.querySelector("#date");
    if (y) y.textContent = new Date().getFullYear();
  }
}
customElements.define("site-footer", SiteFooter);
