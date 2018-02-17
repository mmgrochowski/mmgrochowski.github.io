var jsonPracownicy={
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}


jsonPracownicy.pracownicy.forEach(function(element,index){
  console.log(index + element.firstName +element.lastName);
  console.log(element.firstName);
  console.log(element.lastName);
  
});


//var jsonOsoby={
//    "osoby" : [
//        {
//            imie: "Adam",
//            nazwisko: "nowacki",
//            wzrost: 180,
//            zainteresowania: [
//                {nazwa: "podroze"},
//                {nazwa: "sport"},
//                
//            ]
//        },
//        {imie: "Marcin",
//        nazwisko: "konwacki",
//        wzrost: 180,
//        zainteresowania: [
//                {nazwa: "szachy"},
//                {nazwa: "motoryzacja"},
//            
//            ]
//        }
//    ]
//}
//
////console.log(jsonOsoby);
//
//jsonOsoby.osoby.forEach;(function(element, index){
//    console.log(element);
//    console.log(element.imie );
//    console.log(element.nazwisko );
//    console.log(element.wzrost );
//    console.log(element.zainteresowania );
//
//    element.zainteresowania.forEach(function(z, ind){
//        console.log( z );
//        
//    })
//    
//});
//
