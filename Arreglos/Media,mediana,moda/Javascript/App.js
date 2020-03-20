const listaimprimir = document.getElementById('listaimprimir');


let Arreglomedia = [];
let Arreglomoda = [];
let Arreglomediana = [];

EventListener();

function EventListener(){

    document
    .getElementById('tamanoarreglo')
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

    Mostrarnumeros(Number(event.target.value));
    
}

function Mostrarnumeros(TamanoArray){

    let TamañoArray = [];
    
    for(let x=0; x<TamanoArray; x++){
        
        TamañoArray.push(Math.floor(Math.random() * (101 - 1)) + 1);
        
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item');
        listado.innerText = TamañoArray;
        listaimprimir.appendChild(listado);
    }

    console.log(TamañoArray);
    CalcularPromedio(TamañoArray);
}

function CalcularPromedio(TamañoArray){
    
    console.log(TamañoArray);
    
    let promedio = 0;
    
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mt-3');

    for(let i=0; i<TamañoArray.lenght; i++){

        promedio += TamañoArray[i];
    }

    promedio /= TamañoArray;

    li.innerText = `El promedio de los numeros es: ${promedio}`;   
    listaimprimir.appendChild(li);
   
}

