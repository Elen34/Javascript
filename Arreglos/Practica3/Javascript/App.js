const output = document.getElementById('output');

function EventListener(){

    document.getElementById('MostrarInput').addEventListener('click', MostrarInputs);
}

EventListener();

function MostrarInputs(){
    const NumeroInputs = Number(document.getElementById('NumeroInputs').value);

    if(NumeroInputs > 1000 || NumeroInputs <= 0) return; //No ingresar todos los numero
    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

        for(let i=0; i<NumeroInputs; i++){

            const DivCol = document.createElement('div');
            DivCol.setAttribute('class', 'col-12 mt-3');
            
            const divFG = document.createElement('div');
            divFG.setAttribute('class', 'form-group');

            const label = document.createElement('label');
            label.innerText = `Ingresa el número a guardar en el arreglo:`;

            const inputFG = document.createElement('input');
            inputFG.setAttribute('class', ' form-control');
            inputFG.setAttribute('id', `ValorInput{i)`);
            inputFG.setAttribute('type', 'number');
            inputFG.setAttribute('placeholder', 'Ingresa el número a guardar en el arreglo');

            row.appendChild(DivCol);
            DivCol.appendChild(divFG);
            divFG.appendChild(label);
            divFG.appendChild(inputFG);
        }

        output.appendChild(row);

        const buttonObtenerResultado = document.createElement('button');
        buttonObtenerResultado.setAttribute('class', ' btn btn-outline-success btn-block');
        buttonObtenerResultado.setAttribute('id', 'BtnCalcularResultado');
        buttonObtenerResultado.innerText = "Calcular Resultado";

        row.appendChild(buttonObtenerResultado);

        document.getElementById('BtnCalcularResultado').addEventListener('click', RealizarComparacion);
    }

    function RealizarComparacion(){

        let acumulador=0;
        const NumeroInputs = document.getElementsByTagName('input'); //muestra las etiquetas
 
        for(let x=0; x<NumeroInputs.length; x++){

            for(let y=x+1; y<NumeroInputs.length; y++){
                if(NumeroInputs[x].value == NumeroInputs[y].value){
                    NumeroInputs[y].value = "";
                }

            }
            acumulador += Number(NumeroInputs[x].value); //value para no concatenar el valor

        }

        MostrarDatos(NumeroInputs);
    }

    function EliminarElementos(){

        while(output.firstChild){

            output.firstChild.remove();
        }
    }

function MostrarDatos(NumeroInputsArreglo){

    let contador = '';
    let divimprimir = document.getElementById('imprimir');

    for(let x=0; x < NumeroInputsArreglo.length; x++){

        if(NumeroInputsArreglo[x].value != ""){

            contador += ` ${NumeroInputsArreglo[x].value} `;  
         
        }

    }
    const listado = document.createElement('li');
    listado.setAttribute('class', 'list-group-item');
    listado.innerText = contador;
    divimprimir.appendChild(listado);
}