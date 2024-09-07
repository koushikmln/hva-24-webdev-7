let inventory=[
    {id:1,name:"milk",price:20,quantity:2},
    {id:2,name:"bread",price:40,quantity:1}
];
class Product{
    constructor(id,name,price,quantity){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}
function displayProducts(){
    inventory.forEach((val)=>{
        console.log(`${val.name}-${val.price*val.quantity}`);
    });
}
function addProduct(id,name,price,quantity){
    let obj=new Product(id,name,price,quantity);
    inventory.push(obj);
}
function updateProduct(id,quantity){
    const prod=inventory.find(prod=>prod.id==id);
    if (prod){
        prod.quantity=quantity;
    }
    else{
        console.log("Not Found");
    }
}
function updateProductWithMap(id,quantity) {
    inventory = inventory.map((val) => {
        if (val.id === id) {
            val.quantity=quantity;
        }
        return val;
    });
}
function removeProduct(id){
    inventory=inventory.filter((val)=>{
        return val.id!==id;
    });
}
displayProducts();
addProduct(3,"lays",10,2);
displayProducts();
updateProduct(1,4);
displayProducts();
updateProductWithMap(1,3);
displayProducts();
removeProduct(3);
displayProducts();
