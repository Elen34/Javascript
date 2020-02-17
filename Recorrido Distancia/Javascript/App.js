let rapidez;
let tiempo;
let distancia;

let button = document.getElementById("CalcularDistancia");

button.addEventListener("click", Distancia);

function Distancia() {
  rapidez = Number(document.getElementById("rapreco").value);
  tiempo = Number(document.getElementById("tiemporec").value);

  distancia = rapidez * tiempo;

  let imprimir = document.getElementById("Imprimirdistancia");
  imprimir.innerText = distancia;
}
