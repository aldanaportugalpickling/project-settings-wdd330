import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

// my code

const category = getParam("category") || "tents";


const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

document.querySelector("h2").textContent = `Top Products: ${formattedCategory}`;


const dataSource = new ExternalServices();

const listElement = document.querySelector(".product-list");

const myList = new ProductList(category, dataSource, listElement);

myList.init();


