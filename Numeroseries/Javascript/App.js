const output = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = "Numeros series";
output.appendChild(Titulo);

const Input = document.createElement('input');
Input.setAttribute('class', 'form-control mt-3');
Input.setAttribute('id', 'numero');
output.appendChild(Input);

const boton = document.createElement('button');
boton.setAttribute('class', 'btn btn-secondary btn-block mt-3');
boton.innerText = "Calcular numeros";
boton.setAttribute('id', 'btncalcular');
output.appendChild(boton);

const ul = document.createElement('ul');
ul.setAttribute('class', 'list-group mt-3');
ul.setAttribute('id', 'lista');
output.appendChild(ul);

function eventlistened(){
    
    const button = document.getElementById('btncalcular');
    button.addEventListener('click', DOM);  
}

eventlistened();

function DOM(){
    
    let numero = Number(document.getElementById('numero').value);
    let imprimirlista = document.getElementById('lista');
    imprimirlista.innerHTML='';
    let listas;
        
    listas = document.createElement('li');
    listas.setAttribute('class', 'list-group-item');
    listas.innerText = numero;
    imprimirlista.appendChild(listas);
    
    while(numero != 1 ){
             
    if(numero % 2 == 0){
        
        numero = (numero / 2);
        
    }else{

       numero = (numero * 3) + 1;
       
    }
            listas = document.createElement('li');
            listas.setAttribute('class', 'list-group-item');
            listas.innerText = numero;
            imprimirlista.appendChild(listas);
        }
    }

