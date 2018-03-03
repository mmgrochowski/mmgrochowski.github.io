'use strict';
//
//function ajax( method, url ) {
//var httpReq = new XMLHttpRequest();
//    httpReq.open( method, url );
//    httpReq.onreadystatechange = function() {
//        
//    if ( httpReq.readyState == 4 ) {
//            
//
//    if ( httpReq.status == 200 ) {
//                
//    var returnData = httpReq.responseText;
//
////     console.log(returnData);   
//     httpReq.onsuccess(returnData);
//                httpReq = null;
//                
//            }
//            
//        }
//    
//    }
//
//    httpReq.onsuccess = function (response) {
//        var jsonObj = JSON.parse(response);
//        console.log(jsonObj);
//        
//        var par1 = document.createElement('p');
//        var par2 = document.createElement('p');
//        var par3 = document.createElement('p');
//        
//        document.body.appendChild(par1);
//        document.body.appendChild(par2);
//        document.body.appendChild(par3);
//    
//        par1.innerText ='User Id = ' + jsonObj.userId;
//        par2.innerText ='User Name = ' + jsonObj.userName;
//        par3.innerHTML ='User URL = '  + jsonObj.userURL + '<p>--------------------------</p>';
//
//    } 
//
//   
//    httpReq.send();
//}
//
//
//
//
//
//
//// wywołujemy naszą funkcję ajax() :)    
//function PobierzDane() {
//ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );
//}
//
//document.getElementById('pobierz').addEventListener('click', PobierzDane);



$('#pobierz').click(function(){
$.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function( data ) {   
   $('body').append('<p>User Id = '+ data.userId + '</p>');
   $('body').append('<p>User Name = '+ data.userName + '</p>'); 
   $('body').append('<p>User URL = '+ data.userURL + '</p>'); 
   
});
})