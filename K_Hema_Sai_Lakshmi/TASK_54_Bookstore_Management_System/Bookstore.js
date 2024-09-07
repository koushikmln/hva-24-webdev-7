
class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}

let inventory = [
    new Book(1, "Atomic Habits", "James clear", 9.99, 15),
    new Book(2, "journey Home", "Radha nadth swami", 7.99, 5),
    new Book(3, "Psychology of money", "James clear", 10.99, 8)
];


function displayBooks() {
    inventory.forEach(book => {
        console.log(`${book.title} - ${book.author} ($${book.price})`);
    });
}


function addBook(id, title, author, price, quantity) {
    const newBook = new Book(id, title, author, price, quantity);
    inventory.push(newBook);
}


function updateBook(id, newQuantity) {
    const book = inventory.find(book => book.id === id);
    if (book) {
        book.quantity = newQuantity;
    }
}
function updateBookWithMap(id, newQuantity) {
    inventory = inventory.map(book => {
        if (book.id === id) {
            return { ...book, quantity: newQuantity };
        }
        return book;
    });
}


function removeBook(id) {
    inventory = inventory.filter(book => book.id !== id);
}


displayBooks();

console.log("\nAdding a new book:");
addBook(4, "Brave New World", "Aldous Huxley", 8.99, 12);
displayBooks();

console.log("\nUpdating quantity of book with id 2:");
updateBook(2, 10);
displayBooks();

console.log("\nUpdating quantity of book with id 3 using map:");
updateBookWithMap(3, 6);
displayBooks();

console.log("\nRemoving book with id 1:");
removeBook(1);
displayBooks();
