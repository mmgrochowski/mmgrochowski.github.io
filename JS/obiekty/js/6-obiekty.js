var osoba = {
    imie: "adam",
    nazwisko: "nowacki",
    wzrost: 182,
    
    wyswietlSzczegoly: function( paramImie ){
        
        this.imie = paramImie;
        console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);
console.log(osoba["nazwisko"]);

osoba.wyswietlSzczegoly("Ela");

//tworzenie funkcji OBIEKTU OSOBA

//var osoba = {
    //imie: "adam",
    //nazwisko: "nowacki",
    //wzrost: 182,
    
    //wyswietlSzczegoly: function(){
        
    //    console.log( "Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
  //  }
//}

//console.log(osoba.imie);
//console.log(osoba["nazwisko"]);

//osoba.wyswietlSzczegoly();


//dodawanie właściwości

osoba.wiek= 39;
osoba.wyswietlWiek = function(){
    console.log(this.wiek);
}
osoba.wyswietlWiek();