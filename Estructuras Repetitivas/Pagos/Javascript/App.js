function eventlistened(){

    const button = document.getElementById('btnpagos');
    button.addEventListener('click', Caclularpagos);

}

eventlistened();

function Caclularpagos(){

    let Pago = 0, acumulador = 0, totalpagar = 0, acumuladorglobal=0;
    let listaahorro= document.getElementById('pagos');
    listaahorro.innerHTML = '';

    for(let i=2; i<=20; i++){

            Pago2 = Pago * 2;
             

            const listado = document.createElement('li');
            listado.setAttribute('class', 'list-group-item');
            listado.innerText =  `El pago a realizar en el mes ${i} es de: $${Pago2} pesos` 
            listaahorro.appendChild(listado);
        }
        
        totalpagar = acumuladorglobal;
        
   const  imprimir = document.createElement('li');
   imprimir.setAttribute('class', 'list-group-item');
   imprimir.innerText =  `Total de pago de los 20 meses es: ${totalpagar}`
    listaahorro.appendChild(imprimir);

}

