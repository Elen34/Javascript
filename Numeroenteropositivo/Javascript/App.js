const button = document.getElementById('Calculonumero');

button.addEventListener('click', Cantidanumeros);

function Cantidanumeros(){

    let numero = Number(document.getElementById('idnumero').value);

    let imprimir = document.getElementById('imprimirnum');

    let unidades, centenas;

    if(numero > 0 && numero < 10){

            imprimir.innerText = "Tiene una cifra";
        }

         else if(numero < 100){
           

        imprimir.innerText = "Tiene dos cifras";
        
    }else {

        imprimir.innerText = "Tiene tres cifras";
    }
    
    if(numero > 1000){

        alert("ERROR: El numero es MAYOR de tres cifras");    
        imprimir.innerText = "Tiene cuatro cifras";    
    }

}
