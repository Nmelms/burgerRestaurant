const carouselTemplate = `
 <div  id="carouselExampleDark" class="my-5 carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div  class="carousel-inner">
    <div  class="carousel-item active" data-bs-interval="10000 d-flex justify-content-center align-items-center">
      <img style="max-height: 500px; object-fit: cover" src="./assets/burger2.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img style="max-height: 500px; object-fit: cover" src="./assets/burgerBG.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img style="max-height: 500px; object-fit: cover" src="./assets/burger1.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`;

class Carousel extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = carouselTemplate;
  }
}

window.customElements.define("site-reviews", Carousel);
