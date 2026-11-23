
$(document).ready(function () {

    // Click question to show or hide its answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Change question color on hover
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "#2c3e50");
        }
    );

    // Double click to collapse all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Highlight parent question when input gets focus
    $(".answer input").focus(function () {
        $(this).closest(".faq").find(".question")
            .css("background-color", "#bde0fe");
    });

    // Reset background when input loses focus
    $(".answer input").blur(function () {
        $(this).closest(".faq").find(".question")
            .css("background-color", "");
    });

});
