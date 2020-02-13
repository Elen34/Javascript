let matricula;
let calificacion1;
let calificacion2;
let calificacion3;
let calificacion4;
let calificacion5;
let promedio;

let button = document.getElementById("botton promedio");

button.addEventListener("click", calculopromedio);

function calculopromedio() {
  matricula = Number(document.getElementById("matriculas").value);
  calificacion1 = Number(document.getElementById("cal1").value);
  calificacion2 = Number(document.getElementById("cal2").value);
  calificacion3 = Number(document.getElementById("cal3").value);
  calificacion4 = Number(document.getElementById("cal4").value);
  calificacion5 = Number(document.getElementById("cal5").value);

  promedio =
    (calificacion1 +
      calificacion2 +
      calificacion3 +
      calificacion4 +
      calificacion5) /
    5;

  let resultados = document.getElementById("FinalAverage");
  resultados.innerText = promedio;

  let resultmatricula = document.getElementById("Imprimirmatricula");
  resultmatricula.innerText = matricula;
}
