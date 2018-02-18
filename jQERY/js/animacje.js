'use strict';

$(function () {
    //   $("#first").hide(1000).show(1000);
    //   $("#first").fadeOut(1000).fadeIn(1000);
    //   $("#first").slideUp(1000).slideDown(1000);
    //    

    function callbackZwrotny() {
        $("#first").animate({
            "font-size": "1em",
            "margin-left": "0px"
        }, 3000);

        console.log("animacja jest super");



    };

    callbackZwrotny();
    
    $("#first").animate({
        "font-size": "54px",
        "margin-left": "250px"
    }, 3000, callbackZwrotny);







});