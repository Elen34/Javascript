function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calculartienda);
}

eventlistened();

function calculartienda(){

    const Ciudad = Number(prompt('¿Cuantas ciudades estan en Mexico?'));
    // const Tiendas = Number(prompt('¿Cuantas Tiendas estan en la ciudad?'));
    // const empleados = Number(prompt('¿Cuantas empleados estan en cada tienda?'));
    let contador=0;
    const divimprimir = document.getElementById('imprimir');

    for(let x=1; x<=Ciudad; x++){
        
        const ventas= Number(prompt('Ingresa la venta en cada ciudad'));

        for(let x=1; x<=ventas; x++){

            const venta= Number(prompt('Ingresa el precio de la venta'));

            contador++;
            contador += venta;


        console.log(venta);
        
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item');
        listado.innerText = `Lo que vendio en la ciudad ${x}, fueron ${venta} ventas`;
        divimprimir.appendChild(listado);
    }


    }
}
