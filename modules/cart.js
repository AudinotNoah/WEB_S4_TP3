// modules/cart.js

class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(product) {
        const existingItem = this.items.find(item => item.product.ref === product.ref);
        if (existingItem) {
            existingItem.qty++;
        } else {
            this.items.push({ product, qty: 1 });
        }
    }

    emptyCart() {
        this.items = [];
    }
}

const cart = new Cart();
export { cart };