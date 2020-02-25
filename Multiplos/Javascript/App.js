const button = document.getElementById('btnCalcular');

button.addEventListener('click', calcularmultiplos);

function calcularmultiplos(){

    const numero1 = Number(document.getElementById('num1').value);
    const numero2 = Number(document.getElementById('num2').value);

    let imprimir = document.getElementById('Imprimirnumeros');
    
    let divimprimir;

    let divisiornumeros = numero1%numero2;

    if(divisiornumeros == 0){
         
        divimprimir = `<div class="alert alert-dark mt-3" role="alert"><p>El ${numero1} es multiplo de ${numero2}</p></div>`

    } else{

        divimprimir = `<div class="alert alert-dark mt-3" role="alert"><p>El ${numero1} no es multiplo de ${numero2}</p></div>`
      
    }
    imprimir.innerHTML = divimprimir;
}