let radio;
let resultado;

const constantePi = 3.1416;

let button = document.getElementById("Calcularpi");

button.addEventListener("click", areacirculo);

function areacirculo() {
  radio = Number(document.getElementById("radios").value);

  //let resultado = constantePi * (radio*radio);

  let radioelevado = Math.pow(radio, 2); // Libreria Math se utiliza para hacer calculos
  //codigo para elevar el radio al cuadrado

  resultado = radioelevado * Math.PI;

  //console.log() //mostar el resultado

  let imprimir = document.getElementById("ImprimirResultado");
  imprimir.innerText = resultado;
}
