// Define the Array of Products
const products = [
    { id: 1, name: "Banana", price: 1.99, category: "Food" },
    { id: 2, name: "Laptop", price: 999.99, category: "Electronics" },
    { id: 3, name: "Bread", price: 2.99, category: "Food" },
    { id: 4, name: "Phone", price: 599.99, category: "Electronics" },
    { id: 5, name: "Milk", price: 1.49, category: "Food" }
  ];
  
  // Define the displayProducts Function
  function displayProducts(arr) {
    arr.forEach(product => {
      console.log(`${product.name} - $${product.price.toFixed(2)}`);
    });
  }
  
  // Calculate and Display Products with Tax
  const taxRate = 0.10;
  const productsWithTax = products.map(product => {
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      priceWithTax: (product.price + product.price * taxRate).toFixed(2)
    };
  });
  
  console.log("Products with Tax:");
  displayProducts(productsWithTax.map(product => ({
    name: product.name,
    price: product.priceWithTax
  })));
  
  // Filter and Display Food Products
  const foodProducts = products.filter(product => product.category === "Food");
  
  console.log("Food Products:");
  displayProducts(foodProducts);
  
  // Find Affordable Products
  const affordableProducts = products.filter(product => product.price < 10);
  
  const affordableProductsStrings = affordableProducts.map(product => 
    `${product.name} - $${product.price.toFixed(2)}`
  );
  
  console.log("Affordable Products:");
  console.log(affordableProductsStrings);
  
  // Calculate Total Price
  let totalPrice = 0;
  
  products.forEach(product => {
    totalPrice += product.price;
  });
  
  console.log(`Total Price of all products: $${totalPrice.toFixed(2)}`);
  