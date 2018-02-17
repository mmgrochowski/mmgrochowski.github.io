"use strict";

var mainHeader = document.getElementById('main-header');// przypisujemy nagłówek do zmiennej

mainHeader.innerText= 'Treść nagłówka'; //dodajemy treść do nagłówka

//mainHeader.outerHTML= "<p>Treść nagłówka</p>"; //możemy zmieniać znaczniki

var link = document.getElementsByClassName('link')[0]; // przypisujemy link do !!!!pierwszej!!!! zmiennej, bez nawiasów bedą wszystkie

link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w linki

link.className = "nowa-klasa"; // nadpisuje nazwę kalsy linku

link.classList.add("nowa-klasa-dodana");//dodajemy kolejną klasę

link.style.color = "red"; // zmienia kolor czcionki
