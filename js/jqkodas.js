$(document).ready(function() {

    $('#mygtukas').click(function () {
        $('.paveikslas').toggle();
    });

    $('#slepti').click(function () {
        $('.paveikslas').hide();
    });
    $('#rodyti').click(function () {
        $('.paveikslas').show();
    });

    $('#load').load('html_file.html');

});