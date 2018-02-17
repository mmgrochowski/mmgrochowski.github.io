"use strict";
var istniejacyWezel= document.getElementById('parFirst').children[3];


var newElement = document.createElement('p');

//console.log(newElement);

var newElementContent = document.createTextNode('to jest nowy paragraf');// stwórz text dla elementu

newElement.appendChild(newElementContent);//podpinamy text do elementu

//console.log(newElement);

istniejacyWezel.appendChild(newElement);//podpinamy do wezła

//istniejacyWezel.removeChild(newElement); //usuwamy dodany element

//var parFirstDiv = document.getElementById('parFirst');
//parFirstDiv.replaceChild(newElement, istniejacyWezel);//zamienia drugi link na paragraf


var allLinks = document.querySelectorAll('a'); // przypisz do zmiennej tablice

console.log(allLinks);

var allLinks = document.getElementsByTagName("a");

//array.form("NodeList");

for(var i = 0; i < allLinks.length; i++){
    
    var br = document.createElement('br');
    
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);//dodaje element po każdym linku
    
    allLinks[i].removeAttribute('class'); //usuń atrybut klasy
    
}


















