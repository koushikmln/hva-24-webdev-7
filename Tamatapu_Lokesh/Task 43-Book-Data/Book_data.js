class Book{
    constructor(title,author,publisher,year,genere){
        this.title=title;
        this.author=author;
        this.publisher=publisher;
        this.year=year;
        this.genere=genere;
    }
    describe(){
        console.log(`${this.title}-${this.author} (${this.year})`);
    }
    displayGenre(){
        console.log(`Genere:${this.genere}`);
    }
};

const classicBook = new Book(
    "Pride and Prejudice",
    "Jane Austen",
    "T. Egerton",
    1813,
    "Classic"
  );
  
  const sciFiBook = new Book(
    "Dune",
    "Frank Herbert",
    "Chilton Books",
    1965,
    "Science Fiction"
  );
  
  console.log(classicBook);
  console.log(sciFiBook);
  
  classicBook.describe();        
  classicBook.displayGenre();    
  
  
  sciFiBook.describe();          
  sciFiBook.displayGenre();    
  
  