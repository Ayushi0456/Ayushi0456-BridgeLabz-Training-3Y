
$(document).ready(function () {

    // Display greeting according to current time
    let hour = new Date().getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 17) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    $("#greeting").text(message);

    // Change greeting to motivational quote
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and never give up!");

        alert("Keep working hard. Success is waiting for you!");
    });

    // Toggle welcome message visibility
    $("#toggleWelcome").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Show alert when greeting is clicked
    $("#greeting").click(function () {
        alert("Welcome! We are glad to see you.");
    });

});
