const button = document.getElementById("Calcularhoras");

button.addEventListener("click", calcularprecio);

function calcularprecio() {

  const horas = Number(document.getElementById("hrestar").value);

  const imprimir = document.getElementById("imprimircostohoras");
  let divImprimircosto;

  if (horas <= 2) {
    let costhoras1 = horas * 5;

    divImprimircosto = `<div class="alert alert-success mt-3"> <p> El costo del estacionamiento es: ${costhoras1}</p></div>`;

  } else if (horas > 2 && horas <= 5) {
    let costhoras2 = horas * 4;
    divImprimircosto = `<div class="alert alert-success mt-3"> <p> El costo del estacionamiento es: ${costhoras2}</p></div>`;

  } else if (horas > 5 && horas < 10) {
    let costhoras3 = horas * 3;
    divImprimircosto = `<div class="alert alert-success mt-3"> <p> El costo del estacionamiento es: ${costhoras3}</p></div>`;

  } else {
    let costhoras4 = horas * 2;
    divImprimircosto = `<div class="alert alert-success mt-3"> <p> El costo del estacionamiento es: ${costhoras4}</p></div>`;
  }

  imprimir.innerHTML = divImprimircosto;

}
