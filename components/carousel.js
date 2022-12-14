const carouselTemplate = `
<div style="border-radius: 10px; width: 100%" id="carouselExampleControls" class="d-none d-md-flex justify-content-center carousel  bg-dark slide my-5 " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style="margin: 0 auto; max-width:80%; object-fit: contain" src="./assets/caro2.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img  style="margin: 0 auto; max-width:80%; object-fit: contain" src="./assets/caro3.webp" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev h-100" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
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
