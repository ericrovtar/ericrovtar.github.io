/*******************************
 * $SHARING
 *******************************/
$(document).ready(function() {
    //Setup hover effect
    $(".share__tile").hover(
        function() {
            $(".share__title--current").html($(this).attr("data-service"));
        },
        function() {
            $(".share__title--current").html("");
        }
    );
    
    //Setup click event
    $(".share__tile").click(function() {
        //Setup variables
        var shareUrl;
        var width;
        var height;
        var windowName;
        
        var service = $(this).attr("data-service");
        
        switch (service)
        {
                case "Facebook":
                    width = 626;
                    height = 436;
                    windowName = "FacebookShare";
                
                    shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" +
                        location.href;
                    break;
                case "Twitter":
                    width = 550;
                    height = 520;
                    windowName = "TwitterShare";

                    shareUrl = "https://twitter.com/share?url=" +
                        location.href;
                    break;
                case "Google+":
                    width = 840;
                    height = 464;
                    windowName = "GoogleShare";

                    shareUrl = "https://plus.google.com/share?url=" +
                        location.href;
                    break;
                case "Tumblr":
                    width = 450;
                    height = 430;
                    windowName = "TumblrShare";
                
                    shareUrl = "http://www.tumblr.com/share/link?url=" +
                        location.href;
                    break;
                case "Pinterest":
                    width = 450;
                    height = 430;
                    windowName = "PinterestShare";
                
                    shareUrl = "http://pinterest.com/pin/create/button/?url=" +
                        location.href +
                        "&media=" + $("meta[property='og:image']").attr("content");
                    break;
                case "Reddit":
                    width = 840;
                    height = 464;
                    windowName = "RedditShare";
                
                    shareUrl = "http://www.reddit.com/submit?url=" +
                        location.href;
                    break;
        }
        
        window.open(encodeURIComponent(shareUrl), windowName, "width=" + width + "," + "height=" + height);
        return false;
    });
});