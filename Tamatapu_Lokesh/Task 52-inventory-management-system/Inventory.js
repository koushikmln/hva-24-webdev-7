//Define the Array of Inventory Items
let inventory=[{id: 1, name: 'Apple', price: 0.5, quantity: 100, category: 'Fruit'},
    {id: 2, name: 'Shampoo', price: 5.99, quantity: 50, category: 'Personal Care'},
     {id: 3, name: 'Notebook', price: 2.5, quantity: 200, category: 'Stationery'}];

//Create the Product Class
class Product{
constructor(id,name,price,quantity,category){
this.id=id;
this.name=name;
this.price=price;
this.quantity=quantity;
this.category=category;
}
}

//Define the displayProducts Function
function displayProducts(inventory){
inventory.forEach(function(product){
console.log(`${product.name}-$${product.price}(${product.quantity})`)
});
}

//Define the addProduct Function
function addProduct(id, name, price, quantity) {

    const newProduct = new Product(id, name, price, quantity); 
 
    inventory.push(newProduct); 
 
 }

//Define the updateProduct Function
function updateProduct(id, quantity) {

    const product = inventory.find(product => product.id === id); 
   
    if (product) {
   
    product.quantity = quantity; 
   
    }
   
   }

   function updateProductWithMap(id,quantity){
    inventory=inventory.map(product=>{
      if(product.id===id){
        return new Product(product.id,product.name,product.price,quantity,product.category);
      }
      return product;
    });
  }
  
  // Define the removeProduct Function
  function removeProduct(id) {
    
    inventory = inventory.filter(product => product.id !== id); 
    
  }



