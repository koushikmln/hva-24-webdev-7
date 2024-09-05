let products = [
    { id: 1, name: "Banana", price: 1.99, category: "Food" },
    { id: 2, name: "Shampoo", price: 7.50, category: "Personal Care" },
    { id: 3, name: "Bread", price: 12.49, category: "Food" },
    { id: 4, name: "Notebook", price: 13.99, category: "Stationery" },
    { id: 5, name: "Milk", price: 1.50, category: "Food" }
];
function  displayProducts(array){
    array.forEach(function(item){
        console.log(`${item.name}-${item.price}`);
    })
   
}
console.log(`Products without tax`);
displayProducts(products);
let taxRate = 0.10;

let productsWithTax = products.map(function(item){
    return{
        id:item.id,
        name:item.name,
        category:item.category,
        price:(item.price * (1 + taxRate)).toFixed(2)

    };
});
console.log(`Products with tax`)
displayProducts(productsWithTax);
let foodProducts = products.filter(function(item){
    return item.category=="Food";
})
console.log(`products with caterory food`);
displayProducts(foodProducts);
let AffordableProducts  = products.filter(function(item){
    return item.price<10})
.map(function(item) {
     return `${item.name} - $${item.price}`
        });
console.log(`Affordable Products`)
console.log(AffordableProducts);
totalprice=0
products.forEach(function(item){
   (totalprice+=item.price*(1+0.1)).toFixed(2);
})
console.log(`Total Price`)
console.log(`${totalprice}`);