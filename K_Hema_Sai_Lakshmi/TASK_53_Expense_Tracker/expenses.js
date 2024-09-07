// Define an array called expenses
let expenses = [
    {
        id: 1,
        name: "Groceries",
        amount: 50,
        date: "2024-08-01",
        category: "Food"
    },
    {
        id: 2,
        name: "Electricity Bill",
        amount: 100,
        date: "2024-08-05",
        category: "Utilities"
    },
    {
        id: 3,
        name: "Internet",
        amount: 40,
        date: "2024-08-10",
        category: "Utilities"
    }
];

class Expense{
    constructor(id,name,amount,date){
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.date=date
    }
}
function displayExpenses(){
    expenses.forEach(expense=>console.log(`${expense.name}-${expense.amount}(${expense.date})`));
}
displayExpenses()
function addexpenses(id,name,amount,date){
    let e = new Expense(id,name,amount,date);
    expenses.push(e)
}
addexpenses(4, "Gym Membership", 30, "2024-08-15", "Health");
displayExpenses();
function updateexpenses(id,amount){
    exp=expenses.find(e1=>e1.id==id)
    if(exp){
        exp.amount=amount;
    }
}
function updateexpensewithmap(id,amount){
    expenses=expenses.map(e1=>
        e1.id==id?{...e1,amount:amount}:e1);

}
updateexpenses(2, 120);
displayExpenses();
function removeexpenses(id){
    expenses=expenses.filter(e1=>e1.id!=id);
}
console.log("removed")
removeexpenses(1);
displayExpenses();