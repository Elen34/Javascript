let puntoa1;
let puntoa2;
let puntob1;
let puntob2;
let resultado;

let button = document.getElementById("IdCalcular");

button.addEventListener('click', punto);

function punto() {
  puntoa1 = Number(document.getElementById("punto1").value);
  puntoa2 = Number(document.getElementById("punto2").value);
  puntob1 = Number(document.getElementById("punto3").value);
  puntob2 = Number(document.getElementById("punto4").value);

  resultado = Math.sqrt(
    (Math.pow(puntoa2 - puntoa1), 2) + Math.pow(puntob2 - puntob1, 2)
  );

  let imprimir = document.getElementById("ImpriResultado");
  imprimir.innerText = resultado;
}