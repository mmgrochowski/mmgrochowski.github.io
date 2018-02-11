//var liczba = 15.5;
//var text = "dane textowe";
//var prawda = true;

//console.log(typeof liczba );
//console.log(typeof text );
//console.log(typeof prawda );


//typ bulean

var czyJestSmog = false;

if(czyJestSmog) {
    console.log("Jest smog");
    }
else{
    console.log("nie ma smogu");
}

//typ number

var pensja = 4500;
var premia = 5;

var calkowitaPensja = (pensja * (premia / 100)) + pensja ;
console.log(calkowitaPensja);

//typ string

var pensjaString = "4500";
var premiaString = "1200";

var calkowitaPensjaString = pensjaString + "\n" + premiaString;
console.log(calkowitaPensjaString);


// typy specjalne

var zmiennaBezWartosci;
console.log(zmiennaBezWartosci);

//console.log(zmiennaKtoraNieIstnieje);

var zmiennaNull = null;
console.log(zmiennaNull);
