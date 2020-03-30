
function EventListener(){

    const button = document.getElementById('btnsumar');
    button.addEventListener('click', CalcularMultiplicar);

}

EventListener();

function CalcularMultiplicar(){
    
    const Numero = Number(prompt('Ingresa un número entre el 1 y 10'));
    let resultado=0;
    let divimprimir = document.getElementById('divimprimir');
    divimprimir.innerHTML = '';
    
    if(Numero >= 1 && Numero <= 10 ){
        
        for(let y=1; y<=10; y++){
            
            resultado = Numero * y;
            
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `La multiplicación de ${y} x ${Numero} es: ${resultado}`;
        divimprimir.appendChild(li);

    } 
    } else {

        alert('Ingresa un número entre el 1 y el 10');
    }

}