const output = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Calcular numeros');
output.appendChild(Titulo);

const button = document.createElement('button');
button.setAttribute('class', 'btn btn-outline-dark btn-block');
button.innerText = ('Calcular numeros');
button.setAttribute('id', 'verificarnum');
output.appendChild(button);

function eventlistened(){

    const button = document.getElementById('verificarnum');
    button.addEventListener('click', calcular);

}

eventlistened();

function calcular(){

    const cantidad = Number(prompt('¿Cuantos numeros vas a evaluar?'));
    let contador = 0,contador1 = 0, acumulador=0,acumulador2=0,acumuladorglobal=0, promediopositivos=0, totalsuma=0;
    let imprimir = document.getElementById('imprimirnum');
    
    for(let i=0; i<cantidad; i++){
        
      let num = Number(prompt('Ingresa el número'));  

        if(num > 0){

            contador++; 

            acumulador+=num;
            acumuladorglobal += num;

            promediopositivos = acumulador / contador;  
        } 

        else {

            contador1++; 

            acumulador2+=(num);
            acumuladorglobal += num;      

        }
        
         totalsuma = acumuladorglobal / cantidad;
                  
        }
        const alert = document.createElement('div');
        alert.setAttribute('class', 'alert alert-dark mt-5');
        alert.setAttribute('role', 'alert');
        alert.innerText = `Los numeros mayores a 0 son: ${contador}, 
        Los numeros menoras a 0 son: ${contador1},
        El promedio de los numeros positivos son ${promediopositivos}, 
        El promedio de todos los numeros son: ${totalsuma}`;
        output.appendChild(alert);
    }

