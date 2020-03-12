const Fondo = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.innerText = "Número Factorial";
Titulo.setAttribute('class', 'text-center');
Fondo.appendChild(Titulo);

const input = document.createElement('input');
input.setAttribute('placeholder', 'Ingresa un número');
input.setAttribute('class', 'form-control mt-3');
input.setAttribute('id', 'Num');
input.setAttribute('type','number')
Fondo.appendChild(input);

const boton = document.createElement('button');
boton.innerText = "Calcular factorial";
boton.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
boton.setAttribute('id', 'btncalcular');
Fondo.appendChild(boton);

function EventListener() {
    const button = document.getElementById("btncalcular");
    button.addEventListener("click", calcularfactorial);
  }
  
  EventListener();
  
  function calcularfactorial() {
   
        let Numero = Number(document.getElementById('Num').value);
        let Factorial = 1;
	
	if (Numero > 0) {
    	for (let y = 1; y <= Numero; y++) {
     		 Factorial *= y;
    }

        const alert = document.createElement('div');
        alert.setAttribute('class','alert alert-success mt-3');
        alert.innerText = `El Número factorial de ${Numero} es: 
        ${Numero}! = ${Factorial}`; 
        Fondo.appendChild(alert);

    } else {
    alert("Ingresa un número positivo");
  }
    