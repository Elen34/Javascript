const button = document.getElementById('btncalcularcosto');

button.addEventListener('click', calcularcosto);

function calcularcosto(){

    const peso = Number(document.getElementById('pesokm').value);
    const pais = document.getElementById('seleccionarpais').value;

    let imprimir = document.getElementById('imprimirkm');

    let divimprimir, costokg;
    let kg = peso / 1000;

    if(peso > 1000 && peso < 5000 ){
        if (pais == '1'){

            costokg = kg * 11; 
            divimprimir = `<div class="alert alert-success mt-3" role="role"><p>El costo por gramo es de: ${costokg}</p></div>`;
        }
        else if(pais == '2'){

            costokg = kg * 10; 
            divimprimir = `<div class="alert alert-success mt-3" role="role"><p>El costo por gramo es de: ${costokg}</p></div>`;

        }     else if(pais == '3'){

            costokg = kg * 12; 
            divimprimir = `<div class="alert alert-success mt-3" role="role"><p>El costo por gramo es de: ${costokg}</p></div>`;
        }
        else if(pais == '4'){
        
            costokg = kg * 24; 
            divimprimir = `<div class="alert alert-success mt-3" role="role"><p>El costo por gramo es de: ${costokg}</p></div>`;
         
        }else if(pais == '5'){
               
            costokg = kg * 27; 
            divimprimir = `<div class="alert alert-success mt-3" role="role"><p>El costo por gramo es de: ${costokg}</p></div>`;
    } 
}
else if(peso > 5000){
    divimprimir = `<div class="alert alert-success mt-3" role="role"><p>No sera transportado el paquete, por política y seguridad</p></div>`;
}
imprimir.innerHTML = divimprimir; 
}