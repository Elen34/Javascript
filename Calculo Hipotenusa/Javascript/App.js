let lado1;
let lado2;
let resultado;

let button = document.getElementById("btnCalcular");

button.addEventListener('click', hipotenusa);

function hipotenusa() {
  lado1 = Number(document.getElementById("ladoA").value);
  lado2 = Number(document.getElementById("ladoB").value);

  let elevacioncuad = Math.pow(lado1, 2);
  let elevacioncuad2 = Math.pow(lado2, 2);

  resultado = Math.sqrt(elevacioncuad + elevacioncuad2);

  let imprimir = document.getElementById("impresultado");
  imprimir.innerText = resultado;

}
