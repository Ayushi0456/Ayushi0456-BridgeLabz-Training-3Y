
"use strict";

console.log("Start");

// Macrotask: Executes after synchronous code
setTimeout(() => {
    console.log("setTimeout callback - Macrotask");
}, 0);

// Microtask: Executes after synchronous code
Promise.resolve().then(() => {
    console.log("Promise callback - Microtask");
});

// Synchronous statement
console.log("Synchronous log");

console.log("End");

/*
Expected Output:

Start
Synchronous log
End
Promise callback - Microtask
setTimeout callback - Macrotask

Explanation:
1. Synchronous code executes first.
2. After synchronous execution, JavaScript
   processes the Microtask Queue.
3. Promise.then() is a microtask.
4. setTimeout() is a macrotask.
5. Therefore, microtasks execute before
   macrotasks.
*/
