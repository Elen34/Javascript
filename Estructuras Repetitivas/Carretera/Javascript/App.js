function calculardistancia() {
  const button = document.getElementById("btncalcular");
  button.addEventListener("click", calculardistanciakm);
}

calculardistancia();

function calculardistanciakm() {
  const Aguascalientes = 70;
  const Zacatecas = 150;
  const divimprimir = document.getElementById("imprimir");
  boolean = true;

  while (true) {
    Aguascalientes++;
    Zacatecas--;

    if (Aguascalientes == Zacatecas) {
      divimprimir.innerText = `El km donde se encuentran es: ${Aguascalientes}`;
    }
  }
}
