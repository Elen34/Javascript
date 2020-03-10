function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularsuma);

}

eventlistened();

function calcularsuma(){

    let bandera=true, acumulador=5;

    let divimprimir = document.getElementById('imprimir');
    divimprimir.innerHTML = '';
    
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item');
        listado.innerText = acumulador;
        divimprimir.appendChild(listado);
    
    while(acumulador < 1800){
        
        if(bandera == true){

            acumulador = acumulador + 2;
            bandera = false;
        }
        else{

            acumulador +=3;
            bandera= true;
        }

        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item');
        listado.innerText = acumulador;
        divimprimir.appendChild(listado);
    }

    }


    

