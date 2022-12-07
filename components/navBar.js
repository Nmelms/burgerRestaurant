const template = `
 <nav class="vw-100 navbar navbar-expand-lg navbar-light bg-white nav-bar">
  <div class="container div-container">
    <a class="navbar-brand d-flex" href="/">
      <img class="nav-logo" src="./assets/burgerIcon.png" >
      <h2 class="m-0 logoText">Burger Bun</h2>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto me-0">
        <li class="nav-item">
          <a id="homeLink" class="nav-link  linkText" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a id="aboutLink" class="nav-link linkText" href="/about.html">About</a>
        </li>
        <li class="nav-item">
          <a id="menuLink" class="nav-link linkText" href="/menu.html">Menu</a>
        </li>
        <li class="nav-item">
          <a id="contactLink" class=" nav-link linkText" href="/contact.html" tabindex="-1" >Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template;
  }
  connectedCallback() {
    const links = window.location.href;
    const split = links.split("/");

    // sets active nav link
    if (split[split.length - 1] === "") {
      const link = document.querySelector("#homeLink");
      link.classList.add("active");
    } else if (split[split.length - 1] === "about.html") {
      const link = document.querySelector("#aboutLink");
      link.classList.add("active");
    } else if (split[split.length - 1] === "menu.html") {
      const link = document.querySelector("#menuLink");
      link.classList.add("active");
    } else if (split[split.length - 1] === "contact.html") {
      const link = document.querySelector("#contactLink");
      link.classList.add("active");
    }
  }
}

window.customElements.define("nav-bar", Navbar);
