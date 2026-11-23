
$(document).ready(function () {

    // Hide a specific banner
    $(".hideBanner").click(function () {
        $(this).closest(".banner").hide();
    });

    // Show all hidden banners
    $("#show").click(function () {
        $(".banner").show();
    });

    // Slide up all banners
    $("#slideUp").click(function () {
        $(".banner").slideUp();
    });

    // Slide down all banners
    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });

    // Fade in all banners
    $("#fadeIn").click(function () {
        $(".banner").fadeIn(1000);
    });

    // Fade out all banners
    $("#fadeOut").click(function () {
        $(".banner").fadeOut(1000);
    });

    // Automatically rotate banners every 5 seconds
    let currentIndex = 0;
    let banners = $(".banner");

    // Initially display only the first banner
    banners.hide();
    banners.eq(currentIndex).show();

    setInterval(function () {

        // Fade out current banner
        banners.eq(currentIndex).fadeOut(500);

        // Move to next banner
        currentIndex = (currentIndex + 1) % banners.length;

        // Fade in next banner
        banners.eq(currentIndex).fadeIn(500);

    }, 5000);

});
