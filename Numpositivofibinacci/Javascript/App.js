function eventlistened (){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', compararnumeros);

}

eventlistened();

function compararnumeros(){

    const Numero = Number(prompt('Ingresa un número'));

    let x=0, y=1 ,resultado = 0;

    let divimprimir = document.getElementById('lista');
    divimprimir.innerText = '';
    
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
        divimprimir.appendChild(lista);
    }
}
