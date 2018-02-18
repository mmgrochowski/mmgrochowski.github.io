'use strict';
$(function(){
    
//    $("body").find("p.paragraf").css({"background-color": "red" });
//    
    
//    var paragrafy = $(".paragraf");
//    paragrafy.css({"background-color": "red" })
//    console.log(paragrafy);
    $(".paragraf").each(function(index, element){
        if(index !=0){
            $(this).css("background-color", "green");
        }
        console.log("Element: "+ element, index);
    });
    
    
   
});