const button = document.getElementById('Calculonotas');

button.addEventListener('click', calcularnotas);

function calcularnotas(){

    const calificacion = Number(document.getElementById('calificaciones').value);

    let imprimir = document.getElementById('notascalificativas');

    let divimprimir;

    if(calificacion >= 0 && calificacion <= 5){
       
        divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>La calificación: ${calificacion} es "F"</p></div>`;

    }else if(calificacion >=6 && calificacion<=7){
        
        divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>La calificación: ${calificacion} es "D"</p></div>`;

    }
    else if(calificacion == 8){

        divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>La calificación: ${calificacion} es "C"</p></div>`;
       

    }else if(calificacion == 9){

        divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>La calificación: ${calificacion} es "B"</p></div>`;
       
        
    }else if(calificacion == 10){
    
        divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>La calificación: ${calificacion} es "A"</p></div>`;

    }else{
        divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>Solo ingresa calificaciones del 0 al 10</p></div>`;
       
}
imprimir.innerHTML = divimprimir;
}