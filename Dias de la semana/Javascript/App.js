const button = document.getElementById('calculardiasem');

button.addEventListener('click', calculardias);

function calculardias(){

    const diasdelasemana1 = document.getElementById('diasdelasemana').value;
    let imprimir = document.getElementById('imprimirdia');
    let divimprimir;

    if(diasdelasemana1 == '1'){
        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Lunes</p></div>`;
        
    }else if(diasdelasemana1 == '2'){

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Martes</p></div>`;

    } else if(diasdelasemana1 == '3'){

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Miercoles</p></div>`;

    } else if(diasdelasemana1 == '4'){

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Jueves</p></div>`;

    }else if(diasdelasemana1 == '5'){

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Viernes</p></div>`;

    } else if(diasdelasemana1 == '6'){

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Sabado</p></div>`;

    }else if(diasdelasemana1 == '7'){

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>El dia de la semana es: Domingo</p></div>`;
    
    }else {

        divimprimir = `<div class="alert alert-primary mt-3" role="alert"> <p>No seleccionaste ningun dia de la semana</p></div>`;
       
    }
    imprimir.innerHTML = divimprimir;
}
