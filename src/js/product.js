import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";




loadHeaderFooter();


// TEACHER 

//const dataSource = new ExternalServices();
//const productId = getParam("product");
//const product = new ProductDetails(productId, dataSource);

//product.init();

// MY CODE

const dataSource = new ExternalServices();
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);

product.init();
