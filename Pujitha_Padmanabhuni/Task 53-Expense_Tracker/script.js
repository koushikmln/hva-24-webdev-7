var expenses = [
    { id: 1, name: "Groceries", amount: 1500, date: "20-08-2024" },
    { id: 2, name: "Rent", amount: 6000, date: "01-08-2024" },
    { id: 3, name: "Bills", amount: 5000, date: "10-08-2024" },
];

class Expenses {
    constructor(id, name, amount, date) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
    displayExpenses() {
        expenses.forEach(function(item) {
            console.log(`${item.name}: ${item.amount}(${item.date})`);
        })
    }
    addExpense(id, name, amount, date) {
        var item = new Expenses(id, name, amount, date);
        expenses.push(item);
    }
    updateExpense(id, amount) {
        var item = expenses.find(function(x) {
            return x.id == id;
        });
        if (item) {
            item.amount = amount;
        } else {
            console.log("id not found");
        }
    }
    removeExpense(id) {
        expenses = expenses.filter(function(item) {
            return item.id != id;
        })
    }
}
var obj = new Expenses();
obj.displayExpenses();

obj.addExpense(4, "Shopping", 8000, "13-08-2024");
console.log("\nAfter adding expenses");
obj.displayExpenses();


obj.updateExpense(2, 3500);
console.log("\nAfter updating expenses");
obj.displayExpenses();


obj.removeExpense(4);
console.log("\nAfter removing expenses with id 4");
obj.displayExpenses();