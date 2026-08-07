import { getLocalStorage, loadHeaderFooter} from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];


  //console.log(cartItems);

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  //added to calculate subtotal
  calculateSubtotal(cartItems);
  
  //added to add event listeners to remove buttons
  addRemoveListeners();
}




//my code

function calculateSubtotal(cartItems) {
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.FinalPrice;
  }, 0);

  document.querySelector("#cart-subtotal").textContent =
    `$${subtotal.toFixed(2)}`;
}




function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">

  <span class="remove-item" data-id="${item.Id}">
    X
  </span>


  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();


////added to add event listeners to remove buttons
function addRemoveListeners() {
  const removeButtons = document.querySelectorAll(".remove-item");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;

      let cartItems = getLocalStorage("so-cart") || [];

      cartItems = cartItems.filter((item) => item.Id !== productId);


      //const index = cartItems.findIndex((item) => item.Id === productId);

      //if (index !== -1) {
        //cartItems.splice(index, 1);
      //}
      localStorage.setItem("so-cart", JSON.stringify(cartItems));

      renderCartContents();
    });
  });
}
