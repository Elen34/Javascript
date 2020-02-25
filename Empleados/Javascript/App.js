const button = document.getElementById('btnbonosant');

button.addEventListener('click', calcularbonosempleado);

function calcularbonosempleado(){

    const antiguedad = Number(document.getElementById('antiguedademp').value);
    const sueldo = Number(document.getElementById('sueldoemp').value);

    let imprimir = document.getElementById('calcularbonosant');

    let divimprimir, descuentoanti, descuentosueldo;

    if(antiguedad >= 2 && antiguedad < 5){

        descuentoanti = (sueldo + 80)/100;

         if(sueldo < 1000){
      
              descuentosueldo = (sueldo +  75)/100;
              
              if(descuentoanti > descuentosueldo){

                divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>El bono del empleado por antiguedad es de: ${descuentoanti}%</p></div>`;
                
              } else{
                divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>El bono del empleado por sueldo es de: ${descuentosueldo}%</p></div>`;
              }

    }
    imprimir.innerHTML = divimprimir;   
}
 
  else if(antiguedad >= 5){

        descuentoanti = (sueldo + 70)/100;

        if(sueldo > 1000 && sueldo <= 3500){

            descuentosueldo = (sueldo +  85)/100;

         }else if(sueldo > 3500){

            descuentosueldo = (sueldo +  90)/100;

         } if(descuentoanti > descuentosueldo){

             divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>El bono del empleado de antiguedad es de: ${descuentoanti}%</p></div>`;

         }else {

            divimprimir = `<div class="alert alert-success mt-3" role="alert"><p>El bono del empleado de sueldo de: ${descuentosueldo}%</p></div>`;
         }

    }      
    imprimir.innerHTML = divimprimir;
    }

