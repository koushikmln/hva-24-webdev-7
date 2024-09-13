let inventory=[
    {id:1,title:"reminders of him",author:"collen hoover",price:250,quantity:2},
    {id:2,title:"half girlfriend",author:"chethan bhagath",price:200,quantity:1}
];
class Book{
    constructor(id,title,author,price,quantity){
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
        this.quantity=quantity;
    }
}
function displayBooks(){
    inventory.forEach((val)=>{
        console.log(`${val.title}-${val.author}(${val.quantity})`);
    });
}
function addBook(id,title,author,price,quantity){
    let obj=new Book(id,title,author,price,quantity);
    inventory.push(obj);
}
function updateBook(id,quantity){
    let book=inventory.find((val)=>{
        return val.id===id;
    });
    if(book){
        book.quantity=quantity;
    }
}
function updateBookWithMap(id,quantity){
    inventory=inventory.map(val=>{
        if(val.id==id){
            val.quantity=quantity;
        }
        return val;
    });
}
function removeBook(id){
     inventory=inventory.filter((val)=>{
        return val.id!==id;
    });
}
displayBooks();
addBook(3,"The Journey home","radhanath swamy",500,1);
displayBooks();
updateBook(3,2);
displayBooks();
updateBook(3,4);
displayBooks();
removeBook(3);
displayBooks();