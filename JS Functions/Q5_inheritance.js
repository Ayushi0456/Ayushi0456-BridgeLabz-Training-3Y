// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};


// Child constructor
function Student(name, branch) {

    // Calling parent constructor
    Person.call(this, name);

    this.branch = branch;
}

// Inheriting parent prototype
Student.prototype = Object.create(Person.prototype);

// Fixing constructor reference
Student.prototype.constructor = Student;


// Child prototype method
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};


// Creating student object
const student1 = new Student("Ayushi", "CSE AI & DS");

// Calling parent method
student1.showName();

// Calling child method
student1.showBranch();


// Checking prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);