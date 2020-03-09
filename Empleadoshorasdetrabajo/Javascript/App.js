function eventlistener(){

    const button = document.getElementById('btnhoras');
    button.addEventListener('click', calcularhorasempleado);

}

function calcularhorasempleado(){

    let contador = 0, totalhorastrabajadas = 0, totalsueldo=0;
    let imprimir = document.getElementById('imprimirhoras');

    let sueldo = Number(prompt('Ingresa el sueldo del empleado por hora'));

    for(let x=1; x<=6; x++){

        const empleado = Number(prompt('Ingresa las horas trabajadas en un dia'));

        contador += empleado;

        totalhorastrabajadas = contador; 

        totalsueldo = sueldo * totalhorastrabajadas;
    }

    imprimir.innerText =  `Las horas trabajadas en una semana son: ${totalhorastrabajadas} horas
    El sueldo del empleado por las horas trabajadas es: $${totalsueldo} pesos`;

}

eventlistener();