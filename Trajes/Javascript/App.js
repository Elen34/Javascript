const button = document.getElementById("Calculaprecio");

button.addEventListener('click', calcularpreciodes);

function calcularpreciodes() {
  const preciotraje = Number(document.getElementById('idprecio').value);

  const imprimir = document.getElementById('Printprecio');

  if (preciotraje > 3600) {
    let resultado = (preciotraje * 84) / 100;

    let imprimir2 = `<div class="alert alert-success mt-3"><p> El descuento es: ${resultado}</p></div>`;
    imprimir.innerHTML = imprimir2;


  }else {

    let resultado = (preciotraje * 93) / 100;

    let imprimir3 = `<div class="alert alert-success mt-3"><p> El descuento es: ${resultado}</p></div>`;
    imprimir.innerHTML = imprimir3;

  }
}
