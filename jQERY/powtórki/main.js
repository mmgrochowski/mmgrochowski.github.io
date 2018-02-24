'use strict';
 
var tekst = 'jakiś tekst';

//tworznie znacznika

var paragraf = document.createElement('p');

document.getElementById('kontener').appendChild(paragraf);

//paragraf.appendChild(tekst);
paragraf.innerHTML = tekst;

//pobieranie tekstu
console.log(document.getElementById('string').innerText);

//tworzymy paragraf
var paragraf2 = document.createElement('p');

//dodajemy do html
document.body.appendChild(paragraf2);

//dodajemy treść do paragrafu
paragraf2.innerHTML = document.getElementById('string').innerHTML;

