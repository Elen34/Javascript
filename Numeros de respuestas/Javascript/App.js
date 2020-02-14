let respcorrectas;
let respincorrectas;
let respblanco;
let resultado;

let button = document.getElementById("calculoresp");

button.addEventListener("click", calcularrespuestas);

function calcularrespuestas() {
  respcorrectas = Number(document.getElementById("Respcorrectas").value);
  respincorrectas = Number(document.getElementById("Respincorrectas").value);
  respblanco = Number(document.getElementById("Respblanco").value);

  resultado = respcorrectas * 4 + respincorrectas * -1 + respblanco * 0;

  let imprimir = document.getElementById("Imprimirresult");
  imprimir.innerText = resultado;
}
