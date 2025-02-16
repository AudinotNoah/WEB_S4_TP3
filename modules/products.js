class Product {
    constructor(ref, price, description, photo) {
        this.ref = ref;
        this.price = price;
        this.description = description;
        this.photo = photo;
    }
}

const products = [
    //https://placeimg.com) n'existe plus
    new Product("P001", 19.99, "Produit 1 - article de base", "https://picsum.photos/100/100?random=1"),
    new Product("P002", 29.99, "Produit 2 - article de luxe", "https://picsum.photos/100/100?random=2"),
    new Product("P003", 39.99, "Produit 3 - article de prestige", "https://picsum.photos/100/100?random=3")
];

function search(keywords) {
    return products.filter(product =>
        product.ref.toLowerCase().includes(keywords.toLowerCase()) ||
        product.description.toLowerCase().includes(keywords.toLowerCase())
    );
}

export { products, search };