// let acumulador = 0;

// for(let valorinicial=1; valorinicial <= 10; valorinicial++){

//     let NumeroIngresado = Number(prompt('Ingresa el numero')); 
    
   
//     acumulador= acumulador + NumeroIngresado;
    
// }

// const Zonaprint = document.getElementById('output');

// Zonaprint.innerText = acumulador;

// crear un html por codigo


let button; // variable global

function crearDom(){

    const output = document.getElementById('output'); //imprimir jumbotron// variable local

    // const h1 = document.createElement('h1');
    // h1 = innerText = "Suma de 10 numeros";
    // h1.setAttribute('class', 'text-center');
    // output.appendChild(h1);

    for(let x=1; x<=5; x++){

        const div = document.createElement('div'); // crear un elemento div
        div.classList.add('form-group') ; // agregar una clase por codigo

        const label = document.createElement('label'); // crear el elemento label
        label.innerText = `Ingresa el numero: ${x}`; 

        const input = document.createElement('input');
        input.setAttribute('type', 'number'); //Definir atributos de una etiqueta
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `inpNumero${x}`);
        input.setAttribute('placeholder', 'Digita un numero');

        output.appendChild(div); // se utiliza para colocar las etiquetas dentro del jumbotron
        div.appendChild(label);  // se utiliza para colocar las etiquetas dentro del div
        div.appendChild(input);  // se utiliza para colocar las etiquetas dentro del div
        
    }

    // Crear el boton
    const button = document.createElement('button');
    button.innerText = 'Calcular Suma';
    button.setAttribute('id', 'btnCalcularSuma');
    button.setAttribute('class', 'btn btn-outline-success btn-block');

    output.appendChild(button);

    addEventListener();
}

//Se tiene que crear una funcion para despues agregar un evento
function addEventListener(){

    button = document.getElementById('btnCalcularSuma');

    button.addEventListener('click', suma);
}

function suma(){

    let acumulador = 0;

    for(let i=1; i<=5; i++){

        let numero = Number(document.getElementById(`inpNumero${i}`).value);
        acumulador = acumulador + numero;
       
    }

    console.log(acumulador);
}

crearDom();  // llamar a una funcion