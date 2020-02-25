const button = document.getElementById('btnprecio');

button.addEventListener('click', calcularprecio);

function calcularprecio(){

const Tipouvas = document.getElementById('TipoUva').value;
const tamañouvas = document.getElementById('TamañoUva').value;
let precioinicial = Number(document.getElementById('precio').value);

let imprimir = document.getElementById('imprimirpreciouva');

let divimprimir, aumentoprecio;

if(Tipouvas == '1' && tamañouvas == '1'){

        aumentoprecio = precioinicial + 0.20;
        divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El aumento de la uva es: ${aumentoprecio}</p></div>`;

} else if (Tipouvas == '1' && tamañouvas == '2') {

        aumentoprecio = precioinicial + 0.30;
        divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El aumento de la uva es: ${aumentoprecio}</p></div>`;   

}else if (Tipouvas == '2' && tamañouvas == '1') {

    aumentoprecio = precioinicial - 0.30;
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El aumento de la uva es: ${aumentoprecio}</p></div>`;   

}else if (Tipouvas == '2' && tamañouvas == '2') {

    aumentoprecio = precioinicial - 0.50;
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El aumento de la uva es: ${aumentoprecio}</p></div>`;

}
imprimir.innerHTML = divimprimir;

}