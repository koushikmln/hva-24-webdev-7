products = [
    { id: 1, name: "Watch", price: 2000, category: "Accessories" },
    { id: 2, name: "Table", price: 5000, category: "Furniture" },
    { id: 3, name: "Apple", price: 100, category: "Food" },
    { id: 4, name: "Orange", price: 5, category: "Food" }
];

function displayProducts(arr) {
    arr.forEach(function(item) {
        console.log(item.name + " - Rs" + item.price);
    })
}
displayProducts(products);

const tax = 0.1;
var productsWithTax = products.map(function(item) {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        category: item.category,
        priceWithTax: item.price + (item.price * tax)
    }
});
console.log(productsWithTax);

var foodProducts = products.filter(function(item) {
    if (item.category == "Food") {
        return item;
    }
});

console.log(foodProducts);

var affordableProducts = products.filter(function(item) {
    if (item.price < 10) {
        return item;
    }
});

console.log("Affordable ");
console.log(affordableProducts);

var affordableProductsStrings = affordableProducts.map(function(item) {
    return `${item.name} - ${item.price}`;

});
console.log(affordableProductsStrings);

var totalPrice = 0;
products.forEach(function(item) {
    totalPrice += item.price;
});
console.log(totalPrice);