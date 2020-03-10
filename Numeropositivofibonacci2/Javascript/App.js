const cuadro = document.getElementById('output');

const h1 = document.createElement('h1');
h1.setAttribute('class','text-center');
h1.innerText = "Fibonacci";
cuadro.appendChild(h1);

const ingreso = document.createElement('input');
ingreso.setAttribute('class','form-control mt-3');
ingreso.setAttribute('placeholder', 'Digita un numero');
ingreso.setAttribute('id', 'numeros');
cuadro.appendChild(ingreso);

const boton = document.createElement('boton');
boton.setAttribute('class','btn btn-outline-success btn-block mt-3');
boton.setAttribute('id', 'btncalcular');
boton.innerText = "Calcular Fibonacci";
cuadro.appendChild(boton);

const listadodesordenada = document.createElement('ul');
listadodesordenada.setAttribute('class','list-group mt-3');
cuadro.appendChild(listadodesordenada);

function eventlistened (){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', compararnumerosfibonacci);

}

eventlistened();

function compararnumerosfibonacci(){

    const Numero = Number(document.getElementById('numeros').value);

    let x=0, y=1 ,resultado = 0;

    listadodesordenada.innerHTML = '';
    
    while (true){
        
        resultado = x+y
        x=y
        y=resultado;
        
        if(resultado>Numero){
            break;
        }
        
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item'); 
        lista.innerText=resultado;
        listadodesordenada.appendChild(lista);
    }
}