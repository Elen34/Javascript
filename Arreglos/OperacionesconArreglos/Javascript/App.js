let Arreglo1 = [];
let Arreglo2 = [];

EventListener();

function EventListener(){
    
    document
    .getElementById('Arrayuno')
    .addEventListener('keypress', getsize);
    
    document
    .getElementById('Btnreiniciar')
    .addEventListener('click', ReiniciarApp);

    document
    .addEventListener('click', Operaciones);
}

function ReiniciarApp(){
    
        window.location.reload();
    }
    
    function getsize(e){ // Se puede agregar cualquier valor en un parametro
        
        if(e.key != "Enter") return;
        
        if(e.target.value == '') return;
        
        if(isNaN(e.target.value)) return;
        
        if(e.target.value <= 0) return;
        
        InitApp(e.target.value);
        
    }
    
    function InitApp(){
        
        const Ingresar1 = Number(document.getElementById('Arrayuno').value);

        const listaimprimir = document.getElementById('imprimir');
        const listaimprimir2 = document.getElementById('imprimir2');
        
        for(let x=0; x<Ingresar1; x++){
        
        Arreglo1.push(Math.floor(Math.random() * (-101 - 100)) + 100);
        Arreglo2.push(Math.floor(Math.random() * (-101 - 100)) + 100);
        
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item mt-3');
        lista.innerText = Arreglo1;
        listaimprimir.appendChild(lista);
        
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item mt-3');
        listado.innerText = Arreglo2;
        listaimprimir2.appendChild(listado);
    }
    }

function Operaciones(Variaciones){
    
    switch (Variaciones.target.id){

        case 'Suma': 

        let resultado1 = [];
        let acumulador1 = 0;
        const listaimprimir3 = document.getElementById('Imprimir3');
       
        for(let i=0; i<Arreglo1.length; i++){

            resultado1 = Arreglo1[i] + Arreglo2[i];
            
            acumulador1 +=  resultado1;
        }

        listaimprimir3.innerText = `La suma de los arreglos es: ${acumulador1}`;
        
        break;
        
        case 'Resta': 

        let resultado2 = [];
        let acumulador2 = 0;
        const listaimprimir4 = document.getElementById('Imprimir4');
       
        for(let y=0; y<Arreglo2.length; y++){

            resultado2 = Arreglo2[y] - Arreglo1[y];

            acumulador2 -=  resultado2;
        }        

        listaimprimir4.innerText = `La resta de los arreglos es: ${acumulador2}`;
        
        break;

        case 'Multiplicacion': 

        let resultado3 = [];
        let acumulador3 = 1;
        const listaimprimir5 = document.getElementById('Imprimir5');
       
        for(let z=0; z<Arreglo2.length; z++){

            resultado3 = Arreglo2[z] * Arreglo1[z];
            
            acumulador3 = acumulador3 * resultado3;
        }      

        listaimprimir5.innerText = `La multiplicacion de los arreglos es: ${acumulador3}`;
        
        break;


        default:
            return;
            break;
    }

}


    
