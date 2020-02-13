let lado1;
let lado2;
let lado3;
let resultadoper;
let resularea;

let button = document.getElementById("Calculo");

button.addEventListener("click", semiperimetro);

function semiperimetro() {
  lado1 = Number(document.getElementById("primerlado").value);
  lado2 = Number(document.getElementById("segundolado").value);
  lado3 = Number(document.getElementById("tercerlado").value);

  resultadoper = (lado1 + lado2 + lado3) / 2;

  resularea = Math.sqrt(
    (resultadoper *
      (resultadoper - lado1) *
      (resultadoper - lado2) *
      (resultadoper - lado3))
  );

  let imprimir = document.getElementById("Resultado");
  imprimir.innerText = resularea;
}
