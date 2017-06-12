function slepti () {
    document.getElementById('demo').style.display = 'none';
}
function rodyti () {
    document.getElementById('demo').style.display = 'block';
}

var arPasleptas = false;

function sleptiRodyti() {
    if (arPasleptas) {
        rodyti();
    } else {
        slepti();
    }
    arPasleptas = !arPasleptas;
}

