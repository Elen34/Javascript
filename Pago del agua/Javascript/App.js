let lado;
let ancho;
let profulitros;
let litros;
let resultado;

let button = document.getElementById("Calculo");

button.addEventListener("click", calcularlitro);

function calcularlitro() {
  lado = Number(document.getElementById("lados").value);
  ancho = Number(document.getElementById("anchos").value);
  profulitros = Number(document.getElementById("profundiadlit").value);
  litros =  Number(document.getElementById('litros').value);

  resultado = (litros * (lado * ancho * profulitros));

  let imprimir = document.getElementById("imprimirlitros");
  imprimir.innerText = resultado;

}
