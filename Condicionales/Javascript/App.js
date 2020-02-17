const button = document.getElementById("btnComparar");

button.addEventListener("click", compararNumeros);

function compararNumeros() {
  let Numero1 = Number(document.getElementById("inpNumero1").value);
  let Numero2 = Number(document.getElementById("inpNumero2").value);

  const Divalert = document.getElementById('Printalert');

  if (Numero1 > Numero2) {
    //console.log("Numero A es mayor");
    Divalert.innerText = "Numero A es mayor";
  } else {
    //console.log("Numero B es mayor");
    Divalert.innerText = "Numero B es mayor";
  }

}
