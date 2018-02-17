"use strict";
////
////var secondLink = document.getElementsByTagName('a')[1];// tworzymy zmienna z drugin linkiem
////
//function alarm(e){
//    e.preventDefault(); //zapobiegamy domyślnej akcji
//    console.log('kliknieto kolejny link');
//    thirdLink.style.backgroundColor = "red";
//    console.log(e.type);
//    
//}
////
////secondLink.onclick = alarm;  //wywołujemy funkcje alarm() na drugin linku po kliknieciu
//
//
//var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z 3 linkiem
//
//thirdLink.addEventListener("click", alarm);
//
//
//thirdLink.removeEventListener("click" alarm);

//powiekszanie napisu po najechaniu

var mainHeader = document.getElementById('main-header');
//przypisujemy nagłówka do zmiennej

//function resize(e){ //przekazujemy zdarzenie jako paramert funkcji
//    if (e.type == 'mouseover' ){ //sprawdzamy typ zdarzenia
//        mainHeader.style.fontSize = "70px"; //zmień wielkość po najechaniu 
//    } else{
//        mainHeader.style.fontSize = "inherit"; //przywróci domyślną wartość
//    }
//    }
//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;

//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;


document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikHeader(){
    console.log('kliknąłeś w header');
    
}


function klikH1(){
    //e.stopPropagation();
    console.log("kliknąłeś w h1")
    };
document.getElementsByTagName('h1')[0].onclick = klikH1;


