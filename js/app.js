// "use strict";
// var _a;
// let numero1;
// let numero2;
// let resultado;
// let button = document.getElementById('btnCalcular');
// (_a = button) === null || _a === void 0 ? void 0 : _a.addEventListener('click', suma);
// function suma() {
//     numero1 = document.getElementById('ipnumero1');
// }




// /** 
//  *  Se declaran las variables que se utilizaran en el código
//  */ 

let numero1; 
let numero2;
let resultado;


/**
 * Se declara variable button y se le asigna el boton de calcular
 */

let button=document.getElementById('btnCalcular');

button?.addEventListener('click', suma);

function suma(){
    
    numero1=Number(document.getElementById('ipnumero1').value);
    numero2=Number(document.getElementById('ipnumero2').value);

    resultado=numero1+numero2;

    let ImprimirResultado=document.getElementById('ImprimirResultado');
    ImprimirResultado.innerText=resultado;

    /** innerText es para imprimir el resultado */

}