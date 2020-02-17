const button = document.getElementById("Calculomonto");

button.addEventListener("click", Calculocompra);

function Calculocompra() {
  let Numero = Number(document.getElementById("Cantcompra").value);

  let Printalert = document.getElementById("Imprimir");

  if (Numero > 1000) {
    let descuento = Numero * 0.80;

    Printalert.innerText = descuento;
    
  } else {

    Printalert.innerText = Numero;
  }
}
