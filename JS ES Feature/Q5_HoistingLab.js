"use strict";

// Q5 - Hoisting Lab: The Sequence Trap

console.log("======================================");
console.log("           HOISTING LAB");
console.log("======================================");

// PART 1: ORIGINAL CODE BEHAVIOUR

console.log("\n--- Original Code ---");

// var declaration is hoisted and initialized with undefined.
console.log(score);

// Function declarations can be called before their declaration.
announce();

var score = 50;

function announce() {
console.log("Game started");
}

let status = "ready";

function startGame() {
console.log(status);
}

startGame();

// Expected output:
// undefined
// Game started
// ready

// Explanation:
// 1. score is declared using var, so it initially has undefined.
// 2. announce() works because function declarations are hoisted.
// 3. status is initialized before startGame() is called.
// 4. Accessing status before its let declaration would throw
//    a ReferenceError because of the temporal dead zone.

// PART 2: CORRECTED VERSION

console.log("\n--- Corrected Code ---");

// Declare variables before using them.
const fixedScore = 50;
const fixedStatus = "ready";

function fixedAnnounce() {
console.log("Game started successfully");
}

function fixedStartGame() {
console.log(fixedStatus);
}

console.log("Score:", fixedScore);

fixedAnnounce();
fixedStartGame();

// PART 3: ARROW FUNCTION COMPARISON

console.log("\n--- Arrow Function Version ---");

// Arrow functions assigned to const must be initialized before use.
const arrowAnnounce = () => {
console.log("Game started using arrow function");
};

const arrowStartGame = () => {
console.log(fixedStatus);
};

// Call arrow functions after initialization.
arrowAnnounce();
arrowStartGame();

// Debugging observations:
// 1. var declarations are initialized with undefined during hoisting.
// 2. Function declarations are available before their declaration.
// 3. let and const cannot be accessed before initialization.
// 4. Arrow functions assigned to const cannot be called before
//    the const variable has been initialized.
// 5. Place a breakpoint before console.log(score) to inspect
//    the execution and variable states.
