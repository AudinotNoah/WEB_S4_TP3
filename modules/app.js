import { products, search } from "./products.js";
import { buildProductsList } from "./ui.js";

function init() {
    buildProductsList(products);

    const searchInput = document.getElementById("product-search");

    searchInput.addEventListener("keyup", (event) => {
        // console.log("debug"); // Vérifie si l'event est capté
        if (event.key === "Enter") {
            const results = search(searchInput.value);
            buildProductsList(results);
        }
    });
}

export { init };