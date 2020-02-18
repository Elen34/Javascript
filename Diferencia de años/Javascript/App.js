const button = document.getElementById("idcalculardif");

button.addEventListener("click", diferenciaaños);

function diferenciaaños() {
  let edad1 = Number(document.getElementById("edadherm1").value);
  let edad2 = Number(document.getElementById("edadherm2").value);

  let imprimirdiferencia = document.getElementById("imprimirdifedad");
  let imprrestaherm = document.getElementById('restaedad');

  if (edad1 > edad2) {

    imprimirdiferencia.innerText = edad1;

    let restaedad = edad1 - edad2;
    imprrestaherm.innerText = restaedad;


  } else {
    imprimirdiferencia.innerText = edad2; 

    let restaedad2 = edad1 - edad2;
    imprrestaherm.innerText = restaedad2;
  }
}
