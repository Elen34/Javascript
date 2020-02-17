let altopared;
let anchopared;
let costoMetro;
let resultado;

let button = document.getElementById("Calcularmetros");

button.addEventListener("click", calcularcobropintura);

function calcularcobropintura() {
  altopared = Number(document.getElementById("largewall").value);
  anchopared = Number(document.getElementById("widthwall").value);
  costoMetro = Number(document.getElementById("cost").value);

  resultado = altopared * anchopared * costoMetro;

  let imprimir = document.getElementById("imprimirresul");
  imprimir.innerText = resultado;
}
