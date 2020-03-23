let ArrayPrincipal = [];
let ArregloPares = [];
let ArregloImpares = [];

let listaimprimir = document.getElementById('listaimprimirarreglo'); 
let listaimprimir2 = document.getElementById('listaimprimirpares'); 
let listaimprimir3 = document.getElementById('listaimprimirimpares'); 

EventListener();

function EventListener(){

    document
    .getElementById('tamañoarreglo')
    .addEventListener('click', Mostrarnumeros);

    document.getElementById('btnReiniciar')
    .addEventListener('click', ReiniciarApp);

}

function ReiniciarApp(){
    
    window.location.reload();
}

function Mostrarnumeros(TamanoArray){
 
        for(let x=0; x<30; x++){

            ArrayPrincipal.push(Math.floor(Math.random() * (301-100)) + 100);

            const lista = document.createElement('li');
            lista.setAttribute('class', 'list-group-item');
            lista.innerText = ArrayPrincipal;
            listaimprimir.appendChild(lista);
        }   
        ObtenerPareseImpares();
    }

function ObtenerPareseImpares(){
    
    for(let y=0; y<ArrayPrincipal.length; y++){ 

        if(ArrayPrincipal[y] % 2 == 0){

            ArregloPares.push(ArrayPrincipal[y]);

            const lista = document.createElement('li');
            lista.setAttribute('class', 'list-group-item');
            lista.innerText = ArregloPares;
            listaimprimir2.appendChild(lista);
                    
        } else{

            ArregloImpares.push(ArrayPrincipal[y]);

            const lista = document.createElement('li');
            lista.setAttribute('class', 'list-group-item');
            lista.innerText = ArregloImpares;
            listaimprimir3.appendChild(lista);     
        }
    }    
}


           