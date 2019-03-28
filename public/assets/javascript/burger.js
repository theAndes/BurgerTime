//DOM load
$(function () {
    console.log('====================================');
    console.log("in /assets/burger.JS");
    console.log('====================================');
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = 1;
        console.log('====================================');
        console.log(devoured);
        console.log('====================================');
        var devouredState = {
            devoured: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed burger to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burger = {
            name: $("#burger").val().trim(),
                };
                console.log('====================================');
                console.log(burger);
                console.log('====================================');

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});
