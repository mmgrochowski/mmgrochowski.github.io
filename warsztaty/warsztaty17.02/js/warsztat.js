"use strict";
//
//Warsztat materiały 17-17.02
//
//function ustawTlo(){
//var allParagrphs = document.getElementsByTagName("p");
//allParagrphs[0].style.backgroundColor = 'red';
//allParagrphs[1].style.backgroundColor= 'yellow';   
//}
//var input= document;
//////////////////////////////////////////////////////////////////////////////////////
function pobierzImie(event) {
    event.preventDefault();
    
    var form = document.getElementById("formularz");
    
//    console.log(form);
    
    for (var i = 0; i < form.length; i++) {
        
        if (form.elements[i].value != 'Submit') {
            console.log(form.elements[i].value);
        }
        
    }
}
////////////////////////////////////////////////////////////////////////////////////////

