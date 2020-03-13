let contadorInput = 0;
let ArregloPromedio = [];

function EventListener(){

    document.addEventListener('DOMContentLoaded', AddEvents);
}

EventListener();

//AddEvents nos aseguramos que cuando cargue la pagina html, comienza la app y los eventos

function AddEvents(){

    document.getElementById('AddInputs').addEventListener('click', AddInput);
    document.getElementById('CalcularPromedio').addEventListener('click', CalcularPromedio);

}

function AddInput(){

    const output = document.getElementById('output');

    const divCol = document.createElement('div');

    divCol.setAttribute('class', 'col-12');

    const divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = `Ingrese la calificación ${contadorInput + 1}:`;

    const inputFG = document.createElement('input');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('type', 'number');
    inputFG.setAttribute('placeholder', 'Ingrese valor');
    inputFG.setAttribute('id', `Inputpromedio${contadorInput}`);

    contadorInput++;

    output.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(inputFG);   

}

function CalcularPromedio(){

    llenarArray();
    let acumulador = 0;
    const imprimir = document.getElementById('imprimir');

    for(let i=0; i<contadorInput; i++){
        acumulador += ArregloPromedio[i];

    }
    acumulador /= contadorInput;
    imprimir.innerText = `El promedio de los numeros es: ${acumulador}`;   
     
}

function llenarArray(){

    for(let x=0; x<contadorInput; x++){
            
            const valor = document.getElementById(`Inputpromedio${x}`).value; 
            
            //PREGUNTA SI LO QUE INGRESAS ES UN NUMERO, necesitas negar para que ingrese la opcion true
            if(!isNaN(valor)){

            ArregloPromedio[x] = Number(valor); 
        }else{

            ArregloPromedio[x] = 0;
            }
        }
    }
