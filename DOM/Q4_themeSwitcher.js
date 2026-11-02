```javascript
"use strict";

// Selecting all theme buttons
const themeButtons = document.querySelectorAll(".themeButton");

// Add click event to each button
themeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected theme
        const selectedTheme = button.getAttribute("data-theme");

        // Apply theme using setAttribute()
        document.body.setAttribute("class", selectedTheme);

        // Save theme in custom attribute
        document.body.setAttribute("data-theme", selectedTheme);

        console.log("Current Theme:", selectedTheme);

    });

});
```
