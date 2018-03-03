'use strict';


function porownanie(){


var buyArrow = $('#buy-arrow');
var currentBuyPrice = parseFloat($('#buy').html());

var sellArrow = $('#sell-arrow');
var currentSellPrice = parseFloat($('#sell').html());

$.getJSON("https://blockchain.info/pl/ticker", function( data ) {   
//  console.log(data);
//    console.log(data.PLN.buy);
//    console.log(data.PLN.sell);
    $('#buy').html( data.PLN.buy );
    $('#sell').html( data.PLN.sell );
    
    
    if(currentBuyPrice > parseFloat(data.PLN.buy)){
        buyArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
        buyArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        buyArrow.removeAttr('class').addClass('fa fa-minus-sqare-o');
    }
               
     if(currentSellPrice > parseFloat(data.PLN.sell)){
        sellArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentSellPrice < parseFloat(data.PLN.sell)) {
        sellArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        sellArrow.removeAttr('class').addClass('fa fa-minus-sqare-o');
    }
});
console.log('odświezono');
}
porownanie ();

    
setInterval(porownanie, 5000);