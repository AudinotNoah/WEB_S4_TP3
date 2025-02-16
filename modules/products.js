
class Product {
    constructor(ref, price, description) {
        this.ref = ref;
        this.price = price;
        this.description = description;
    }
}

const products = [
    new Product("P001", 19.99, "Produit 1 - article de base"),
    new Product("P002", 29.99, "Produit 2 - article de luxe"),
    new Product("P003", 39.99, "Produit 3 - article de prestige"),
];

export { products };
