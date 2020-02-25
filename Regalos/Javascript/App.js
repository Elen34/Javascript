const button = document.getElementById('btncomparar');

button.addEventListener('click', comparaciondeprecios);

function comparaciondeprecios(){

    const tipopresupuesto = document.getElementById('idpresupuesto').value;

    let imprimir = document.getElementById('imprimirmejorregalo');

    let divimprimir;

    if(tipopresupuesto >= 5 && tipopresupuesto <=10){

        divimprimir = `<div class="alert alert-success btn-block mt-3"><p>Se comprará un Tarjeta</p></div>`; 

    } else if(tipopresupuesto >= 11 && tipopresupuesto <= 100){

        divimprimir = `<div class="alert alert-success btn-block mt-3"><p>Se comprará unos Chocolates</p></div>`;

    }  else if(tipopresupuesto >= 101 && tipopresupuesto <= 250){

        divimprimir = `<div class="alert alert-success btn-block mt-3"><p>Se comprará unas Flores</p></div>`;

    }else if(tipopresupuesto >= 251){

        divimprimir = `<div class="alert alert-success btn-block mt-3"><p>Se comprará un Anillo</p></div>`;

} else{

	divimprimir = `<div class="alert alert-success btn-block mt-3"><p>No se compraria un regalo</p></div>`;       
}

imprimir.innerHTML = divimprimir; 

}