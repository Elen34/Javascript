const button = document.getElementById('btnpoliza');

button.addEventListener('click', calculartiposdeseguros);

function calculartiposdeseguros(){

const tipodepolizas = document.getElementById('Tipopoliza').value;
const tipocuota = document.getElementById('Cuotabase').value;
const tipopersona = document.getElementById('Tipopersona').value;

let imprimir = document.getElementById('imprimircostoseguro');

let divimprimir, descuento;

if(tipodepolizas == '1' && tipocuota == '1' && tipopersona == '1'){

    descuento = (1200 * 90)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

    // Empieza poliza 1
} else if(tipodepolizas == '1' && tipocuota == '1' && tipopersona == '2'){

    descuento = (1200 * 95)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

} else if(tipodepolizas == '1' && tipocuota == '1' && tipopersona == '3'){

    descuento = (1200 * 95)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

}else if(tipodepolizas == '1' && tipocuota == '1' && tipopersona == '4' ){

    descuento = (1200 * 80)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

}else if(tipodepolizas == '1' && tipocuota == '1' && tipopersona == '5'){
    descuento = (1200 * 90)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

// Termina poliza 1 

// Empieza poliza 2 
} else if(tipodepolizas == '2' && tipocuota == '2' && tipopersona == '1'){

    descuento = (1200 * 90)/100; 
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;
}
else if(tipodepolizas == '2' && tipocuota == '2' && tipopersona == '2'){

    descuento = (1200 * 95)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

} else if(tipodepolizas == '2' && tipocuota == '2' && tipopersona == '3'){

    descuento = (1200 * 95)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

}else if(tipodepolizas == '2' && tipocuota == '2' && tipopersona == '4' ){

    descuento = (1200 * 80)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

}else{
    descuento = (1200 * 90)/100;  
    divimprimir = `<div class="alert alert-info mt-3" role="alert"><p>El descuesto del seguro es de: ${descuento}</p></div>`;

} 
// Termina poliza 2
imprimir.innerHTML = divimprimir;
} 

