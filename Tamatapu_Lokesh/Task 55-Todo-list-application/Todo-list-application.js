//Define the Array of Tasks 
let tasks=[{ id: 1, description: 'Morning Jog', dueDate: '2024-09-21', status: 'Pending' }, 
    { id: 2, description: 'Team Meeting', dueDate: '2024-09-22', status: 'Scheduled' }, 
    { id: 3, description: 'Doctor Appointment', dueDate: '2024-09-23', status: 'Confirmed' }, 
    { id: 4, description: 'Submit Report', dueDate: '2024-09-24', status: 'In Progress' }];

//Create the Task Class 
class Task{ 
    constructor(id,description,dueDate,status){ 
        this.id=id; this.description=description; this.dueDate=dueDate; this.status=status; 
    } 
}

//Define the displayTasks Function 
function displayTasks(){ 
    tasks.forEach(function(task){ 
        console.log(`${task.description}-${task.dueDate}(${task.status}`)
    }); 
}

//Define the addTask Function 
function addTask(id,description,dueDate,status){ 
    const newtask = new Task(id,description,dueDate,status); 
    tasks.push(newtask); 
}

//Define the updateTask Function 
function updateTask(id,status){ 
    const task = tasks.find(task=>task.id===id); 
    if(task){ 
        task.status=status; 
    } 
}

function updateTaskWithMap(id,status){ 
    tasks=tasks.map(task=>{ 
        if(task.id===id){
             return new Task(task.id,task.description,task.dueDate,status); 
            } 
            return task; });
}

//Define the removeTask Function 
function removeTask(id){ 
    tasks = tasks.filter(task => task.id !== id);
}