'use strict';


function ajax( method, url ) {
var httpReq = new XMLHttpRequest();   
    httpReq.open( method, url );
   httpReq.onreadystatechange = function() {
        
    if ( httpReq.readyState == 4 ) {
            

    if ( httpReq.status == 200 ) {
                
    var returnData = httpReq.responseText;

//     console.log(returnData);   
     httpReq.onsuccess(returnData);
                httpReq = null;
                
            }
            
        }
    
    }

    httpReq.onsuccess = function (response) {
        
        var jsonArray = JSON.parse(response);
        //console.log(jsonArray);
        
        var beginOfData = document.createElement('p');
        var endOfData = document.createElement('p');
       
        beginOfData.innerHTML = '<br> -----Begin of data--------<br>'
        endOfData.innerHTML = '<br> -----End of data--------<br>'
        
        document.body.appendChild(beginOfData);
        jsonArray.forEach(function(element, index){
            var userId = document.createElement('p');
            var userName = document.createElement('p');
            var userURL = document.createElement('p');
            
            userId.innerHTML ='User Id = ' + element.id;
            userName.innerHTML ='User Name = ' + element.name;
            userURL.innerHTML ='User URL = ' + element.email + '<br>---------------' ;
            
            document.body.appendChild(userId);
            document.body.appendChild(userName);
            document.body.appendChild(userURL);
            
        });
        document.body.appendChild(endOfData);
    } 

   
    httpReq.send();
}






// wywołujemy naszą funkcję ajax() :)    

//ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/ akademia108.pl" );




window.addEventListener('scroll', function(){
   
    var docHeight = document.documentElement.offsetHeight; //1002 wysokość okna
    var offsetY = parseInt(this.innerHeight + this.pageYOffset, 10);// ilość przeskrolowanych + wysokośc okna
   
    if( offsetY === docHeight ){
       ajax( "GET", "https://jsonplaceholder.typicode.com/users" );
  
   }
});
