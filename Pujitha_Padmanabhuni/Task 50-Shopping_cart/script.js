var cart = [
    { name: "Watch", price: 2000, quantity: 5 },
    { name: "Mobile", price: 15000, quantity: 4 }
];

function calculateTotalPrice(cart) {
    var tot = 0;
    cart.forEach(function(item) {
        tot += (item.price) * (item.quantity);
    })
    return tot;
}
console.log("Your total price is " + calculateTotalPrice(cart));