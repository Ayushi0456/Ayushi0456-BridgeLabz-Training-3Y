"use strict";

// Q4 - Debugging Mystery

console.log("======================================");
console.log("          DEBUGGING MYSTERY");
console.log("======================================");

function showMessage() {


// Declare greeting as a local variable.
const greeting = "Welcome";

// Set a breakpoint here to inspect greeting.
console.log(greeting);

console.log("Message displayed successfully.");


}

// Call the function.
showMessage();

// Scope demonstration.
function demonstrateScope() {
const localMessage = "This is a local variable.";


console.log(localMessage);


}

demonstrateScope();

// Debugging observations:
// 1. greeting is local to showMessage().
// 2. localMessage is local to demonstrateScope().
// 3. Neither variable is accessible outside its own function.
// 4. Use the Watch panel to inspect greeting or localMessage.
// 5. Use the Call Stack panel to inspect the active function.

// Strict mode prevents accidental global variable creation.
