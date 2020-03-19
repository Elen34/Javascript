let ArregloNumerosPrimosGlobal = [];

    function FillArrayGlobal(){
        
        for(let i=0; i<1000; i++){ //Numero primos del 0 al 1000
            let bandera = true;
            
            for(let y=2; y<i; y++){
                
                if(i % y == 0){ // la division da un residuo cero

                    bandera = false;
                    break;
                }
            }
//llenando un array de numeros primos
            if(bandera){
                ArregloNumerosPrimosGlobal.push(i); //ingresar los valores en un arreglo
            }
        }

        // console.log(ArregloNumerosPrimosGlobal);
        
    }


EventListener();

function EventListener(){

    document.addEventListener("DOMContentLoaded", FillArrayGlobal);
    document.getElementById('TamañoArray').addEventListener('keypress', InitApp);

    document.getElementById('botonreiniciar').addEventListener('click', ReiniciarApp);
}

function ReiniciarApp(){
    window.location.reload();
}

function InitApp(event){

    if(event.key != "Enter") return;

    if(event.target.value == "") return;

    if(event.target.value <= 0) return;

    if(isNaN(event.target.value)) return;

    fillArray(event.target.value);

}

function fillArray(tamanoArray){

    let ArregloNumerosPrimos = [];
    let listaimprimir = document.getElementById('listaimprimir');
    let imprimirmayor = document.getElementById('numeromayor'); 
    let imprimirsuma = document.getElementById('imprimirsuma');
    let Numeromayor = 0, sumaarreglo=0;
    
    const listado = document.createElement('li');
    listado.setAttribute('class', 'list-group-item');
    
    for(let i=0; i<tamanoArray; i++){
        
            let numeroAleatorio = [];
            numeroAleatorio= Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1;
            ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroAleatorio]);

            listado.innerText = ArregloNumerosPrimos;
            listaimprimir.appendChild(listado);
           
            sumaarreglo += ArregloNumerosPrimos[i];

            if(Numeromayor < ArregloNumerosPrimos[i]){

                Numeromayor = ArregloNumerosPrimos[i];

                }
            } 

        imprimirmayor.innerText = `El número mayor del arreglo es: ${Numeromayor}`;    
       imprimirsuma.innerText = `La suma del arreglo es: ${sumaarreglo}`;
}

