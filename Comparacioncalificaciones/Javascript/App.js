const button = document.getElementById("btncalcular");

button.addEventListener("click", obtenerpromedio);

function obtenerpromedio() {
  const numero1 = Number(document.getElementById('cal1').value);
  const numero2 = Number(document.getElementById('cal2').value);
  const numero3 = Number(document.getElementById('cal3').value);

  let resultado = (numero1 + numero2 + numero3) / 3;

  const ZonePrint = document.getElementById('ZonePrint');

  if (resultado >= 9) {
    let divImprimir = `<div class="alert alert-success mt-3"> <p> El alumno A aprobado </p> El promedio es: ${resultado}</div>`;

    ZonePrint.innerHTML = divImprimir;
  }
  if (resultado >= 6 && resultado < 9) {
    let divImprimir = `<div class="alert alert-warning mt-3"> <p> El alumno A regular </p> El promedio es:  ${resultado}</div> `;

    ZonePrint.innerHTML = divImprimir;
  }
  if (resultado < 6) {
    let divImprimir = `<div class="alert alert-danger mt-3"> <p> El alumno A reprobado</p> El promedio es:  ${resultado} </div> `;

    ZonePrint.innerHTML = divImprimir;
  }
}
