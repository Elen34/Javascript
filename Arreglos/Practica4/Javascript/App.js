let ArregloNumeroAleatorios = [];
let borrar = document.getElementById('borrar');

function EventListener(){

    document
    .getElementById('tamanoarray')
    .addEventListener('keypress', crearinput); 
    // estamos agregando un evento a un input

    document
    .getElementById('ReiniciarApp')
    .addEventListener('click', cargarapp);
}

function cargarapp(){

    window.location.reload();
}


EventListener();
//evento keypress

function crearinput(event){ //el parametro event viene del eventlistened

    if(event.key == "Enter"){

        //Si isNan es igual a true quiere decir que no es un numero, if isNaN es falso, es un numero
        //target da la info del input
        
        if(isNaN(event.target.value)) return; 
        
        RellenarArreglos(Number(event.target.value));
        
    }

}

function RellenarArreglos(tamanoArray){
    
    
    for(let i=0; i<tamanoArray; i++){

        ArregloNumeroAleatorios[i] = Math.floor(Math.random()*(10-1) + 1);  
    }
    MostrarValores(ArregloNumeroAleatorios);
   
  }

  function MostrarValores(ArregloLleno){

    let listaimprimir = document.getElementById('Mostrarlista');
    let sumaarreglo = document.getElementById('imprimirsuma');
    let suma = 0;

    const listado = document.createElement('li');
    listado.setAttribute('class', 'list-group-item mt-2');

    for(let i=0; i<ArregloLleno.length; i++){

            listado.innerText = ArregloLleno;
            listaimprimir.appendChild(listado);

            suma += ArregloLleno[i];
    }

    sumaarreglo.innerText = `La suma de los números son: ${suma}`;

  }
