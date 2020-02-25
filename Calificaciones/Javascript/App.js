const button = document.getElementById('Calcularprom');

button.addEventListener('click', calcularpromedio);

function calcularpromedio(){

const Calificacion1 = Number(document.getElementById('cal1').value);
const Calificacion2 = Number(document.getElementById('cal2').value);
const Calificacion3 = Number(document.getElementById('cal3').value);
const Calificacion4 = Number(document.getElementById('cal4').value);

let imprimirmenor = document.getElementById('imprimirmenor');
let imprimirpromedio = document.getElementById('promedio');

let divimprimir, calmenor, promedio1;

if((Calificacion1 < Calificacion2) && (Calificacion1 < Calificacion3) && (Calificacion1 < Calificacion4)){

     calmenor = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);
     promedio1 = (Calificacion2 + Calificacion3 + Calificacion4) / 3;

    divimprimir1 = `<div class="alert alert-info" role="alert"><p>El promedio de las notas mas altas son: ${promedio1}</p></div>`;

    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>La calificacion menor es: ${calmenor}</p></div>`;

} else if((Calificacion2 < Calificacion1) && (Calificacion2 < Calificacion3) && (Calificacion2 < Calificacion4)){
    
    calmenor = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);

    promedio1 = (Calificacion1 + Calificacion3 + Calificacion4) / 3;

    divimprimir1 = `<div class="alert alert-info" role="alert"><p>El promedio de las notas mas altas son: ${promedio1}</p></div>`;

    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>La calificacion menor es: ${calmenor}</p></div>`;
 

} else if((Calificacion3 < Calificacion1) && (Calificacion3 < Calificacion2) && (Calificacion3 < Calificacion4)){

    calmenor = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);

    promedio1 = (Calificacion1 + Calificacion2 + Calificacion4) / 3;

    divimprimir1 = `<div class="alert alert-info" role="alert"><p>El promedio de las notas mas altas son: ${promedio1}</p></div>`;

    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>La calificacion menor es: ${calmenor}</p></div>`;
 

} else if((Calificacion4 < Calificacion1) && (Calificacion4 < Calificacion2) &&  (Calificacion4 < Calificacion3)){
    
    calmenor = Math.min(Calificacion1, Calificacion2, Calificacion3, Calificacion4);

    promedio1 = (Calificacion1 + Calificacion2 + Calificacion3) / 3;

    divimprimir1 = `<div class="alert alert-info" role="alert"><p>El promedio de las notas mas altas son: ${promedio1}</p></div>`;

    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>La calificacion menor es: ${calmenor}</p></div>`;
}
else {

     divimprimir= `<div class="alert alert-info mt-3" role="alert"><p>Imprimir solo numeros del 1 al 10</p></div>`;
}

imprimirmenor.innerHTML = divimprimir;
imprimirpromedio.innerHTML = divimprimir1;

}
