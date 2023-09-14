function menosW(){
    var mm = document.getElementById('mm').value;
    if (mm > 1){
        mm--;
    }
    document.getElementById('mm').value = mm;
    recargarImagen();
}

function masW(){
    var mm = document.getElementById('mm').value;
    if (mm < 3){
        mm++;
    }
    document.getElementById('mm').value = mm;
    console.log(mm);
    recargarImagen();
}

function recargarImagen(){
    if()
}