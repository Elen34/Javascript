const button = document.getElementById("Calcularfigura");

button.addEventListener("click", tipofigura);

function tipofigura() {
  let long1 = Number(document.getElementById("lado1").value);
  let long2 = Number(document.getElementById("lado2").value);
  let long3 = Number(document.getElementById("lado3").value);

  let imprimirtipotriangulo = document.getElementById("imprimirtipotrian");
  let imprimirtipofig = document.getElementById("imprimirtipofig");

  let aux = long1 + long2;
  let aux2 = long1 + long3;
  let aux3 = long3 + long2;

  if (long1 == long2 && long2 == long3) {
    imprimirtipotriangulo.innerText = "Es un triangulo equilatero";
  } else if (
    (long1 == long2 && long2 != long3) ||
    (long1 == long3 && long3 != long2) ||
    (long2 == long3 && long2 != long1)
  ) {
    imprimirtipotriangulo.innerText = "Es un triangulo isosceles";
  } else if (long1 != long2 && long2 != long3) {
    imprimirtipotriangulo.innerText = "Es un triangulo escaleno";
  }
  if (aux == long3) {
    console.log("no");
    imprimirtipofig.innerText = "No se forma un triangulo";
    imprimirtipotriangulo.innerText = "";
  } else if (aux2 == long2) {
    imprimirtipofig.innerText = "No se forma un triangulo";
    imprimirtipotriangulo.innerText = "";
  } else if (aux3 == long1) {
    imprimirtipofig.innerText = "No se forma un triangulo";
    imprimirtipotriangulo.innerText = "";
  } else {
    imprimirtipofig.innerText = "Si es un triangulo";
  }
}
