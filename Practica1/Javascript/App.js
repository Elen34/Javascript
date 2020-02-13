let numero1;
let numbero2;
let resultado;

let button = document.getElementById("btnCalcular");

button.addEventListener("click", suma);

function suma() {
  numero1 = Number(document.getElementById("ipnumero1").value);
  numero2 = Number(document.getElementById("ipnumero2").value);

  resultado = numero1 + numero2;

  let imprimir = document.getElementById("ImprimirResultado");

  imprimir.innerText = resultado;
}
