const button = document.getElementById("Comparacionnumeros");

button.addEventListener("click", calculartresnumeros);

function calculartresnumeros() {
  const numero1 = Number(document.getElementById("1num").value);
  const numero2 = Number(document.getElementById("2num").value);
  const numero3 = Number(document.getElementById("3num").value);

  let imprimir = document.getElementById("imprimirmayor");

  if (numero1 > numero2) {
    if (numero1 > numero3) {
      imprimir.innerText = numero1;
    } else {
      imprimir.innerText = numero3;
    }
  } else if (numero2 > numero3) {
    imprimir.innerText = numero2;
  } else {
    imprimir.innerText = numero3;
  }
}
