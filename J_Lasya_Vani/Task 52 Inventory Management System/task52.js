let inventory = [
    { id: 1, name: "Apple", price: 0.5, quantity: 50 },
    { id: 2, name: "Orange", price: 0.7, quantity: 30 },
    { id: 3, name: "Banana", price: 0.3, quantity: 100 },
  ];
  class Product {
    constructor(id, name, price, quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  function displayProducts() {
    inventory.forEach((product) => {
      console.log(`${product.name} - $${product.price} (${product.quantity})`);
    });
  }
  function addProduct(id, name, price, quantity) {
    const newProduct = new Product(id, name, price, quantity);
    inventory.push(newProduct);
  }
  function updateProduct(id, quantity) {
    const product = inventory.find((product) => product.id === id);
    if (product) {
      product.quantity = quantity;
    } else {
      console.log("Product not found.");
    }
  }
  function updateProductWithMap(id, quantity) {
    inventory = inventory.map((product) =>
      product.id === id ? { ...product, quantity: quantity } : product
    );
  }
  function removeProduct(id) {
    inventory = inventory.filter((product) => product.id !== id);
  }
  displayProducts();
  
  addProduct(4, "Mango", 1.2, 40); 
  console.log("After adding Mango:");
  displayProducts();
  
  updateProduct(1, 60);
  console.log("After updating Apple quantity:");
  displayProducts(); 
  
  updateProductWithMap(2, 25); 
  console.log("After updating Orange quantity with map:");
  displayProducts(); 
  
  removeProduct(3); 
  console.log("After removing Banana:");
  displayProducts(); 