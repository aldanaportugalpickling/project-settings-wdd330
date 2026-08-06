import { loadHeaderFooter } from "./utils.mjs";
import  CheckoutProcess  from "./CheckoutProcess.mjs";


loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".checkout-summary");
order.init();

// ahyaaa

const form = document.forms["checkout"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  order.checkout();
});

const zip = document.querySelector("#zip");

zip.addEventListener("change", () => {
 
  order.calculateOrderTotal();

});

// Add event listeners to fire calculateOrderTotal when the user changes the zip code
//document
  //.querySelector("#zip")
  //.addEventListener("blur", order.calculateOrderTotal.bind(order));

// listening for click on the button
//document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  //e.preventDefault();

  //order.checkout();
//});

//const zip = document.querySelector("#zip");

//zip.addEventListener("change", () => {
  //order.calculateOrderTotal();
//});