const button = document.getElementById('btncalcular');

button.addEventListener('click', calcularnumeros);

function calcularnumeros(){

const Numero1 = Number(document.getElementById('num1').value);
const Numero2 = Number(document.getElementById('num2').value);
const Numero3 = Number(document.getElementById('num3').value);


let imprimir = document.getElementById('imprimirdesendente');
let divimprimir;

if(Numero1 != Numero2){
    if(Numero2 != Numero3){

        divimprimir = `<div class="alert alert-warning mt-3"> <p> El alumno A regular </p> El promedio es:  ${resultado}</div> `;
        imprimir.innerHTML = divimprimir;
    }
}

}