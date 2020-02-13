let telas;

const pulgadas = 39.37;

let resultado;

let button = document.getElementById("Conversion");

button.addEventListener("click", conversion);

function conversion() {
  telas = Number(document.getElementById("datotelas").value);

  resultado = telas * pulgadas;

  let imprimir = document.getElementById("resultado");
  imprimir.innerText = resultado;
}
