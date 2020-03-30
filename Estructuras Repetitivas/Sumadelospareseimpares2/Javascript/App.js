const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = "Suma de numeros pares e impares";
cuadro.appendChild(Titulo);

const boton = document.createElement('button');
boton.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
boton.setAttribute('id', 'btnsumar');
boton.innerText = "Suma de numeros pares e impares";
cuadro.appendChild(boton);

const row = document.createElement('div');
row.setAttribute('class', 'row text-center mt-3');
cuadro.appendChild(row);

const column = document.createElement('div');
column.setAttribute('class', 'col-6');
row.appendChild(column);

const label = document.createElement('label');
label.innerText = "Números Pares";
column.appendChild(label);

const listado = document.createElement("ul");
listado.setAttribute("class", "list-group");
column.appendChild(listado);

const listado3 = document.createElement("ul");
listado3.setAttribute("class", "list-group");
column.appendChild(listado3);

const column2 = document.createElement('div');
column2.setAttribute('class', 'col-6');
row.appendChild(column2);

const label2 = document.createElement('label');
label2.innerText = "Números Impares";
column2.appendChild(label2);

const listado2 = document.createElement("ul");
listado2.setAttribute("class", "list-group");
column2.appendChild(listado2);

const listado4 = document.createElement("ul");
listado4.setAttribute("class", "list-group");
column2.appendChild(listado4);


function EventListener() {
    const button = document.getElementById("btnsumar");
    button.addEventListener("click", calcularsuma);
  }
  
  EventListener();
  
  function calcularsuma() {
    let sumaimpares = 0,
      sumapares = 0;
  
    listado.innerHTML = ''
    listado2.innerHTML = '';
    listado3.innerHTML = '';
    listado4.innerHTML = '';
  
    for (let i = 200; i <= 400; i++) {
      if (i % 2 == 0) {
        sumapares += i;
  
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText = i;
        listado.appendChild(li);
        
      } else {
        sumaimpares += i;
  
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText = i;
        listado2.appendChild(li);
      }
    }
    const lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item mt-2");
    lista.innerText = `La suma de los números pares es: ${sumapares}`;
    listado3.appendChild(lista);
  
    const listas = document.createElement("li");
    listas.setAttribute("class", "list-group-item mt-2");
    listas.innerText = `La suma de los números impares es: ${sumaimpares}`;
    listado4.appendChild(listas);
  }
  