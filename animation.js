$(document).ready(function(){
    $(".scroll-wrapper").hide();
    window.onscroll = function () {
        if($(window).scrollTop() > 300 ){
            $(".scroll-wrapper").show(200);
        }else{
            $(".scroll-wrapper").hide(200);
        }
    }
    $(".scroll-wrapper").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        // $(".scroll-wrapper").hide(200);
        return false;
    });

});

