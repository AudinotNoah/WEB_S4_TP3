class Cart {
    constructor() {
        this.items = this.loadCart();
    }

    addToCart(product) {
        const existingItem = this.items.find(item => item.product.ref === product.ref);
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
}

const cart = new Cart();
export { cart };