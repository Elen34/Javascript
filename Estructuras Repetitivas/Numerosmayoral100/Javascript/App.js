
let contador = 0;
const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Suma de Números');
cuadro.appendChild(Titulo);

const button = document.createElement('button');
button.innerText = 'Sumando números';
button.setAttribute('id', 'Sumnum');
button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
cuadro.appendChild(button);

const ul = document.createElement('li');
ul.setAttribute('class', 'list-group mt-3');
cuadro.appendChild(ul);

function EventListener() {
  const button = document.getElementById("Sumnum");
  button.addEventListener("click", CalcularSuma);
}

EventListener();


function CalcularSuma() {

  let suma = 0;
  ul.innerHTML = '';
  const Numero=0;

    while(suma < 100){

      for(let i=0; i<Numero; suma++){
        
        const input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute ('placeholder','Ingresa un número');
        input.setAttribute('id', `num${i}`);
        contador++;
        input.setAttribute('type', 'number');
        cuadro.appendChild(input);

        Numero = Number(document.getElementById(`num${i}`).value);
      }

        suma += Numero;
         
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `Los números son: ${Numero}`;
        ul.appendChild(li);
    
  }
    const lista = document.createElement('li');
    lista.setAttribute('class', 'list-group-item');
    lista.innerText = `La suma de los números son: ${suma}`;
    ul.appendChild(lista);

}


