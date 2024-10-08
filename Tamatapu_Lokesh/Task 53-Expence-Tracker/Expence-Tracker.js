//Define the Array of Expenses
let expenses=[{ id: 1, name: 'Groceries', amount: 50, date: '2024-09-01' }, 
              { id: 2, name: 'Rent', amount: 500, date: '2024-09-02' }, 
              { id: 3, name: 'Electricity Bill', amount: 75, date: '2024-09-03' }, 
              { id: 4, name: 'Internet Bill', amount: 60, date: '2024-09-04' } 
            ];

//Create the Expense Class
class Expense{
constructor(id, name, amount, date){
this.id=id;
this.name=name;
this.amount=amount;
this.date=date;
}
};

//Define the displayExpenses Function
function displayExpenses(){
expenses.forEach(function(expense){
console.log(`${expense.name}-${expense.amount}(${expense.date})`)
});
}

//Define the addExpense Function
function addExpense(id,name,amount,date){
const newexpense = new Expense(id,name,amount,date);
expenses.push(newexpense);
}

//Define the updateExpense Function
function updateExpense(id,amount){
const expense = expenses.find(expense=>expense.id===id);
if(expense){
expense.amount=amount;
}
}

function updateExpenseWithMap(id,amount){
expenses=expenses.map(expense=>{
if(expense.id===id){
return new Expense(expense.id,expense.name,amount,expense.date);
}
return expense;
});
}

//Define the removeExpense Function
function removeExpense(id){
expenses=expenses.filter(expense=>expense.id!==id);
}


