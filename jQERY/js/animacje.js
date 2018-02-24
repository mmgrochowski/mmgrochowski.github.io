'use strict'

$(document).ready(function () {
    sumaWyplat();
})

function sumaWyplat() {
    var sumowanie = 0;
    $("#count-sum").click(function () {
            $(".salary").each(function () {
                sumowanie += parseInt($(this).text());
                return sumowanie;
            })
        $("#sum").text(sumowanie);
        })
        
    
}

//
//$(function () {
//    //   $("#first").hide(1000).show(1000);
//    //   $("#first").fadeOut(1000).fadeIn(1000);
//    //   $("#first").slideUp(1000).slideDown(1000);
//    //    
//
//    function callbackZwrotny() {
//        $("#first").animate({
//            "font-size": "1em",
//            "margin-left": "0px"
//        }, 3000);
//
//        console.log("animacja jest super");
//
//
//
//    };
//
//    callbackZwrotny();
//    
//    $("#first").animate({
//        "font-size": "54px",
//        "margin-left": "250px"
//    }, 3000, callbackZwrotny);
//});
//
//
//
//$(document).ready(function() {
//  animacja();
//});
//
//
//function animacja() {
//    $("button").click(function () {
//        $("#kwadrat").animate({
//            width: '100px',
//            height: '100px',
//            left: '100px',
//        }, 3000, function () {
//            $("#kwadrat").animate({
//                'backgroundColor': 'blue'
//            }, 5000, function () {
//                $("p").animate({
//                    opacity: '1'
//                });
//            });
//        });
//    });
//};