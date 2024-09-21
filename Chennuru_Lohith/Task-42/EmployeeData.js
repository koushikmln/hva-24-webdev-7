class Employee{
    constructor(name,email,age,department,position,salary){
        this.name=name;
        this.email=email;
        this.age=age;
        this.department=department;
        this.position=position;
        this.salary=salary;
    }
    introduce(){
        console.log("Hello, I am "+this.name+","+this.position);
    }
    displaySalary(){
        console.log(String("Salary:$"+this.salary));
    }
}
let newEmployee=new Employee("Lohith","chennurulohith@gmail.com",22,"Development","Software Developer",1000000);
let manager=new Employee("Someone","someone@something.some",0,"Management","Manager",50000);

newEmployee.introduce();
newEmployee.displaySalary();
manager.introduce();
manager.displaySalary();
