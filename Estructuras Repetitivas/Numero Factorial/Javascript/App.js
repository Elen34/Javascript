function EventListener() {
  const button = document.getElementById("btncalcular");
  button.addEventListener("click", calcularfactorial);
}

EventListener();

function calcularfactorial() {
  let Numero = Number(prompt("Ingresa un número"));
  let Factorial = 1;
  let listaimprimir = document.getElementById("imprimir");

  if (Numero > 0) {
    for (let y = 1; y <= Numero; y++) {
      Factorial *= y;
    }
    listaimprimir.innerText = `El Número factorial de ${Numero} es: 
        ${Numero}! = ${Factorial}`;
  } else {
    alert("Ingresa un número positivo");
  }
}
