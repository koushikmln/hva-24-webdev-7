






class Book{
    constructor( id, title,author, price, quantity){
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
        this.quantity=quantity;
    }
}
function displayBooks(){
    inventory.foreach(book=>console.log(`${book.title}-${book.author}(${book.price})`));

}
function addbook(id,title,author,price,quantity){
    let a=new Book(id,title,author,price,quantity);
    inventory.push(a);
}
function updatebook(bookid,quantity){
    
}