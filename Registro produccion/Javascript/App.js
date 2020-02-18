const button = document.getElementById('Calcularincentivo');

button.addEventListener('click', calculoproduccion)

function calculoproduccion(){

    let registro1 = Number(document.getElementById('unproduLunes').value);
    let registro2 = Number(document.getElementById('unproduMartes').value);
    let registro3 = Number(document.getElementById('unproduMiercoles').value);
    let registro4 = Number(document.getElementById('unproduJueves').value);
    let registro5 = Number(document.getElementById('unproduVienes').value);
    let registro6 = Number(document.getElementById('unproduSabado').value);

    let imprimir = document.getElementById('imprimirincentivo');

    let sumaprodu = (registro1 + registro2 + registro3 + registro4 + registro5 + registro6); 

    if(sumaprodu>=100){
        imprimir.innerText = "Recibira incentivos";
    }
    else{
        imprimir.innerText = "No recibira incentivos";
    }   
}