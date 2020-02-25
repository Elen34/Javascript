const button = document.getElementById('btncalcular');

button.addEventListener('click', ordenarnumeros);

function ordenarnumeros(){

    const numero1 = Number(document.getElementById('NumeroA').value);
    const numero2 = Number(document.getElementById('NumeroB').value);
    const numero3 = Number(document.getElementById('NumeroC').value);

    let imprimir = document.getElementById('imprimirdescendentes');

    let divimprimir;

    if(numero1 != numero2 && numero1 != numero3 && numero2 != numero3){

        if(numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
            if(numero1 < numero2 && numero1 < numero3 && numero2 < numero3){

            divimprimir = `<div class="alert alert-danger mt-3" role="alert"><p>${numero1}, ${numero3}, ${numero2}</p></div>`;
            
        }else if(numero2 > numero1 || numero2 > numero3 || numero1 > numero3){

            divimprimir = `<div class="alert alert-danger mt-3" role="alert"><p>${numero2}, ${numero1}, ${numero3}</p></div>`;

        }else  if(numero3 > numero1 || numero3 > numero2 || numero1 > numero2){

            divimprimir = `<div class="alert alert-danger mt-3" role="alert"><p>${numero3}, ${numero2}, ${numero1}</p></div>`;
    } 

     }else {
        divimprimir = `<div class="alert alert-danger mt-3" role="alert"><p>Imprima sólo numeros diferentes</p></div>`;     
      
    }

    imprimir.innerHTML = divimprimir;
}