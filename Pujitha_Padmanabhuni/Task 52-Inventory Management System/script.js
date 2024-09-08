var inventory = [
    { id: 1, name: "Tables", price: 20000, quantity: 100 },
    { id: 2, name: "Chairs", price: 40000, quantity: 200 },
    { id: 3, name: "Desks", price: 20000, quantity: 50 },
];

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    displayProducts() {
        inventory.forEach(function(product) {
            console.log(`${product.name}-${product.price} (${product.quantity})`);
        })
    }
    addProduct(id, name, price, quantity) {
        var product = new Product(id, name, price, quantity);
        inventory.push(product);
    }
    updateProduct(id, quantity) {
        var product = inventory.find(function(item) {
            return item.id == id;
        })
        if (product) {
            product.quantity = quantity;
        } else {
            console.log("id not found");
        }
    }
    removeProduct(id) {
        inventory = inventory.filter(function(item) {
            return item.id != id;
        })
    }
}
var obj = new Product();
obj.displayProducts();

obj.addProduct(4, "Cots", 23000, 300);
console.log("After adding new product");
obj.displayProducts();

obj.updateProduct(2, 500);
console.log("After updating product");
obj.displayProducts();

obj.removeProduct(3);
console.log("After removing product");
obj.displayProducts();