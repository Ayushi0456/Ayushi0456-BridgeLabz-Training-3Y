"use strict";

// Parent Class
class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing general work.");
    }
}

// Child Class
class Manager extends Employee {

    constructor(name, department) {
        super(name, department);
    }

    // Method Overriding
    work() {
        console.log(this.name + " is managing the team.");
    }
}

// Creating Objects
let e1 = new Employee("Rahul", "IT");

let e2 = new Manager("Ayushi", "HR");

// Calling work() method
console.log("Employee Details:");
console.log("Name:", e1.name);
console.log("Department:", e1.department);
e1.work();

console.log("----------------------");

console.log("Manager Details:");
console.log("Name:", e2.name);
console.log("Department:", e2.department);
e2.work();