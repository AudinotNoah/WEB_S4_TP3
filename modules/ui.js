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
        displayCart();
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

function displayCart() {
    const cartContent = document.getElementById("cart-content");
    const totalProductsSpan = document.getElementById("total-products");
    const cartTotalSpan = document.getElementById("cart-total");

    const cartItemsHtml = cart.items
        .map(item => `
            <tr>
                <td>${item.product.ref}</td>
                <td>${item.qty}</td>
                <td>${(item.product.price * item.qty).toFixed(2)} €</td>
            </tr>
        `)
        .join(""); // join au lieu de reduce

    cartContent.innerHTML = cartItemsHtml;

    const totalPrice = cart.items.reduce((total, item) => total + (item.product.price * item.qty), 0);
    cartTotalSpan.textContent = totalPrice.toFixed(2) + " €";
    totalProductsSpan.textContent = cart.items.reduce((total, item) => total + item.qty, 0);
}

export { buildProductsList, displayCart  };
