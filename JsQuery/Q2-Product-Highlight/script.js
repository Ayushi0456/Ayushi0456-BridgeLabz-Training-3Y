
$(document).ready(function () {

    // Click product to highlight it
    $(".product").click(function () {
        $(".product").removeClass("selected");
        $(this).addClass("selected");

        // Check stock using data attribute
        if ($(this).attr("data-stock") === "out") {
            alert("Sorry! This product is out of stock.");
        }
    });

    // Hover over product to display details
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // Toggle favorite selection
    $(".favorite").click(function (event) {
        event.stopPropagation();

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {
            $(this).text("♥");
        } else {
            $(this).text("♡");
        }
    });

});
