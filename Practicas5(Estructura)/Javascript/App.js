function evenListener(){

const button = document.getElementById('Compararnumeros');
button.addEventListener('click', calcularcomparacion);

}

evenListener();


function calcularcomparacion(){

    const cantidades = Number(prompt('¿Cuantos numeros vas a evaluar?'));

    let acumuladorMenores = 0;
    let acumuladorMayores = 0;
    let imprimir = document.getElementById('Imprimirnumeros');

    for(let x=0; x<cantidades; x++){

        let Numero = Number(prompt('Numero a evaluar'));

        if(Numero <= 0){
            acumuladorMenores++;

        } else{

            acumuladorMayores++;
        }
    }

      imprimir.innerText = `Los numeros menores son: ${acumuladorMenores} y los numeros mayores son ${acumuladorMayores}`;  

}