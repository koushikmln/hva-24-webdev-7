let products=[
    {id:1,name:"milk",price:20,category:"dairy"},
    {id:2,name:"bisciut",price:30,category:"food"},
    {id:3,name:"noodles",price:10,category:"food"}
];
function displayProducts(arr){
    arr.forEach((val)=>{
        console.log(`${val.name}-$${val.price}`);
    });
}
let productsWithTax=products.map((val)=>{
    let newPrice=(val.price)+(val.price)*0.1;
    return {
        id:val.id,
        name:val.name,
        price:newPrice,
        category:val.category
    };
}
);
displayProducts(productsWithTax);
let foodProducts=products.filter((val)=>{
    return val.category==="food";
});
displayProducts(foodProducts);
let affordableProducts=products.filter((val)=>{
    return val.price<=10;
});
let affordableProductsStrings=affordableProducts.map((val)=>{
    return `${val.name}-$${val.price}`;
});
console.log(affordableProductsStrings);
let totalprice=0;
products.forEach((val)=>{
    totalprice+=val.price;
});
console.log(totalprice);
