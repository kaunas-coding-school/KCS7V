function keisti(elem) {
    sleptiVisusLapus();
    var sheet = elem.getAttribute('data-lapas');
    document.getElementById(sheet).style.display = "block";
}
function sleptiVisusLapus () {
    var lapai = document.getElementsByClassName('sheet');
    for (var i = 0; i < lapai.length; i++) {
        lapai[i].style.display = 'none';
    }
}




document.getElementById("MyElement").classList.add('MyClass');
document.getElementById("MyElement").classList.remove('MyClass');