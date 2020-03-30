const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Horas del empleado trabajadas');
cuadro.appendChild(Titulo);

const button = document.createElement('button');
button.innerText = 'Mostrar Series';
button.setAttribute('id', 'Mostarseries');
button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
cuadro.appendChild(button);

const listado = document.createElement('ul');
listado.setAttribute('class', 'list-group mt-3');
cuadro.appendChild(listado);

function eventlisted(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularnumeros);
}

eventlisted();

function calcularnumeros(){

    let contador = 0,contador2=0, acumulador=0, promediopares=0, sumaimpares=0;
    listado.innerHTML = '';

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

        listado.innerText = `El promedio de los numeros pares ${promediopares},
        La suma de los numeros impares ${sumaimpares}`; 

    }

}