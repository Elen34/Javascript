function EventListener() {
  const button = document.getElementById("btnsumar");
  button.addEventListener("click", calcularsuma);
}

EventListener();

function calcularsuma() {
  let sumaimpares = 0,
    sumapares = 0;
  let divimprimir = document.getElementById("imprimir");
  let divimprimir2 = document.getElementById("imprimir2");
  let divimprimir3 = document.getElementById("imprimir3");
  let divimprimir4 = document.getElementById("imprimir4");

  divimprimir.innerHTML = ''
  divimprimir2.innerHTML = '';
  divimprimir3.innerHTML = '';
  divimprimir4.innerHTML = '';

  for (let i = 200; i <= 400; i++) {
    if (i % 2 == 0) {
      sumapares += i;

      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerText = i;
      divimprimir.appendChild(li);
    } else {
      sumaimpares += i;

      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item");
      li.innerText = i;
      divimprimir2.appendChild(li);
    }
  }
  const lista = document.createElement("li");
  lista.setAttribute("class", "list-group-item");
  lista.innerText = `La suma de los números pares es: ${sumapares}`;
  divimprimir3.appendChild(lista);

  const listado = document.createElement("li");
  listado.setAttribute("class", "list-group-item");
  listado.innerText = `La suma de los números impares es: ${sumaimpares}`;
  divimprimir4.appendChild(listado);
}
