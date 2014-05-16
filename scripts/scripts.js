/*******************************
 * $SHARING
 *******************************/
$(document).ready(function() {
    $(".share__tile").hover(
        function() {
            $(".share__title--current").html($(this).attr("data-service"));
        },
        function() {
            $(".share__title--current").html("");
        }
    );
});