const footerTemplate = `
  <div class="p-5 footer bg-dark container-fluid text-light d-flex justify-content-center">
    <div style="max-width: 1200px" class="row ">
      <div class="col-12 col-md-6">
        <h2 class="m-3">
          <img src="./assets/burgerIcon.png" >
          Burger Bun
        </h2>
        <h5 class="m-3">
          We are dedicated to the safety of our guests and employees 
          and have updated our safety measures. We believe in Simple, 
          Creative, Modern and Flexible Design Standards with a Retina 
          and Responsive Approach. Browse the amazing Features this template offers.
        </h5>
        <h5 class="m-3">
          Follow Us: 
          <i class="fa-brands fa-facebook fa-xl"></i>
          <i class="fa-brands fa-twitter fa-xl"></i>
          <i class="fa-brands fa-instagram fa-xl"></i>
        </h5>
      </div>

      <div class="col-12 col-md-6">
        <h5 class="mx-3 mt-3">Contact Us</h5>
        <h6 class="mx-3">Address : Burger Bun, 208 Trainer Avenue street, Corner Market, NY - 62617.</h6>
        <h6 class="mx-3 my-3">Phone : +12 534894364</h6>
        <h6 class="mx-3">Email : info@example.com</h6>

        <h5 class="m-3">Payments We Accpet</h5>
        <i class="fa-brands fa-cc-visa fa-2xl m-1 ms-3"></i>
        <i class="fa-brands fa-cc-mastercard fa-2xl m-1"></i>
        <i class="fa-brands fa-cc-amex fa-2xl m-1"></i>

      </div>
    </div>
  <div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerTemplate;
  }
}

window.customElements.define("site-footer", Footer);