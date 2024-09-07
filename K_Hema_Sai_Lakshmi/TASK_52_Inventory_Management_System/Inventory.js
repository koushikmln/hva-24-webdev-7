let inventory = [
    { id: 1, name: "Earphones", price: 999.99, quantity: 10 },
    { id: 2, name: "charger", price: 699.99, quantity: 25 },
    { id: 3, name: "cable", price: 399.99, quantity: 15 }
];
class product{
    constructor (id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;  
    }
}
    function displayProducts(){
    inventory.forEach(function(item){
        console.log(`${item.name}-${item.price}(${item.quantity})`);
    });
}
function addproduct(id,name,price,quantity){
    let newproduct = new product(id,name,price,quantity);
    inventory.push(newproduct);
}
function updateproduct(id,quantity){
    let product=inventory.find(product=>product.id==id);
    if (product){
        product.quantity=quantity;
    }

}
function updateproductWithMap(id,quantity){
    inventory = inventory.map(product=>
        product.id==id?{...product, quantity: quantity}:product
    );
}
function removeproduct(id){
    inventory=inventory.filter(product=>product.id!=id);
}
console.log("Initial Inventory:");
displayProducts();
addproduct(4, "Headphones", 149.99, 30);
console.log("\nInventory after adding a new product:");
displayProducts();
updateproduct(2, 20);
console.log("\nInventory after updating quantity with updateProduct:");
displayProducts();
updateproductWithMap(1, 5);
console.log("\nInventory after updating quantity with updateProductWithMap:");
displayProducts();
removeproduct(3);
console.log("\nInventory after removing a product:");
displayProducts();