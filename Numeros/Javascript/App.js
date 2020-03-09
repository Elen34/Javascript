function eventlistened(){
    
    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularserie);  
}

eventlistened();

function calcularserie(){
    
    let numero = Number(prompt('Ingresa un numero'));
    let imprimirlista = document.getElementById('lista');
    imprimirlista.innerHTML = '';

    let listas = document.createElement('li');
    listas.setAttribute('class', 'list-group-item');
    listas.innerText = numero;
    imprimirlista.appendChild(listas);      

    while(numero != 1 ){

        
        if(numero % 2 == 0){
            
            numero = (numero / 2);
            
        }else{
            
            numero = (numero * 3) + 1;
            
        }
        
        listas = document.createElement('li');
        listas.setAttribute('class', 'list-group-item');
        listas.innerText = numero;
        imprimirlista.appendChild(listas);
        
    }

    }

