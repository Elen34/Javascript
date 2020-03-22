let ArrayPrincipal = [];
let ArregloPares = [];

let listaimprimir = document.getElementById('listaimprimir'); 
let listaimprimir2 = document.getElementById('listaimprimirpares'); 

EventListener();

function EventListener(){

    document
    .getElementById('ipnarreglo')
    .addEventListener('keypress', InitApp);

    document.getElementById('btnReiniciar')
    .addEventListener('click', ReiniciarApp);

}

function ReiniciarApp(){
    
    window.location.reload();
}

function InitApp(event){

    if(event.key != "Enter") return;

    if(event.target.value == "") return;

    if(event.target.value <= 0) return;

    if(isNaN(event.target.value)) return;

    Mostrarnumeros(event.target.value);
    
}

function Mostrarnumeros(TamanoArray){

    for(let x=0; x<TamanoArray; x++){

        ArrayPrincipal.push(Math.floor(Math.random() * (101 - 1)) + 1);

        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item');
        lista.innerText = ArrayPrincipal;
        listaimprimir.appendChild(lista);
    }

    ObtenerPares(TamanoArray);
}

function ObtenerPares(Pares){
    
    for(let y=0; y<Pares; y++){ 

        if(ArrayPrincipal[y] % 2 == 0){

            ArregloPares.push(ArrayPrincipal[y]);

            const lista = document.createElement('li');
            lista.setAttribute('class', 'list-group-item');
            lista.innerText = ArregloPares;
            listaimprimir2.appendChild(lista);
            
        }
        
    }    

}


           