var tasks = [
    { id: 1, description: "Complete assignments", dueDate: "25=08-2024", status: "Pending" },
    { id: 2, description: "Buy groceries", dueDate: "30=08-2024", status: "Completed" },
];

class Task {
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }
    displayTasks() {
        tasks.forEach(function(item) {
            console.log(`${item.description}: ${item.dueDate}(${item.status})`);
        })
    }
    addTask(id, description, dueDate, status) {
        var newobj = new Task(id, description, dueDate, status);
        tasks.push(newobj);
    }
    updateTask(id, status) {
        var item = tasks.find(function(x) {
            return x.id === id;
        })
        if (item) {
            item.status = status;
        } else {
            console.log("id not found");
        }
    }
    updateTaskWithMap(id, status) {
        var found = 0;
        tasks = tasks.map(function(item) {
            if (item.id === id) {
                found = 1;
                item.status = status;
            }
        })
        if (found == 0) {
            console.log("id not found");
        }
    }
    removeTask(id) {
        tasks = tasks.filter(function(item) {
            return item.id !== id;
        })
    }
}

var obj = new Task();
obj.displayTasks();

obj.addTask(3, "Finish presentation", "27-08-2024", "Pending");
console.log("\nAfter adding task");
obj.displayTasks();

obj.updateTask(1, "Completed");
console.log("\nAfter updating task");
obj.displayTasks();

obj.updateTask(1, "Pending");
console.log("\nAfter updating task with map");
obj.displayTasks();

obj.removeTask(3);
console.log("\nAfter removing task");
obj.displayTasks();