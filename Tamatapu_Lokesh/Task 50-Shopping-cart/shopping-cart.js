 // Define the Array of Cart Items
 let cart = [{ name: 'Milk', price: 2.5, quantity: 2 }, { name: 'Rice', price: 5, quantity: 4 }, { name: 'egg', price: 3, quantity: 3 }]; 
 
 //Define the calculateTotalPrice Function Using forEach
 function calculateTotalPrice(cart){
   let total_price=0;
   cart.forEach(function(cart){
     total_price+=(cart.price*cart.quantity);
   });
   return total_price;
 }
 
 //Call the calculateTotalPrice Function
 let result=calculateTotalPrice(cart);
 console.log(result);