class Book{
    constructor(title,author,publisher,year,genre){
        this.title=title,
        this.author=author,
        this.publisher=publisher,
        this.year=year,
        this.genre=genre
    }
    describe(){
        console.log(`${this.title}-${this.author},(${this.year})`);
    }
    displayGenre(){
        console.log(`Genre:${this.genre}`);
    }
}
let classicBook=new Book("pride and prejudice","Frank Herbert","Chilton Books","1965","Fiction");
let sciFiBook=new Book("Dune","Frank Herbert","Chilton Books","1965","Science Fiction");
classicBook.describe();
classicBook.displayGenre();
sciFiBook.displayGenre();
sciFiBook.describe();
