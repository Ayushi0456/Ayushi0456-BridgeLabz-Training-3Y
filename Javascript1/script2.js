
let userName = "Ayushi";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let user = { city: "Mathura", course: "B.Tech" };
let salary = null;
let address;

console.table([
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: JSON.stringify(subjects), Type: Array.isArray(subjects) ? "Array" : typeof subjects },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Salary", Value: salary, Type: String(salary) },
    { Label: "Address", Value: address, Type: typeof address }
]);

