const button = document.getElementById('btncalcular');

button.addEventListener('click', calcularrecorridos);

function calcularrecorridos(){

    const estados1 = document.getElementById('estados').value;
    const Recorridoida1= Number(document.getElementById('recorrido1').value);
    const RecorridoRegreso1 = Number(document.getElementById('recorrido4').value);
    const Recorridoida2= Number(document.getElementById('recorrido2').value);
    const RecorridoRegreso2 = Number(document.getElementById('recorrido5').value);
    const Recorridoida3= Number(document.getElementById('recorrido3').value);
    const RecorridoRegreso3 = Number(document.getElementById('recorrido6').value);
    const Recorridoida4= Number(document.getElementById('recorrido7').value);
    const RecorridoRegreso4 = Number(document.getElementById('recorrido8').value);

    
    let imprimir = document.getElementById('imprimirrecorridos');

    let divimprimir, totalcosto;

    if(estados1 == '1'){

        totalcosto = (Recorridoida1 * 750) + (RecorridoRegreso1 * 750);
        divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>El costo total para ir a México es: ${totalcosto}</p></div>`;
        

    }else if(estados1 == '2'){

        totalcosto = (Recorridoida2 * 800) + (RecorridoRegreso2 * 800);
        divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>El costo total para ir a P.V. es: ${totalcosto}</p></div>`;

    }
    else if(estados1 == '3'){

        totalcosto = (Recorridoida3 * 1200) + (RecorridoRegreso3 * 1200);
        divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>El costo total para ir a Acapulco es: ${totalcosto}</p></div>`;
    
    }

    else if(estados1 == 4){

        totalcosto = (Recorridoida4 * 1800) + (RecorridoRegreso4 * 1800);
        divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>El costo total para ir a Cancún es: ${totalcosto}</p></div>`;

    }
    else{
    divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>La opción es estar en casa</p></div>`
   
}

    imprimir.innerHTML = divimprimir;
}