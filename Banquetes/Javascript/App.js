const button = document.getElementById('calcularpresu');

button.addEventListener('click', calcularpresupuesto);

function calcularpresupuesto() {

  const personas = Number(document.getElementById('numpersonas').value);

  let ZonePrint = document.getElementById('printpresupuesto');

  let divImprimir, precio;

  if(personas >= 1 && personas < 200){
    precio = personas * 95;
    divImprimir = divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El costo del platillo por persona es de: ${precio}</p></div>`;
    ZonePrint.innerHTML = divImprimir;
    
    
  }else if(personas > 200 && personas <= 300){

    precio = (personas * 85);
    divImprimir =`<div class="alert alert-info mt-3" role="alert"><p>El costo del platillo por persona es de: ${precio}</p></div>`;
    ZonePrint.innerHTML = divImprimir;

  
  }else if(personas > 300){

    precio = personas * 75;
    divImprimir = `<div class="alert alert-info mt-3" role="alert"><p>El costo del platillo por persona es de: ${precio}</p></div>`;
    ZonePrint.innerHTML = divImprimir;
    
}
}