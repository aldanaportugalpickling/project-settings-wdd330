import { loadHeaderFooter } from "./utils.mjs";
import  CheckoutProcess  from "./CheckoutProcess.mjs";


loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".checkout-summary");

order.init();




// ahyaaa

const form = document.forms["checkout"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //MY CODE AHAY
   const valid = form.checkValidity();

  form.reportValidity();

  if (valid) {

    order.checkout();
  }
});

const zip = document.querySelector("#zip");

zip.addEventListener("change", () => {
 
  order.calculateOrderTotal();

});

// Add event listeners to fire calculateOrderTotal when the user changes the zip code

//document
  //.querySelector("#zip")
  //.addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));

// listening for click on the button

//document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  //e.preventDefault();

  //const myForm = document.forms[0];
  //const chk_status = myForm.checkValidity();

  //myForm.reportValidity();

  //if (chk_status) {
   //myCheckout.checkout();
  //}
//});

  //order.checkout();
//});

//const zip = document.querySelector("#zip");

//zip.addEventListener("change", () => {
  //order.calculateOrderTotal();
//});