import { products, search } from "./products.js";
import { buildProductsList, displayCart } from "./ui.js";
import { cart } from "./cart.js";

function addToCartHandler(product) {
    cart.addToCart(product);
    displayCart();
}

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

    buildProductsList(products, addToCartHandler);

    const emptyCartButton = document.getElementById("empty-cart");
    emptyCartButton.addEventListener("click", () => {
        cart.emptyCart();
        displayCart();
    });

}

export { init };