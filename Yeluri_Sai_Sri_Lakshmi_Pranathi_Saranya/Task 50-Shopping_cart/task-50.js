let cart=[{name:"milk",price:20,quantity:2},
    {name:"biscuit",price:30,quantity:1}
];
function calculateTotalPrice(cart){
    let total=0;
    cart.forEach((val)=>{
        total+=val.quantity*val.price;
    });
    return total;
}
const res=calculateTotalPrice(cart);
console.log(res);