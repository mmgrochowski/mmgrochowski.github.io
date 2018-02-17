var tabela =  [1,2,3,4,5,6];
function sumaIloczynElementow(tabela){
    var suma = 0;
    var iloczyn = 1;
    for (i = 0; i< tabela.length; i++){
        suma += tabela[i];
        iloczyn*= tabela[i];
    }
    console.log("Suma elementów tablicy =  " + suma);
    console.log("Iloczyn elemantów tablicy =  " +iloczyn);
}
sumaIloczynElementow(tabela);











//function obliczWynik() {
//    var wynik = 10 * 15 * 20;
//    return wynik;
//}
//
//var wynikObliczenia = obliczWynik();
////console.log(wynikObliczenia)
//
//
////
////
//
//function obliczWynik(paramert1, paramert2, paramert3) {
//    var wynik = paramert1 * paramert2 * paramert3;
//    return wynik;
//}
//
//var wynikObliczenia = obliczWynik(20, 10, 3);
//console.log(wynikObliczenia);
//
//var wynikObliczenia2 = obliczWynik(10, 15, 4);
//console.log(wynikObliczenia2);
//
//var wynikObliczenia3 = obliczWynik(30, 10, 5);
//console.log(wynikObliczenia3);
 

