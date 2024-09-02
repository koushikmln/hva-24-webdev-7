let cart = [
    { name: "Apple", price: 1.00, quantity: 4 },
    { name: "Banana", price: 0.50, quantity: 6 },
    { name: "Cherry", price: 2.00, quantity: 10 },
    { name: "Date", price: 3.00, quantity: 2 }
]
function calculateTotalPrice(array){
    let totalprice=0
    array.forEach(function (item) {
        totalprice+=item.price*item.quantity;
    });
    return totalprice;
}
cartprice=calculateTotalPrice(cart);
console.log(cartprice);