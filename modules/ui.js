import { cart } from "./cart.js";

function displayProduct(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <div class="photo">
            picto
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger">${product.ref}</strong>
                <strong class="bigger">${product.price} €</strong>
            </div>
            <div class="details-description">
                ${product.description}
            </div>
        </div>
    `;

    const addButton = productDiv.querySelector(".product-add2cart");
    addButton.addEventListener("click", () => {
        cart.addToCart(product);
        console.log(cart.items); // debug
    });

    return productDiv;
}

function buildProductsList(productsArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    productsArray.forEach(product => {
        productList.appendChild(displayProduct(product));
    });
}

export { buildProductsList };
