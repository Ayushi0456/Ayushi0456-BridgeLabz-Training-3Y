```javascript
"use strict";

// Selecting elements
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

// Update character counter
message.addEventListener("input", function () {

    const remainingCharacters =
        maxCharacters - message.value.length;

    counter.textContent = remainingCharacters;

    if (remainingCharacters <= 0) {

        counter.style.color = "red";

    } else if (remainingCharacters <= 20) {

        counter.style.color = "orange";

    } else {

        counter.style.color = "green";

    }

});

// Prevent typing after 100 characters
message.addEventListener("keydown", function (event) {

    if (
        message.value.length >= maxCharacters &&
        event.key.length === 1
    ) {
        event.preventDefault();
    }

});

// Reset button
resetButton.addEventListener("click", function () {

    message.value = "";

    counter.textContent = maxCharacters;

    counter.style.color = "green";

});
```
