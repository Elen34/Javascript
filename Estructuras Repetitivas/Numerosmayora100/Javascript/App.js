function EventListener() {
  const button = document.getElementById("btnsumar");
  button.addEventListener("click", CalcularSuma);
}

EventListener();

function CalcularSuma() {

  let suma = 0;
  let divimprimir = document.getElementById('divimprimir');
  divimprimir.innerHTML = '';

    while(suma < 100){
    
        const Numero = Number(prompt("Ingresa un Número")); 
        suma += Numero;
         
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `Los números son: ${Numero}`;
        divimprimir.append(li);
    }
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = `La suma de los números son: ${suma}`;
    divimprimir.append(li);
}

