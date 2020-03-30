const cuadro = document.getElementById('output');

const h1 = document.createElement('h1');
h1.setAttribute('class', 'text-center');
h1.innerText = "Aumento de salario";
cuadro.appendChild(h1);

const input = document.createElement('input');
input.setAttribute('id', 'años');
input.setAttribute('class', 'form-control');
input.setAttribute('placeholder','Digita los años trabajados');
cuadro.appendChild(input);

const boton = document.createElement('button');
boton.setAttribute('class', 'btn-outline-success btn-block mt-3');
boton.innerText = "Calcular aumento de salario";
boton.setAttribute('id', 'btncalcular');
cuadro.appendChild(boton);

const ul = document.createElement('ul');
ul.setAttribute('class', 'alert alert-success mt-3');
ul.setAttribute('role', 'alert');
cuadro.appendChild(ul);

function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularaumento);
}

eventlistened();

function calcularaumento(){

    let anoenlaempresa = Number(document.getElementById('años').value);
    console.log(anoenlaempresa);
    

    let salarioinicial = 1500;

    ul.innerHTML = '';

    let lista = document.createElement('li');

    lista.setAttribute('class', 'list-group-item');

    lista.innerText = `El salario del empleado en el año 1 es ${salarioinicial}` ;

    ul.appendChild(lista);

    for(let i=1;i<anoenlaempresa;i++){
     
       salarioinicial = ( salarioinicial + (salarioinicial * 0.1))

       let lista = document.createElement('li');
       lista.setAttribute('class', 'list-group-item');
       lista.innerText = `El salario del empleado en el año ${i + 1} es ${salarioinicial}` ;
        ul.appendChild(lista);
    }

}

