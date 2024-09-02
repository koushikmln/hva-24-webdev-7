class Employee{
    constructor(name, email, age,department, position, salary){
        this.name=name;
        this.email=email;
        this.age=age;
        this.department=department;
        this.position=position;
        this.salary=salary;
    }
    introduce(name,position) {
        console.log(`Hello,I am ${this.name},${this.position}`);
    }
    displaySalary(salary){
        console.log(`salary:$${this.salary}`);
    }
}
 let newEmployee = new Employee("sai","sai123@gmail.com","23","tech","Software Developer","80000");
 let manager = new Employee("sai","sai123@gmail.com",23,"tech","Manager",100000);
newEmployee.introduce();
newEmployee.displaySalary();
manager.introduce();
manager.displaySalary();