
class Task {
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }
}


let tasks = [
    new Task(1, "Complete js tasks", "2024-09-10", "In Progress"),
    new Task(2, "complete ps assignment", "2024-09-12", "Pending"),
    new Task(3, "Read a book", "2024-09-05", "Completed")
];

function displayTasks() {
    tasks.forEach(task => {
        console.log(`${task.description} - ${task.dueDate} (${task.status})`);
    });
}


function addTask(id, description, dueDate, status) {
    const newTask = new Task(id, description, dueDate, status);
    tasks.push(newTask);
}

function updateTask(id, newStatus) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = newStatus;
    }
}

function updateTaskWithMap(id, newStatus) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, status: newStatus };
        }
        return task;
    });
}


function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}


console.log("Initial tasks:");
displayTasks();

console.log("\nAdding a new task:");
addTask(4, "Write a assignment", "2024-09-15", "Pending");
displayTasks();

console.log("\nUpdating status of task with id 2:");
updateTask(2, "Completed");
displayTasks();

console.log("\nUpdating status of task with id 3 using map:");
updateTaskWithMap(3, "Archived");
displayTasks();

console.log("\nRemoving task with id 1:");
removeTask(1);
displayTasks();
