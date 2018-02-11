class Ogloszenie {
    constructor(tytul, opis, kontakt, cena){
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    wyswietlOgloszenie(){
        console.log("Ogłoszenie! Tytuł; " + this.tytul + "Opis" + this.opis + "kontkat" + this.kontakt + "cena" + this.cena);
        
    }
}

var ogloszenie1 = new Ogloszenie("Szprzedam Opla", "Prosto od 80letniego Niemca", "999-000-999", 16000);

ogloszenie1.wyswietlOgloszenie();

var ogloszenie2 = new Ogloszenie( " Sprzedam Psa ", " Szczeniak ", " mały ", " 555-666-555 ", 120);

ogloszenie2.wyswietlOgloszenie();