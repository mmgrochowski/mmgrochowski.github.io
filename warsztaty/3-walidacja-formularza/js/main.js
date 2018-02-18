'use strict';

var wszystkieZgody = document.getElementById("wszystkie-zgody");
console.log(wszystkieZgody);

var zgoda1 = document.getElementById("zgoda-marketingowa-1");
var zgoda2 = document.getElementById("zgoda-marketingowa-2");

var wszystkieCheckBoxy = document.querySelectorAll('input[type=checkbox]');
console.log(wszystkieCheckBoxy);

var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");

var wyslijBTN = document.getElementById("wyslij");

var wiadomosc = document.getElementById("wiadomosc");


function stanCheckboxa() {
    zgoda1.checked = this.checked;
    zgoda2.checked = this.checked;

    zgoda1.disabled = this.checked;
    zgoda2.disabled = this.checked;
console.log(zgoda1.disabled);
}


wszystkieZgody.onchange = stanCheckboxa;
