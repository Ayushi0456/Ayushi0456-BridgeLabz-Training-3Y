"use strict";

// Q2 - Employee Bonus Calculator

const employees = [
{ name: "Amit", salary: "45000", years: "5" },
{ name: "Sara", salary: "38000", years: "2" },
{ name: "Kiran", salary: "52000", years: "7" }
];

console.log("======================================");
console.log("       EMPLOYEE BONUS CALCULATOR");
console.log("======================================");

for (const employee of employees) {
try {
// Validate employee object and required properties.
if (
employee === null ||
typeof employee !== "object" ||
!Object.hasOwn(employee, "name") ||
!Object.hasOwn(employee, "salary") ||
!Object.hasOwn(employee, "years")
) {
throw new Error("Missing employee data or required property.");
}


    // Validate the employee name.
    if (
        typeof employee.name !== "string" ||
        employee.name.trim() === ""
    ) {
        throw new Error("Employee name is invalid.");
    }

    // Convert salary and experience into numbers.
    const salary = Number(employee.salary);
    const years = Number(employee.years);

    // Reject empty strings and non-numeric values.
    if (
        (typeof employee.salary === "string" &&
            employee.salary.trim() === "") ||
        (typeof employee.years === "string" &&
            employee.years.trim() === "") ||
        !Number.isFinite(salary) ||
        !Number.isFinite(years) ||
        salary < 0 ||
        years < 0
    ) {
        throw new Error("Salary or experience is invalid.");
    }

    // Calculate bonus according to experience.
    const bonus = years > 3
        ? salary * 0.10
        : salary * 0.05;

    // Calculate total salary after bonus.
    const totalSalary = salary + bonus;

    // Display formatted employee details.
    console.log(`Employee Name: ${employee.name}`);
    console.log(`Salary: Rs. ${salary.toFixed(2)}`);
    console.log(`Experience: ${years} years`);
    console.log(`Bonus: Rs. ${bonus.toFixed(2)}`);
    console.log(`Total Salary: Rs. ${totalSalary.toFixed(2)}`);

    console.log("--------------------------------------");

} catch (error) {
    console.log("Employee Processing Error:", error.message);
    console.log("--------------------------------------");
}


}

// Debugging observations:
// 1. Number("45000") returns 45000.
// 2. Employees with more than 3 years receive a 10% bonus.
// 3. Other employees receive a 5% bonus.
// 4. Strict mode prevents accidental undeclared global variables.
