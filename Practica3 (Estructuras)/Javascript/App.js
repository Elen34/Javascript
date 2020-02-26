EventListener();

function EventListener(){

    const button = document.getElementById('idcalcularestatura');
    button.addEventListener('click', InitApp);
}

function InitApp(){

    let continuar = true;
    let acumulador = 0;
    let contador = 0;

    while(continuar == true){ //Se puede colocar un booleano con true o solo la variable  while(continuar)

        let estatura = Number(prompt('Ingrese la estatura'));

        if(estatura == 0){

            continuar = false;
        }

        acumulador += estatura;
        contador++;
    }

    let resultado = acumulador / (contador-1); // para que el contador no sume y no lo divida
    console.log(resultado);
}

