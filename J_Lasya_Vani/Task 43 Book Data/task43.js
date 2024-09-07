class book{
    constructor(title,author,publisher,year,genre){
        this.title=title,
        this.author=author,
        this.publisher=publisher,
        this.year=year,
        this.genre=genre
    }
    describe(){
        console.log(`${this.title}- ${this.author}( ${this.year})`);

    }
    displaygenre(){
        console.log(`Genre: ${this.genre}`);
    }
}
const classicbook=new book("Pride and Prejudice", "Jane Austen", "T. Egerton", 1813, "Classic");
const scifibook=new book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction");
console.log(classicbook);
console.log(scifibook);
classicbook.describe();
classicbook.displaygenre();
scifibook.displaygenre();
scifibook.describe();

