const button = document.getElementById("Calculardescuento");

button.addEventListener("click", Calculardescuento);

function Calculardescuento() {
  let nombrearticulo = String(document.getElementById("Nomarticulo").value);
  let claveart = Number(document.getElementById("clavearticulo").value);
  let precioart = Number(document.getElementById("precioarticulo").value);

  let imprimirresul = document.getElementById("nomart");
  let imprimirresul2 = document.getElementById("claveart");
  let imprimirresul3 = document.getElementById("originprice");
  let imprimirresul4 = document.getElementById("descart");

  if (claveart == 01) {
    let primerdescuento = (precioart * 90) / 100;

    imprimirresul.innerText = nombrearticulo;
    imprimirresul2.innerText = claveart;
    imprimirresul3.innerText = precioart;
    imprimirresul4.innerText = primerdescuento;
  } else if (claveart == 02) {
    let primerdescuento = (precioart * 80) / 100;

    imprimirresul.innerText = nombrearticulo;
    imprimirresul2.innerText = claveart;
    imprimirresul3.innerText = precioart;
    imprimirresul4.innerText = primerdescuento;
  }
}
