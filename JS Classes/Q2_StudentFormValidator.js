"use strict";

// Q2 - Student Form Validator

const studentForm = document.getElementById("studentForm");

const studentNameInput = document.getElementById("studentName");
const studentEmailInput = document.getElementById("studentEmail");
const studentPhoneInput = document.getElementById("studentPhone");
const studentPasswordInput = document.getElementById("studentPassword");

// Validation patterns.
const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
const phonePattern = /^\d{10}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/;

// Update input border and its error message.
function validateStudentField(input, errorId, pattern, message) {
const errorElement = document.getElementById(errorId);
const value = input.value.trim();

```
if (!pattern.test(value)) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    errorElement.textContent = message;
    return false;
}

input.classList.remove("invalid");
input.classList.add("valid");
errorElement.textContent = "";

return true;
```

}

// Validate the complete student form.
studentForm.addEventListener("submit", function (event) {
event.preventDefault();

```
const isNameValid = validateStudentField(
    studentNameInput,
    "studentNameError",
    namePattern,
    "Name must contain alphabets only."
);

const isEmailValid = validateStudentField(
    studentEmailInput,
    "studentEmailError",
    emailPattern,
    "Enter a valid email address."
);

const isPhoneValid = validateStudentField(
    studentPhoneInput,
    "studentPhoneError",
    phonePattern,
    "Phone number must contain exactly 10 digits."
);

const isPasswordValid = validateStudentField(
    studentPasswordInput,
    "studentPasswordError",
    passwordPattern,
    "Password needs an uppercase letter, a number and a special character."
);

const result = document.getElementById("studentResult");

if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    result.textContent = "Student registration successful!";
    console.log("Student registration successful.");
    console.log("Student Name:", studentNameInput.value.trim());
    console.log("Student Email:", studentEmailInput.value.trim());
} else {
    result.textContent = "";
    console.log("Student registration failed. Check the input fields.");
}
```

});

// Debugging observation:
// test() returns true or false depending on whether the value matches
// the regular expression. The submit event is prevented to avoid
// reloading the page while validation runs.
