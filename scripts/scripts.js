/*******************************
 * $SHARING
 *******************************/
$(document).ready(function() {
    $("share__tile").hover(
        function() {
            $(this).closest(".share__title--current").html("Hello!");
        },
        function() {
            $(this).closest(".share__title--current").html("");
        }
    );
});