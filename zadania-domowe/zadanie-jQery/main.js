'use strict';

$(document).ready(function () {

    $('#count-sum').click(function () {
        var wyplaty = 0;
        $('.salary').each(function (index, element) {
            wyplaty += parseInt($(this).text());
        });
        $('#sum').text(wyplaty);
    });
});