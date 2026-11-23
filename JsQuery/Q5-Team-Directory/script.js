
$(document).ready(function () {

    // 1. Click manager to highlight all direct reports
    $(".employee[data-role='manager']").click(function () {

        $(".employee").removeClass("highlight");

        let managerId = $(this).attr("data-id");

        // Select employees working under this manager
        $(".employee[data-manager='" + managerId + "']")
            .addClass("highlight");

        $(this).addClass("highlight");
    });

    // 2. Hover employee to show contact information using next()
    $(".employee").hover(
        function () {
            $(this).next(".contact").show();
        },
        function () {
            $(this).next(".contact").hide();
        }
    );

    // 3. Click department to change background of all members
    $(".department").click(function (event) {

        // Prevent employee clicks from triggering department click
        if ($(event.target).closest(".employee").length > 0) {
            return;
        }

        $(this).children(".members")
            .children(".employee")
            .css("background-color", "#ffd6a5");
    });

    // 4. Select random employee and highlight siblings
    $("#randomEmployee").click(function () {

        let employees = $(".employee");
        let randomIndex = Math.floor(Math.random() * employees.length);

        let selectedEmployee = employees.eq(randomIndex);

        $(".employee").removeClass("highlight");

        selectedEmployee.addClass("highlight");

        // Highlight sibling employees in the same department
        selectedEmployee.siblings(".employee")
            .addClass("highlight");
    });

    // 5. Collapse or expand team using parent() and find()
    $("#toggleTeam").click(function () {

        let teamPanel = $(this).parent();

        teamPanel.find(".team-content").slideToggle();

    });

});
