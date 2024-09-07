let expenses = [
    { id: 1, name: "Groceries", amount: 50, date: "2024-09-01" },
    { id: 2, name: "Rent", amount: 500, date: "2024-09-01" },
    { id: 3, name: "Utilities", amount: 100, date: "2024-09-03" },
  ];

  class Expense {
    constructor(id, name, amount, date) {
      this.id = id;
      this.name = name;
      this.amount = amount;
      this.date = date;
    }
  }
  
  function displayExpenses() {
    expenses.forEach((expense) => {
      console.log(`${expense.name} - $${expense.amount} (${expense.date})`);
    });
  }
  function addExpense(id, name, amount, date) {
    const newExpense = new Expense(id, name, amount, date);
    expenses.push(newExpense);
  }
  function updateExpense(id, amount) {
    const expense = expenses.find((expense) => expense.id === id);
    if (expense) {
      expense.amount = amount;
    } else {
      console.log("Expense not found.");
    }
  }
  function updateExpenseWithMap(id, amount) {
    expenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, amount: amount } : expense
    );
  }
  function removeExpense(id) {
    expenses = expenses.filter((expense) => expense.id !== id);
  }
  displayExpenses(); 
  
  addExpense(4, "Transport", 70, "2024-09-04"); // Add new expense
  console.log("After adding Transport:");
  displayExpenses(); 
  updateExpense(1, 60); 
   console.log("After updating Groceries amount:");
  displayExpenses(); 
  updateExpenseWithMap(2, 550); 
  console.log("After updating Rent amount with map:");
  displayExpenses(); 
  
  removeExpense(3); 
  console.log("After removing Utilities:");
  displayExpenses(); 