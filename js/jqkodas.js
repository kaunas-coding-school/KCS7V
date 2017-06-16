$(document).ready(function() {

    $('#opmygtukas').click(function(){
        console.log('Veikia');
        $( '#opa' ).fadeToggle(3000);
    });

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