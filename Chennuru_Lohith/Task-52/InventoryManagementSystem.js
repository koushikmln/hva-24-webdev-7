inventory = [
    {id:1,name:"Snacks",price:250,quantity:8},
    {id:2,name:"Stationary",price:350,quantity:12},
    {id:3,name:"Skin Care",price:150,quantity:5},
    {id:4,name:"Toys",price:200,quantity:10},
    {id:5,name:"Perfumes",price:199,quantity:20}]

class Product{
    constructor(id,name,price,quantity){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}

let newProduct=inventory.push(new Product(7,"Medicines",450,6));

function displayProducts(inventory){
    inventory.forEach( function(product){
            console.log(product.name+"-"+product.price+"("+product.quantity+")");
        })
    }

displayProducts(inventory);

function addProduct(id,name,price,quantity){
    let newProduct =new Product(id,name,price,quantity)
    inventory.push(newProduct);
}

addProduct(6,"Vegetables",90,20);

displayProducts(inventory);


function updateProduct(id,quantity){
    let product = inventory.find(product => product.id ==id);
    if (product){
        product.quantity=quantity;

        console.log( product.id +"-"+ product.quantity);
    }
}
updateProduct(4,6);

function updateProductWithMap(id,quantity){
    inventory.map(function(product){
        if (product.id==id){
            product.quantity=quantity;
        }
       console.log(id + "-"+ quantity);
    })
    
}

updateProduct(4,8);

function removeProduct(id){
    inventory =inventory.filter(product => product.id !=id);
        return inventory;

    }

console.log(removeProduct(4));
displayProducts(inventory);