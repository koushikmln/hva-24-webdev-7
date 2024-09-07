
let tasks = [
    { id: 1, description: "Complete JavaScript project", dueDate: "2024-09-10", status: "pending" },
    { id: 2, description: "Read a book", dueDate: "2024-09-12", status: "in progress" },
    { id: 3, description: "Go to the gym", dueDate: "2024-09-15", status: "completed" },
  ];
  class Task {
    constructor(id, description, dueDate, status) {
      this.id = id;
      this.description = description;
      this.dueDate = dueDate;
      this.status = status;
    }
  }
  function displayTasks() {
    tasks.forEach((task) => {
      console.log(`${task.description} - ${task.dueDate} (${task.status})`);
    });
  }
  function addTask(id, description, dueDate, status) {
    const newTask = new Task(id, description, dueDate, status);
    tasks.push(newTask);
  }
  
  function updateTask(id, status) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.status = status;
    } else {
      console.log("Task not found.");
    }
  }
  
  function updateTaskWithMap(id, status) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, status: status } : task
    );
  }

  function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
  }
   
  displayTasks(); 
  addTask(4, "Buy groceries", "2024-09-13", "pending"); 
  console.log("After adding 'Buy groceries':");
  displayTasks(); 
  
  updateTask(1, "completed"); 
  console.log("After updating 'Complete JavaScript project' status:");
  displayTasks(); 
  
  updateTaskWithMap(2, "completed"); 
  console.log("After updating 'Read a book' status with map:");
  displayTasks(); 
  
  removeTask(3); 
  console.log("After removing 'Go to the gym':");
  displayTasks(); 
  