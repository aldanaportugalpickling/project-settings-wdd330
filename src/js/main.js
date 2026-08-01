import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./Alert.js";

loadHeaderFooter();

const dataSource = new ProductData("tents");

const listElement = document.querySelector(".product-list");

const productList = new ProductList("tents", dataSource, listElement);

const alerts = new Alert();
alerts.init();

productList.init();

