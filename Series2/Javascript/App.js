const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Horas del empleado trabajadas');
cuadro.appendChild(Titulo);

const button = document.createElement('button');
button.innerText = 'Mostrar Series';
button.setAttribute('id', 'Mostarseries');
button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
cuadro.appendChild(button);

const listado = document.createElement('ul');
listado.setAttribute('class', 'list-group mt-3');
cuadro.appendChild(listado);

function eventlistened(){

    const button = document.getElementById('Mostarseries');
    button.addEventListener('click', calcularsuma);   
}

eventlistened();

function calcularsuma(){

    let bandera=true, acumulador=5;

    listado.innerHTML = '';
    
        const listas = document.createElement('li');
        listas.setAttribute('class', 'list-group-item');
        listas.innerText = acumulador;
        listado.appendChild(listas);
    
    while(acumulador < 1800){
        
        if(bandera == true){

            acumulador = acumulador + 2;
            bandera = false;
        }
        else{

            acumulador +=3;
            bandera= true;
        }

        const listas = document.createElement('li');
        listas.setAttribute('class', 'list-group-item');
        listas.innerText = acumulador;
        listado.appendChild(listas);
       
    }

    }