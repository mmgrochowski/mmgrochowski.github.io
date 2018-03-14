  'use strict';



  $('#pobierz').click(function () {
      $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
          $('body').append('<div>Imie = ' + data.imie + '<br>' + ' Nazwisko = ' + data.nazwisko + '<br>' + ' Zawód = ' + data.zawod + '<br>' + ' Firma = ' + data.firma + '</div>');
          
          $("div").addClass("dane-programisty");
      });
  });