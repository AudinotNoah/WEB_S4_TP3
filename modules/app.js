import { products } from "./products.js";
import { buildProductsList } from "./ui.js";

function init() {
    buildProductsList(products);
}

export { init };