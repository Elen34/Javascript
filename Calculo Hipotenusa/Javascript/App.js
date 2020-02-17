let lado1;
let lado2;
let resultado;

let button = document.getElementById("btnCalcular");

button.addEventListener("click", hipotenusa);

function hipotenusa() {
  lado1 = Number(document.getElementById("ladoA").value);
  lado2 = Number(document.getElementById("ladoB").value);

  resultado = Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2));

  let imprimir = document.getElementById("impresultado");
  imprimir.innerText = resultado;
}
