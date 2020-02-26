
EventListener();

function EventListener(){

    const button = document.getElementById('btn-init');
    button.addEventListener('click', iniciarAplicacion);
}

function iniciarAplicacion(){

      let NumeroAlumnos = Number(prompt('¿Cuantos alumnos son?'));

      let acumulador = 0;
      
        for(let i=1; i<=NumeroAlumnos; i++){

            let edad = Number(prompt(`Ingrese la edad del alumno ${i}`));
            acumulador += edad;

        } 
        let resultado = acumulador / NumeroAlumnos;

        // console.log(resultado);
        // // Se pone afuera del for para que no se repita varias veces el consolador

        let Imprimir = document.getElementById('ZonePrint');
        Imprimir.innerText = resultado;         
}