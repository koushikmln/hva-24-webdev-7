//Define the Array of Inventory Items
let inventory=[{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99, quantity: 5 },
    { id: 2, title: '1984', author: 'George Orwell', price: 8.99, quantity: 8 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99, quantity: 10 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 15.99, quantity: 6 }];
    
//Create the Book Class
class Book{
constructor(id, title, author, price, quantity){
this.id=id;
this.title=title;
this.author=author;
this.price=price;
this.quantity=quantity;
}
}

//Define the displayBooks Function
function displayBooks(){
inventory.forEach(function(book){
console.log(`${book.title}-${book.author}(${book.price})`)
});
}

//Define the addBook Function
function addBook(id, title, author, price, quantity){
const newbook = new Book(id, title, author, price, quantity);
inventory.push(newbook);
}

//Define the updateBook Function
function updateBook(id,quantity){
const book = inventory.find(book=>book.id===id);
if(book){
book.quantity=quantity;
}
}

function updateBookWithMap(id,quantity){
inventory=inventory.map(book=>{
if(book.id===id){
return new Book(book.id,book.title,book.author,book.price,quantity);
}
return book;
});
}

//Define the removeBook Function
function removeBook(id){
inventory = inventory.filter(book => book.id !== id);
}

