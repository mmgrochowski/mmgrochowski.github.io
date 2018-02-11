//var kolorStronyMojejInternetowej;
// zasada camelCase

var imie = "Marcin";
var nazwisko = "Grochowski";
var wiek = "30";
var wzrost;

var wynik = "Imie: " + imie + " Nazwisko: " + nazwisko + " Wiek: " + wiek;
console.log(imie);
console.log(nazwisko);
console.log(wiek);
console.log(wynik);


// zmienna globalna jest widoczna wszędzie
//zmienna lokalna widoczna tylko funkcji
var zmienna1 = "adam";

function zmiennaLokalna() {
    var zmienna1= "zmiennaLokalna adam" //zmienna widoczna tylko w funkcji
    var zmienna2= "zmienna lokalna widoczna tylko w funkcji"
console.log(zmienna2);
    }
wyświetli tylko zmienna

console.log(zmienna); //niewidoczne
