let cart=[
    {name:"Soap",price:220,quantity:3},
    {name:"Paste",price:150,quantity:2},
    {name:"Brush",price:100,quantity:3}
];

function calculateTotalPrice(cart){
    let totalprice=0;
    cart.forEach( function(product) {
        totalprice= totalprice+(product.price * product.quantity);
    });
    return totalprice;
};

console.log(calculateTotalPrice(cart));