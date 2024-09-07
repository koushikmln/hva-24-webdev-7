const cart = [
    { name: "Apple Watch", price: 299.99, quantity: 2 },
    { name: "MacBook Pro", price: 1299.99, quantity: 1 },
    { name: "AirPods", price: 99.99, quantity: 3 },
    { name: "iPhone 13", price: 799.99, quantity: 1 },
  ];
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach((item) => {
       const itemTotalPrice = item.price* item.quantity;
      totalPrice += itemTotalPrice;
    });

    return totalPrice;
  }
  const result = calculateTotalPrice(cart);
console.log(`The total price is: $${result.toFixed(2)}`);

  
  function calculateTotalPrice(cart) {
    let totalPrice = 0;
  
    cart.forEach((item) => {
      const itemTotalPrice = item.price * item.quantity;
      totalPrice += itemTotalPrice;
    });
  
    return totalPrice;
  }
  
  const resultt = calculateTotalPrice(cart);
  console.log(`The total price is: $${resultt.toFixed(2)}`);