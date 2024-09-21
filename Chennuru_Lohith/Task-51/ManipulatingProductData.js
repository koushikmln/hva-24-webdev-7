let products=[
    {id:1, name:"iphone13", price:39999,category:"Mobile"},
    {id:2, name:"Mac Air", price:67000,category:"Laptop"},
    {id:3, name:"Samsung S-24", price:79999,category:"Mobile"},
    {id:4, name:"Dry Fruits",price:567,category:"Food"},
    {id:5, name:"Watch",price:700,category:"Accessory"}
];

function displayProducts(products){
    products.forEach( function(product) {
        console.log(product.name + " - " + "$" + product.price);
    });
};

displayProducts(products);

let taxRate=0.10;
let productsWithTax=products.map(function(product){
    return {
        id:product.id,
        name:product.name,
        category:product.category,
        priceWithTax:product.price+(product.price * taxRate)
    };

});

console.log(productsWithTax);

let foodProducts=products.filter(function(food){
    if (food.category=="Food"){
        return food;
    }
});

displayProducts(foodProducts);

let affordableProducts=products.filter(function(product){
    if (product.price<=1000){
        return product;
    }
});

let affordableProductsStrings=affordableProducts.map(function(product){
    return product.name+"-"+product.price;
});

console.log(affordableProducts);
console.log(affordableProductsStrings);

let totalprice=0;
products.forEach(function(product){
    totalprice=totalprice+(product.price);
    return totalprice;
    } 
);
console.log(totalprice);




