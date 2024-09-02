class Employee{
    constructor(name,email,age,department,position,salary){
        this.name=name;
        this.age=age;
        this.email=email;
        this.department=department;
        this.position=position;
        this.salary=salary;
    }
    introduce(){
        return `Hello,i am ${this.name},${this.position}`;
    }
    displaySalary(){
        return `Salary:$${this.salary}`;
    }
}
let newEmployee=new Employee("john","j@gmail.com",40,"IT","software developer",1000000);
let manager=new Employee("venu","v@gmail.com",40,"IT","manager",2000000);
console.log(newEmployee.introduce());
console.log(newEmployee.displaySalary());
console.log(manager.introduce());
console.log(manager.displaySalary());