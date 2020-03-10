
const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Horas del empleado trabajadas');
cuadro.appendChild(Titulo);

const input = document.createElement('input');
input.setAttribute('class', 'form-control');
input.setAttribute ('placeholder','Digite total de ventas');
input.setAttribute('id', 'cantventas');
input.setAttribute('type', 'number');
cuadro.appendChild(input);

const button = document.createElement('button');
button.innerText = 'Mostrar inputs';
button.setAttribute('id', 'Mostarinputs');
button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
cuadro.appendChild(button);

function eventlistened(){
    
    const button = document.getElementById('Mostarinputs');
    button.addEventListener('click', DOM);
    
}

eventlistened();

let contadores=0;

function DOM(){
    
    const cantidadventas = Number(document.getElementById('cantventas').value); 
    
    for(let i=0; i<cantidadventas; i++){

        const label = document.createElement('label');
        label.setAttribute('class', 'text-center mt-3');
        label.innerText = "Ingresa una venta:";
        cuadro.appendChild(label);

        const cuadroventas = document.createElement('input');
        cuadroventas.setAttribute('class', 'form-control mt-2');
        cuadroventas.setAttribute ('placeholder','Digite la ventas del dia');
        cuadroventas.setAttribute('id',  `contventas${i}`);
        contadores++;
        cuadroventas.setAttribute('type', 'number');
        cuadro.appendChild(cuadroventas);
        
    }

    const botones = document.createElement('button');
    botones.innerText = 'Calcular venta';
    botones.setAttribute('id', 'btnCalcularSuma');
    botones.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    cuadro.appendChild(botones);
    
    
    function botonn(){
        
        const button = document.getElementById('btnCalcularSuma');
        button.addEventListener('click', calcularventas);
        
    }
    
    botonn();
}   


function calcularventas(){

    let contador1=0, contador2=0,contador3=0, acumulador1=0, acumulador2=0, acumulador3=0, suma1=0,suma2=0,suma3=0,total=0;
    const alert = document.createElement('div');
    alert.innerHTML = '';
    
    for(let y=0; y<contadores; y++){

        ventas = Number(document.getElementById(`contventas${y}`).value);  

        
        if(ventas > 1000){
            
            contador1++;
            suma1 = acumulador1 += ventas;
              
        }else if(ventas > 500 && ventas <= 1000){
    
                contador2++;
                suma2 = acumulador2 += ventas; 
                
           }else if(ventas <= 500){
    
                    contador3++;
                    suma3 = acumulador3 += ventas; 
                }
    
            total = suma1 + suma2 + suma3; 

            console.log(ventas);
                
        }
        
                alert.setAttribute('class', 'alert alert-dark mt-3');
                alert.setAttribute('role', 'alert');
                alert.innerText = `Las ventas mayores a 1000 son: ${contador1}
                Las ventas mayores a 500 pero menores a 1000 son: ${contador2}
                Las ventas menores a 500 son: ${contador3}
                El total de ventas por categoria: 
                "- Mayores a 1000 son:" $${suma1} pesos,
                "- Mayores a 500 pero menores a 1000 son:" $${suma2} pesos,
                "- Menores o igual a 500 son:" $${suma3} pesos
                El total de las ventas son: $${total} pesos`;
                cuadro.appendChild(alert);
    }