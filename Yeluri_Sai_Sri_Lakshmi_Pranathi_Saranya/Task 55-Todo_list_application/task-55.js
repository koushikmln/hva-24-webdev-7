tasks=[
    {id:1,description:"PS assignment",dueDate:"12-09-2024",status:"comp"},
    {id:2,description:"coding tasks",dueDate:"13-09-2024",status:"notcomp"}
];
class Task{
    constructor(id,description,dueDate,status){
        this.id=id;
        this.description=description;
        this.dueDate=dueDate;
        this.status=status;
    }
}
function displayTasks(){
    tasks.forEach((val)=>{
        console.log(`${val.description}-${val.dueDate}(${val.status})`);
    });
}
function addTask(id,description,dueDate,status){
    let obj=new Task(id,description,dueDate,status);
    tasks.push(obj);
}
function updateTask(id,status){
    let task=tasks.find((val)=>{
        return val.id===id;
    });
    if(task){
        task.status=status;
    }

}
function updateTaskWithMap(id,status){
    tasks=tasks.map((val)=>{
         if(val.id===id){
            val.status=status;
         }
         return val;
    });

}
function removeTask(id){
    tasks=tasks.filter((val)=>{
        return val.id!==id;
    });
}
displayTasks();
addTask(3,"project","23-09-2024","notcomp");
displayTasks();
updateTask(3,"comp");
displayTasks();
updateTaskWithMap(3,"notcomp");
displayTasks();
removeTask(3);
displayTasks();