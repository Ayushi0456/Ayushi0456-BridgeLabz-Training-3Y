
"use strict";

// Server A response
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed!");
            } else {
                resolve("Server A");
            }
        }, 2000);
    });
}

// Server B response
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed!");
            } else {
                resolve("Server B");
            }
        }, 3000);
    });
}

// Promise.all() - Wait for both servers
Promise.all([serverA(), serverB()])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment Error:", error);
    });

// Promise.race() - First settled response
Promise.race([serverA(), serverB()])
    .then((response) => {
        console.log("Fastest response:", response);
    })
    .catch((error) => {
        console.log("Race Error:", error);
    });
