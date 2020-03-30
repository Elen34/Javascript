function eventlistened(){

    const button = document.getElementById('calculodescuento');
    button.addEventListener('click', calculardes);

}

eventlistened()

function calculardes(){

    const cantauto = Number(prompt('¿Cuantos automoviles tienes?'));

    for(let x=0; x<cantauto; x++){

        const vehiculo = Number(prompt('¿Ingresa el costo vehiculo?'));
        const tipovehiculo = document.getElementById('seleccionardesc');

        if(tipovehiculo == '1'){

            let desc = (vehiculo * 90) / 100;
            console.log(desc);
            

        } else if(tipovehiculo == '2'){

            let desc = (vehiculo * 93) / 100;
            console.log(desc);
            

    } else if(tipovehiculo == '3'){

        let desc = (vehiculo * 95) / 100;
        console.log(desc);
        

    }

}
    }