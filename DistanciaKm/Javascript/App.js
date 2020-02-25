const button = document.getElementById("btncalcular");

button.addEventListener("click", calcularcosto);

function calcularcosto() {
  const tipocamion1 = document.getElementById("tipocamion").value;
  const numpersona = Number(document.getElementById("numpersonas").value);
  const kmrecorridos = Number(document.getElementById("kmviajes").value);

  let imprimircosto = document.getElementById("imprimircostototal");
  let diviimprimir;

  if (tipocamion1 == "1") {
    let preciototal1 = (kmrecorridos * 1.5) / numpersona;
    diviimprimir = `<div class="alert alert-success mt-3"> <p> El costo es: ${preciototal1} </p></div>`;
  } else if (tipocamion1 == "2") {
    let preciototal2 = (kmrecorridos * 2.0) / numpersona;
    diviimprimir = `<div class="alert alert-success mt-3"> <p> El costo es: ${preciototal2} </p></div>`;
  } else if (tipocamion1 == "3") {
    let preciototal3 = (kmrecorridos * 2.5) / numpersona;
    diviimprimir = `<div class="alert alert-success mt-3"> <p> El costo es: ${preciototal3}</p></div>`;
  } else if (tipocamion1 == "4") {
    let preciototal4 = (kmrecorridos * 3.0) / numpersona;
    diviimprimir = `<div class="alert alert-success mt-3"> <p> El costo es: ${preciototal4}</p></div>`;
  }

  imprimircosto.innerHTML = diviimprimir;
}

