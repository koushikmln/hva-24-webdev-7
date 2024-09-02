class Employee {
    constructor(name,email,age,department,position,salary){
        this.name=name;
        this.email=email;
        this.age=age;
        this.department=department;
        this.position=position;
        this.salary=salary;
    }
    introduce(){
        console.log(`Hello,I am ${this.name},${this.position}`);
    }
    displaySalary(){
        console.log(`Salary:${this.salary}`);
    }
};
let newEmployee=new Employee("likhita","ylikhita01@gmail.com",20,"ECE","TL","1000000")
console.log(newEmployee);
let manager=new Employee("mani","maniyerra@gmail.com",21,"FullStack","manager","2000000")
console.log(manager);
newEmployee.introduce();
newEmployee.displaySalary();
manager.introduce();
manager.displaySalary();