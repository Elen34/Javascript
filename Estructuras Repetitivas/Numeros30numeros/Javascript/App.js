function eventlisted(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularnumeros);
}

eventlisted();

function calcularnumeros(){

    let contador = 0,contador2=0, acumulador=0, promediopares=0, sumaimpares=0;
    let divimprimir = document.getElementById('imprimir');
    divimprimir.innerHTML = '';

    for(let i=1; i<=30; i++){

        const numero = Number(prompt('Ingresa un numero'));

        if(numero > 0 && numero % 2 == 0){

            contador++;
            acumulador+=numero;
            promediopares = acumulador / contador;

        }
        else 
        {
            contador2 ++;
            sumaimpares += numero;
        }

        divimprimir.innerText = `El promedio de los numeros pares ${promediopares},
        La suma de los numeros impares ${sumaimpares}`; 

    }

}