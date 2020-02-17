const button = document.getElementById('Calcularedad');

button.addEventListener('click', calcularedad);

function calcularedad(){

    let Nombre1 = String(document.getElementById('Usuario1').value);
    let Nombre2 = String(document.getElementById('Usuario2').value);
    let Edad1 = Number(document.getElementById('Edadone').value);
    let Edad2 = Number(document.getElementById('Edadtwo').value);

    let Printalert = document.getElementById('Imprimirnombremayor');

    if(Edad1>Edad2){
        Printalert.innerText = Nombre1 ; 
    }
    else{
        Printalert.innerText = Nombre2;
     }
}