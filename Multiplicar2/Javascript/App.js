const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Tablas de multiplicar');
cuadro.appendChild(Titulo);

const input = document.createElement('input');
input.setAttribute('class', 'form-control');
input.setAttribute ('placeholder','Ingresa un numero del 1 al 10');
input.setAttribute('id', 'numero');
input.setAttribute('type', 'number');
cuadro.appendChild(input);

const button = document.createElement('button');
button.innerText = 'Multiplicar';
button.setAttribute('id', 'MultiplicarNum');
button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
cuadro.appendChild(button);

function eventlistener(){
    
    const button = document.getElementById('MultiplicarNum');
    button.addEventListener('click', CalcularMultiplicar);
    
}

eventlistener();

const ul = document.createElement('ul');
ul.setAttribute('class', 'list-group mt-3');
cuadro.appendChild(ul);

function CalcularMultiplicar(){
    
    const Numero = Number(document.getElementById('numero').value);
    let resultado=0;
    ul.innerHTML = '';
    
    if(Numero >= 1 && Numero <= 10 ){
        
        for(let y=1; y<=10; y++){
            
            resultado = Numero * y;
            
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `La multiplicación de ${y} x ${Numero} es: ${resultado}`;
        ul.appendChild(li);

    } 
    } else {

        alert('Ingresa un número entre el 1 y el 10');
    }

}