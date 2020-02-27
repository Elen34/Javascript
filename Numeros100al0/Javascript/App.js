
function evenlistened(){

    const button = document.getElementById('Contarnumeros');
    button.addEventListener('click', Contarnumeros);
}

evenlistened();

function Contarnumeros(){

    const Numero = 100;

    let imprimir = document.getElementById('Imprimirlist');
    
    for(let i=100; i>=0; i--){
    
        const lista = document.createElement('li'); //elemento
        lista.setAttribute('class', 'list-group-item'); //clase
        lista.innerText = `${i}`; //texto
        imprimir.appendChild(lista); // imprimir
        }
}