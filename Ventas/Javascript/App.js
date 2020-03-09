function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularventas); 

}

eventlistened();

function calcularventas(){

    const cantidadventas = Number(prompt('¿Cuantas ventas realizadas al dia?'));

    let contador1=0, contador2=0,contador3=0, acumulador1=0, acumulador2=0, acumulador3=0, suma1=0,suma2=0,suma3=0,total=0;

    let imprimir = document.getElementById('Ventasrealizadas');

    for(let i=0; i<cantidadventas; i++){

        const ventas = Number(prompt('Ingresa cantidad ventas'));

        if(ventas > 1000){

            contador1++;
            suma1 = acumulador1 += ventas;
             

        }else if(ventas > 500 && ventas <= 1000){

                contador2++;
                suma2 = acumulador2 += ventas; 

           }else if(ventas <= 500){

                    contador3++;
                    suma3 = acumulador3 += ventas; 
                }
            }

            total = suma1 + suma2 + suma3; 

            imprimir.innerText = `Las ventas mayores a 1000 son: ${contador1}
            Las ventas mayores a 500 pero menores a 1000 son: ${contador2}
            Las ventas menores a 500 son: ${contador3}
            El total de ventas por categoria: 
            "- Mayores a 1000 son:" $${suma1} pesos,
            "- Mayores a 500 pero menores a 1000 son:" $${suma2} pesos,
            "- Menores o igual a 500 son:" $${suma3} pesos
            El total de las ventas son: $${total} pesos`;
        }


    
    