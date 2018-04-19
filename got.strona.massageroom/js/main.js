'use strict';


function start() {
    document.getElementById("start").style.display = "block";
    document.getElementById("relaksacyjny").style.display = "none";
    document.getElementById("leczniczy").style.display ="none" ;
    document.getElementById("omnie").style.display = "none";
    document.getElementById("cennik").style.display = "none";
    document.getElementById("kontakt").style.display = "none" ;
}
function relaksacyjny() {
    document.getElementById("start").style.display = "none";
    document.getElementById("relaksacyjny").style.display = "block";
    document.getElementById("leczniczy").style.display = "none";
    document.getElementById("omnie").style.display = "none";
    document.getElementById("cennik").style.display = "none";
    document.getElementById("kontakt").style.display = "none" ;
}
function leczniczy() {
    document.getElementById("start").style.display = "none";
    document.getElementById("relaksacyjny").style.display = "none";
    document.getElementById("leczniczy").style.display = "block";
    document.getElementById("omnie").style.display = "none";
    document.getElementById("cennik").style.display = "none";
    document.getElementById("kontakt").style.display = "none" ;
}
function omnie() {
    document.getElementById("start").style.display = "none";
    document.getElementById("relaksacyjny").style.display = "none";
    document.getElementById("leczniczy").style.display = "none";
    document.getElementById("omnie").style.display = "block";
    document.getElementById("cennik").style.display = "none";
    document.getElementById("kontakt").style.display = "none" ;
}
function cennik() {
    document.getElementById("start").style.display = "none";
    document.getElementById("relaksacyjny").style.display = "none";
    document.getElementById("leczniczy").style.display = "none";
    document.getElementById("omnie").style.display = "none";
    document.getElementById("cennik").style.display = "block";
    document.getElementById("kontakt").style.display = "none" ;
}
function kontakt() {
    document.getElementById("start").style.display = "none";
    document.getElementById("relaksacyjny").style.display = "none";
    document.getElementById("leczniczy").style.display = "none";
    document.getElementById("omnie").style.display = "none";
    document.getElementById("cennik").style.display = "none";
    document.getElementById("kontakt").style.display = "block" ;
}