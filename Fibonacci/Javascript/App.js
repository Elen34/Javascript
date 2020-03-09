function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularfibonacci);
}

eventlistened();

function calcularfibonacci(){

    let cantnumero = Number(prompt('Números de interacciones'));
    let numerox = 0, numeroy = 1, resultado=0;
    let imprimirresultado = document.getElementById('listas');

    for(let i=1; i<=cantnumero; i++){

        resultado = numerox + numeroy;

        numerox = numeroy;
        numeroy = resultado;
        
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item');
        lista.innerText = resultado;
        imprimirresultado.appendChild(lista);
    }
  
}