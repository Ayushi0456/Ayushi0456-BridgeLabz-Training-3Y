"use strict";

// Q5 - Movie Ticket Booking

const movieForm = document.getElementById("movieForm");

const movieNameInput = document.getElementById("movieName");
const movieEmailInput = document.getElementById("movieEmail");
const movieSeatsInput = document.getElementById("movieSeats");

const movieNamePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const movieEmailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

// Validate an input and update its border and error message.
function validateMovieField(input, errorId, isValid, message) {
const errorElement = document.getElementById(errorId);

```
if (!isValid) {
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

// Handle movie ticket booking.
movieForm.addEventListener("submit", function (event) {
event.preventDefault();


const name = movieNameInput.value.trim();
const email = movieEmailInput.value.trim();
const seatsText = movieSeatsInput.value.trim();
const seats = Number(seatsText);

const isNameValid = validateMovieField(
    movieNameInput,
    "movieNameError",
    movieNamePattern.test(name),
    "Name must contain alphabets only."
);

const isEmailValid = validateMovieField(
    movieEmailInput,
    "movieEmailError",
    movieEmailPattern.test(email),
    "Enter a valid email address."
);

const isSeatsValid = validateMovieField(
    movieSeatsInput,
    "movieSeatsError",
    seatsText !== "" &&
        Number.isInteger(seats) &&
        seats >= 1 &&
        seats <= 10,
    "Select a whole number of seats from 1 to 10."
);

const ticketOutput = document.getElementById("ticketOutput");

if (isNameValid && isEmailValid && isSeatsValid) {

    // Store booking information in an object.
    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    // Display ticket details.
    ticketOutput.textContent =
        "========== BOOKING CONFIRMED ==========\n" +
        `Name: ${booking.name}\n` +
        `Email: ${booking.email}\n` +
        `Seats: ${booking.seats}\n` +
        "Status: Confirmed";

    console.log("Movie Ticket Booking:", booking);

} else {
    ticketOutput.textContent = "Please correct the invalid fields.";
    console.log("Booking failed. Please check the form.");
}


});

// Debugging observation:
// Number() converts the seat input to a number.
// Number.isInteger() prevents decimal seat counts.
// The range check allows only 1 through 10 seats.
