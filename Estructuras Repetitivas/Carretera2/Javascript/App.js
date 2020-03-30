const Fondo = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.innerText = "Distancia entre carretera";
Titulo.setAttribute('class', 'text-center');
Fondo.appendChild(Titulo);

const input = document.createElement('input');
input.setAttribute('placeholder', 'Digita la velocidad del auto');
input.setAttribute('class', 'form-control mt-3');
input.setAttribute('id', 'velocidad');
Fondo.appendChild(input);

const boton = document.createElement('button');
boton.innerText = "Calcular distancia entre carretera";
boton.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
boton.setAttribute('id', 'btncalcular');
Fondo.appendChild(boton);

function calculardistancia(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calculardistanciakm);

}

calculardistancia();

function calculardistanciakm(){

    const Aguascalientes = 70;
    const Zacatecas = 150;
    const divimprimir = document.getElementById('imprimir');
    // const resultado = Aguascalientes * Zacatecas;
    const velo = Number(document.getElementById('velocidad').value);

    while(true){

        resultado = velo / 70;
        console.log(resultado);
    }
    break;

}

