let SizeArray = [];
const listaimprimir = document.getElementById('idimprimir');

EventListener();

function EventListener(){

    document
    .getElementById('ipnarreglo')
    .addEventListener('keypress', InitApp);

    document
    .getElementById('ReiniciarApp')
    .addEventListener('click' , ReiniciarApp);

}

function ReiniciarApp(){

    window.location.reload();
}

function InitApp(event){

    if(event.key != "Enter") return;

    if(event.target.value == "") return;

    if(event.target.value <= 0) return;

    if(isNaN(event.target.value)) return;

    llenarArreglos(event.target.value);

}

function llenarArreglos(tamanoarreglo){

    for(let i=0; i<tamanoarreglo; i++){

        SizeArray.push(Math.floor(Math.random() * (101 - 1)) + 1);

        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item');
        lista.innerText = SizeArray;
        listaimprimir.appendChild(lista);
    }

    Orderbybubble(tamanoarreglo);
}

function Orderbybubble(Ordenar){

    let n=0, i=0, k=0, aux=0;
    n = SizeArray.length;

    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (SizeArray[i] > SizeArray[i + 1]) {
                aux = SizeArray[i];
                SizeArray[i] = SizeArray[i + 1];
                SizeArray[i + 1] = aux;
            }
        }
    }
    const listaordenada = document.createElement('li');
    listaordenada.setAttribute('class', 'list-group-item mt-2');
    listaordenada.innerText = `El arreglo ordenado es: ${SizeArray}`;
    listaimprimir.appendChild(listaordenada);
}