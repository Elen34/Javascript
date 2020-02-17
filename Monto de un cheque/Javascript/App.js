let diasfuera;
let hotel;
let comida;
let cheque;
const adicional = 100;

let button = document.getElementById("Calcularmontos");

button.addEventListener("click", calcularmonto);

function calcularmonto() {
  diasfuera = Number(document.getElementById("fueraciudad").value);
  hotel = Number(document.getElementById("costohotel").value);
  comida = Number(document.getElementById("costocomida").value);

  cheque = (hotel * diasfuera) + (comida * diasfuera) + adicional;

  let imprimir = document.getElementById("idimprimir");
  imprimir.innerText = cheque;
}
