class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    introduce() {
        console.log("Hello,I am " + this.name + "," + this.position);
    }
    displaySalary() {
        console.log("Salary:$" + this.salary);
    }
}
const newEmployee = new Employee("Mohan", "mohan@gmail.com", 25, "IT", "SDE", 50000);
console.log(newEmployee);
const manager = new Employee("Murali", "murali@gmail.com", 40, "IT", "HR", 75000);
console.log(manager);

newEmployee.introduce();
newEmployee.displaySalary();

manager.introduce();
manager.displaySalary();