let expenses=[
    {id:1,name:"milk",amount:20,date:'7-9-2024'},
    {id:2,name:"bread",amount:40,date:'7-9-2024'}
];
class Expense{
    constructor(id,name,amount,date){
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.date=date;
    }
}
function displayExpenses(){
    expenses.forEach((val)=>{
        console.log(`${val.name}-${val.amount}(${val.date})`);
    });
}
function addExpense(id,name,amount,date){
    let obj=new Expense(id,name,amount,date);
    console.log(obj);
    expenses.push(obj);
}
function updateExpense(id,amount){
     let prod=expenses.find((val)=>{
        return val.id===id;
    });
    if(prod){
        prod.amount=amount;
    }
}
function updateExpenseWithMap(id,amount){
    expenses=expenses.map((val)=>{
        if(val.id===id){
            val.amount=amount;
        }
        return val;
    });
}
function removeExpense(id){
    expenses=expenses.filter((val)=>{
        return val.id!==id;
    });
}
displayExpenses();
addExpense(3,"meat",100,'7-9-2024');
displayExpenses();
updateExpense(3,900);
displayExpenses();
updateExpenseWithMap(3,200);
displayExpenses();
removeExpense(3);
displayExpenses();
