
"use strict";

// Function to boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("1. Water boiled successfully.");
                resolve();
            }
        }, 1500);
    });
}

// Function to brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to brew coffee!");
            } else {
                console.log("2. Coffee brewed successfully.");
                resolve();
            }
        }, 1500);
    });
}

// Function to pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("3. Coffee poured into the cup.");
                resolve();
            }
        }, 1500);
    });
}

// Promise chaining to prepare coffee
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation error:", error);
    });
