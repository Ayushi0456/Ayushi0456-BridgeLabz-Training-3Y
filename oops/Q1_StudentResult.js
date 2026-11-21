"use strict";

class Student {

    // Constructor
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);

        return total / this.marks.length;
    }

    // Calculate grade
    calculateGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } 
        else if (average >= 60) {
            return "B";
        } 
        else if (average >= 40) {
            return "C";
        } 
        else {
            return "F";
        }
    }
}

// Create 3 student objects
let student1 = new Student("Ayushi", [85, 90, 80]);
let student2 = new Student("Rahul", [65, 70, 60]);
let student3 = new Student("Priya", [30, 35, 40]);

// Display results
let students = [student1, student2, student3];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.calculateGrade());
    console.log("----------------------");
});