
"use strict";

// --------------------------------
// PART 1: Using Nested Callbacks
// --------------------------------

function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed.");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed.");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed.");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed.");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("5. Celebration time!");
    }, 1000);
}

// Nested callbacks (Callback Hell)
console.log("Callback Hell Pipeline:");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

// --------------------------------
// PART 2: Using Async/Await
// --------------------------------

// Function returning a Promise
function executeStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

// Async function for pipeline
async function runPipeline() {
    console.log("\nAsync/Await Pipeline:");

    await executeStage("1. Design completed.");
    await executeStage("2. Build completed.");
    await executeStage("3. Testing completed.");
    await executeStage("4. Deployment completed.");
    await executeStage("5. Celebration time!");
}

// Execute pipeline
runPipeline();

/*
Explanation:

Callback Hell:
- Multiple nested callbacks.
- Code becomes difficult to read.
- Debugging and maintenance become difficult.

Async/Await:
- Makes asynchronous code look synchronous.
- Improves readability.
- Makes sequential execution easier.
- Can be combined with try-catch for error handling.
*/