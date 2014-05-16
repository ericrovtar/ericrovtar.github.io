/*******************************
 * $SHARING
 *******************************/
$(document).ready(function() {
    $("share__tile").hover(
        function() {
            $(".share__title--current").html("Hello!");
        },
        function() {
            $(".share__title--current").html("");
        }
    );
});