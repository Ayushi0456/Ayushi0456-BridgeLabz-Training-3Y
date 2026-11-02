
"use strict";

// Selecting HTML elements
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");

const summary = document.getElementById("summary");

// Step 1: Next Button
document.getElementById("next1").addEventListener("click", function () {

    if (userName.value.trim() === "") {
        alert("Please enter your name");
        userName.focus();
        return;
    }

    step1.hidden = true;
    step2.hidden = false;

});

// Step 2: Back Button
document.getElementById("back2").addEventListener("click", function () {

    step2.hidden = true;
    step1.hidden = false;

});

// Step 2: Next Button
document.getElementById("next2").addEventListener("click", function () {

    if (userEmail.value.trim() === "" || !userEmail.checkValidity()) {
        alert("Please enter a valid email");
        userEmail.focus();
        return;
    }

    step2.hidden = true;
    step3.hidden = false;

});

// Step 3: Back Button
document.getElementById("back3").addEventListener("click", function () {

    step3.hidden = true;
    step2.hidden = false;

});

// Step 3: Submit Button
document.getElementById("submitForm").addEventListener("click", function () {

    if (userPassword.value.length < 6) {
        alert("Password must be at least 6 characters");
        userPassword.focus();
        return;
    }

    // Hide Step 3
    step3.hidden = true;

    // Show Summary
    summary.hidden = false;

    summary.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p>Name: ${userName.value}</p>
        <p>Email: ${userEmail.value}</p>
        <p>Password: ${"*".repeat(userPassword.value.length)}</p>
    `;

});




