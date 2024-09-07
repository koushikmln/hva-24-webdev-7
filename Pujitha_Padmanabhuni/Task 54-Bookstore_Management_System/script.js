var inventory = [
    { id: 1, title: "The Great Gatsby", author: "Scott Fitzgerald", price: 370, quantity: 50 },
    { id: 2, title: "Julius Caesar", author: "William Shakespeare", price: 1000, quantity: 100 },
    { id: 3, title: "Maha Prasathanam", author: "Sri Sri", price: 150, quantity: 250 }
];

class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    displayBooks() {
        inventory.forEach(function(item) {
            console.log(`${item.title}-${item.author} (${item.price})`);
        })
    }
    addBook(id, title, author, price, quantity) {
        var newobj = new Book(id, title, author, price, quantity);
        inventory.push(newobj);
    }
    updateBook(id, quantity) {
        var item = inventory.find(function(x) {
            return x.id == id;
        })
        if (item) {
            item.quantity = quantity;
        } else {
            console.log("id not found");
        }
    }
    removeBook(id) {
        inventory = inventory.filter(function(item) {
            return item.id != id;
        })
    }
}

var obj = new Book();
obj.displayBooks();

obj.addBook(4, "Demons and Angels", "Dan Brown", 400, 30);
console.log("\nAfter adding book");
obj.displayBooks();


obj.updateBook(2, 1000);
console.log("\nAfter updating book");
obj.displayBooks();

obj.removeBook(1);
console.log("\nAfter removing book");
obj.displayBooks();