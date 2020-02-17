const button = document.getElementById("btnComparar");

button.addEventListener("click", CompararCalificaciones);

function CompararCalificaciones() {
  const Calificaciones = Number(document.getElementById("Cal1").value);
  const Printalert = document.getElementById("Imprimiralert");

  if (Calificaciones > 8) {
    Printalert.innerText = "Aprobado";
  } else {
    Printalert.innerText = "Reprobado";

    const AudioDonRamon = document.getElementById("audioreprobado");

    AudioDonRamon.play();
  }
}
