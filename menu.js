const menu = document.querySelector(".menuContent");
const burgerBtn = document.querySelector(".burgerBtn");
const fryBtn = document.querySelector(".fryBtn");
const drinkBtn = document.querySelector(".drinkBtn");

burgerBtn.addEventListener("click", () => {
  const burgerMenu = `<section
      id="burgers"
      class="container-fluid d-flex flex-column justify-content-center align-items-center vw-100"
      style="max-width: 1200px"
    >
      <div class="row menu-item container-fluid w-100 my-3 mt-5 mx-0">
        <div class="row item-border ">
          <div class="col-8 ">
            <h6 class="menuItemName">Classic Burger</h6>
          </div>
          <div class="col-4 d-flex justify-content-end">
            <h6 class="menuItemPrice">$15.00</h6>
          </div>
        </div>
        <div class="row ">
          <p class=" menuItemDescription">
            Lettuce, Tomato, Onion, and Pickles, add Cheese +$1
          </p>
        </div>
      </div>

      <div class="row menu-item container-fluid w-100 my-3">
        <div class="row item-border ">
          <div class="col-8 ">
            <h6 class="menuItemName">Mini Cheese Burger</h6>
          </div>
          <div class="col-4  d-flex justify-content-end">
            <h6 class="menuItemPrice">$9.00</h6>
          </div>
        </div>
        <div class="row">
          <p class=" menuItemDescription">Our Classic Burger in mini form</p>
        </div>
      </div>

      <div class="row menu-item container-fluid w-100 my-3">
        <div class="row item-border ">
          <div class="col-8 ">
            <h6 class="menuItemName">Bacon-and-Kimchi Burger</h6>
          </div>
          <div class="col-4  d-flex justify-content-end">
            <h6 class="menuItemPrice">$18.00</h6>
          </div>
        </div>
        <div class="row">
          <p class=" menuItemDescription">
            Two thin stacked patties, thick-cut bacon, kimchi, and a spicy
            homemade sauce.
          </p>
        </div>
      </div>

      <div class="row menu-item container-fluid w-100 my-3">
        <div class="row item-border ">
          <div class="col-8 ">
            <h6 class="menuItemName">Ginger-Sesame Pork Burgers with Slaw</h6>
          </div>
          <div class="col-4  d-flex justify-content-end">
            <h6 class="menuItemPrice">$18.00</h6>
          </div>
        </div>
        <div class="row">
          <p class=" menuItemDescription">
            Scallions, fresh ginger, garlic, sesame oil, slaw, and spicy chillis
          </p>
        </div>
      </div>

      <div class="row menu-item container-fluid w-100 my-3">
        <div class="row item-border ">
          <div class="col-8 ">
            <h6 class="menuItemName">Cheddar-and-Onion Smashed Burger</h6>
          </div>
          <div class="col-4  d-flex justify-content-end">
            <h6 class="menuItemPrice">$18.00</h6>
          </div>
        </div>
        <div class="row">
          <p class=" menuItemDescription">
            2 smashed beef patties, grilled onions, cheddar, and pickles
          </p>
        </div>
      </div>
    </section>`;
  menu.innerHTML = burgerMenu;
});

fryBtn.addEventListener("click", () => {
  const fryMenu = `<section
          id="fries"
          class="container-fluid d-flex flex-column justify-content-center align-items-center vw-100"
          style="max-width: 1200px"
        >
          <div class="row menu-item container-fluid w-100 my-3 mt-5 mx-0">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Fries</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$3.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">
                Classic fried potatoes
              </p>
            </div>
          </div>

          <div class="row menu-item container-fluid w-100 my-3">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Loaded Fries</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$6.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">Fries topped with cheese and bacon.</p>
            </div>
          </div>

          <div class="row menu-item container-fluid w-100 my-3">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Chicken Bacon Ranch Fries</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$9.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">
                Fries topped with grilled chicken, bacon, scallions, and drizzled with ranch.
              </p>
            </div>
          </div>

          <div class="row menu-item container-fluid w-100 my-3">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Buffalo Chicken Fries</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$9.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">
                Fries topped with grilled chicken, celery, and drizzled with our homemade buffalo sauce.
              </p>
            </div>
          </div>

          <div class="row menu-item container-fluid w-100 my-3">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Pizza Fries</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$12.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">
                Fries topped with maranara, mozzarella, pepperoni, and then baked in the oven.
              </p>
            </div>
          </div>
        </section>`;
  menu.innerHTML = fryMenu;
});

drinkBtn.addEventListener("click", () => {
  const drinkMenu = `
          <section
          id="beer"
          class="container-fluid d-flex flex-column justify-content-center align-items-center vw-100"
          style="max-width: 1200px"
        >
          <div class="row menu-item container-fluid w-100 my-3 mt-5 mx-0">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">House Brew</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$4.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">Our House ale 4.0%%</p>
            </div>
          </div>
          <div class="row menu-item container-fluid w-100 my-3 mx-0">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">IPA</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$7.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">House IPA 7.5%</p>
            </div>
          </div>

          <div class="row menu-item container-fluid w-100 my-3 mx-0">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Sour Ale</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$7.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">Great tasting Sour Ale 5.0%</p>
            </div>
          </div>

          <div class="row menu-item container-fluid w-100 my-3 mx-0">
            <div class="row item-border">
              <div class="col-8">
                <h6 class="menuItemName">Brown Ale</h6>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <h6 class="menuItemPrice">$7.00</h6>
              </div>
            </div>
            <div class="row">
              <p class="menuItemDescription">Smooth Brown Ale 5.0%</p>
            </div>
          </div>
        </section>
  `;
  menu.innerHTML = drinkMenu;
});
