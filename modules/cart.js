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
}

const cart = new Cart();
export { cart };
