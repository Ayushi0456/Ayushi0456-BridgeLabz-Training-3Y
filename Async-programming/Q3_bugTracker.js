
"use strict";

// Promise-based function to fetch bugs
function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate random API failure
            const isApiFailed = Math.random() < 0.3;

            if (isApiFailed) {
                reject("API Error: Unable to fetch bugs!");
            } else {
                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            }

        }, 1000);
    });
}

// Fetch and display bugs
getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
