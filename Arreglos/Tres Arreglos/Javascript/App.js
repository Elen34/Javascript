let ArrayA = [];
let ArrayB = [];
let ArrayOrder = [];
let ArrayOrder1 = [];

EventListener();

function EventListener(){
    
    document
    .getElementById('ipnarreglo1')
    .addEventListener('keypress', getsize);
    
    document
    .getElementById('btnReiniciar')
    .addEventListener('click', ReiniciarApp);

    document
    .addEventListener('click', OrdenarNumeros);
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
    
    function InitApp(e){
        
        const Ingresar1 = Number(document.getElementById('ipnarreglo1').value);

        const listaimprimir = document.getElementById('listaimprimir');
        const listaimprimir2 = document.getElementById('listaimprimir2');
        
        for(let x=0; x<Ingresar1; x++){
        
        ArrayA.push(Math.floor(Math.random() * (101 - 1)) + 1);
        ArrayB.push(Math.floor(Math.random() * (101 - 1)) + 1);
        
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item mt-3');
        lista.innerText = ArrayA;
        listaimprimir.appendChild(lista);
        
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item mt-3');
        listado.innerText = ArrayB;
        listaimprimir2.appendChild(listado);
        
    }
    }

    function OrdenarNumeros(Ordenar){

        // let Concatenar = [];
        // for(let x=0; x<Concatenar; x++){
            
            if(ArrayA > ArrayB){
                
                // ArrayOrder.sort();
                ArrayOrder = ArrayA.concat(ArrayB);
                    console.log(ArrayOrder);
                }
                else{

                    // ArrayOrder.sort();
                    ArrayOrder1 = ArrayB.concat(ArrayA);
                    console.log(ArrayOrder1);
                }

            }
    // }


           