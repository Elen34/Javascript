const cuadro = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.setAttribute('class', 'text-center');
Titulo.innerText = ('Horas del empleado trabajadas');
cuadro.appendChild(Titulo);

const boton = document.createElement('button');
boton.setAttribute('class', 'btn btn-outline-dark btn-block mt-3');
boton.setAttribute('id', 'btncalcular');
boton.innerText = ('Calculo de las horas trabajadas');
cuadro.appendChild(boton);


function eventlistened(){
    
    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularhoras);
}

eventlistened();

function calcularhoras(){
    
    let contador = 0, totalhorastrabajadas = 0, totalsueldo=0;
    
    let sueldo = Number(prompt('Ingresa el sueldo del empleado por hora'));
    
    for(let x=1; x<=6; x++){
        
        const empleado = Number(prompt('Ingresa las horas trabajadas en un dia'));
        
        contador += empleado;
        
        totalhorastrabajadas = contador; 
        
        totalsueldo = sueldo * totalhorastrabajadas;
    }
    
    const imprimir = document.createElement('div');
    imprimir.setAttribute('class', 'alert alert-dark mt-3');
    imprimir.setAttribute('role', 'alert');
    imprimir.innerText = `Las horas trabajadas en una semana son: ${totalhorastrabajadas} horas
    El sueldo del empleado por las horas trabajadas es: $${totalsueldo} pesos`;
    cuadro.appendChild(imprimir);
    
}

