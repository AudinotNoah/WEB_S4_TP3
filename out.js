(() => {
  // modules/products.js
  var Product = class {
    constructor(ref, price, description, photo) {
      this.ref = ref;
      this.price = price;
      this.description = description;
      this.photo = photo;
    }
  };
  var products = [
    //https://placeimg.com) n'existe plus
    new Product("P001", 19.99, "Produit 1 - article de base", "https://picsum.photos/100/100?random=1"),
    new Product("P002", 29.99, "Produit 2 - article de luxe", "https://picsum.photos/100/100?random=2"),
    new Product("P003", 39.99, "Produit 3 - article de prestige", "https://picsum.photos/100/100?random=3")
  ];
  function search(keywords) {
    return products.filter(
      (product) => product.ref.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords.toLowerCase())
    );
  }

  // modules/cart.js
  var Cart = class {
    constructor() {
      this.items = this.loadCart();
    }
    addToCart(product) {
      const existingItem = this.items.find((item) => item.product.ref === product.ref);
      if (existingItem) {
        existingItem.qty++;
      } else {
        this.items.push({ product, qty: 1 });
      }
      this.saveCart();
    }
    emptyCart() {
      this.items = [];
      this.saveCart();
    }
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    }
    loadCart() {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
  };
  var cart = new Cart();

  // modules/ui.js
  function displayProduct(product, addToCartHandler2) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <div class="photo">
            <img src="${product.photo}" alt="${product.ref}">
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger">${product.ref}</strong>
                <strong class="bigger">${product.price} \u20AC</strong>
            </div>
            <div class="details-description">
                ${product.description}
            </div>
        </div>
    `;
    const addButton = productDiv.querySelector(".product-add2cart");
    addButton.addEventListener("click", () => addToCartHandler2(product));
    return productDiv;
  }
  function buildProductsList(productsArray, addToCartHandler2) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    productsArray.forEach((product) => {
      productList.appendChild(displayProduct(product, addToCartHandler2));
    });
  }
  function displayCart() {
    const cartContent = document.getElementById("cart-content");
    const totalProductsSpan = document.getElementById("total-products");
    const cartTotalSpan = document.getElementById("cart-total");
    const cartItemsHtml = cart.items.map((item) => `
            <tr>
                <td>${item.product.ref}</td>
                <td>${item.qty}</td>
                <td>${(item.product.price * item.qty).toFixed(2)} \u20AC</td>
            </tr>
        `).join("");
    cartContent.innerHTML = cartItemsHtml;
    const totalPrice = cart.items.reduce((total, item) => total + item.product.price * item.qty, 0);
    cartTotalSpan.textContent = totalPrice.toFixed(2) + " \u20AC";
    totalProductsSpan.textContent = cart.items.reduce((total, item) => total + item.qty, 0);
  }

  // modules/app.js
  function addToCartHandler(product) {
    cart.addToCart(product);
    displayCart();
  }
  function init() {
    buildProductsList(products, addToCartHandler);
    displayCart();
    const searchInput = document.getElementById("product-search");
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const results = search(searchInput.value);
        buildProductsList(results);
      }
    });
    const emptyCartButton = document.getElementById("empty-cart");
    emptyCartButton.addEventListener("click", () => {
      cart.emptyCart();
      displayCart();
    });
  }

  // modules/main.js
  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();
