const cuadro = document.getElementById('output');

const h1 = document.createElement('h1');
h1.setAttribute('class','text-center');
h1.innerText = "Fibonacci";
cuadro.appendChild(h1);

const ingresar = document.createElement('input');
ingresar.setAttribute('class','form-control mt-3');
ingresar.setAttribute('id', 'interacciones');
ingresar.setAttribute('placeholder','Digita el número de interacciones');
cuadro.appendChild(ingresar);

const boton = document.createElement('boton');
boton.setAttribute('class','btn btn-outline-success btn-block mt-3');
boton.setAttribute('id', 'btncalcular');
boton.innerText = "Calcular Fibonacci";
cuadro.appendChild(boton);

const listadodesordenada = document.createElement('ul');
listadodesordenada.setAttribute('class','list-group mt-3');
cuadro.appendChild(listadodesordenada);

function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularfibonacci);
}

eventlistened();

function calcularfibonacci(){

    let cantnumero = Number(document.getElementById('interacciones').value);
    let numerox = 0, numeroy = 1, resultado=0;
    listadodesordenada.innerHTML =  '';

    for(let i=1; i<=cantnumero; i++){

        resultado = numerox + numeroy;

        numerox = numeroy;
        numeroy = resultado;
        
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item');
        lista.innerText = resultado;
        listadodesordenada.appendChild(lista);
    }
  
}