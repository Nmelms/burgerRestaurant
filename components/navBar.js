const template = `
 <nav style="position: fixed; z-index: 5" class="vw-100 navbar navbar-expand-lg navbar-light bg-white">
  <div style="max-width: 1200px" class="container">
    <a class="navbar-brand d-flex" href="/">
      <img style="height: 40px; width: 40px"src="./assets/burgerIcon.png" >
      <h2 class="m-0 logoText">Burger Bun</h2>
    </a>
    <button style="max-width: 56px; max-height: 50px" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
          <a class="nav-link linkText" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link linkText" href="#" tabindex="-1" >Contact Us</a>
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
    }
  }
}

window.customElements.define("nav-bar", Navbar);
