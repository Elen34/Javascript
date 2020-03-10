function eventlistened(){

    const button = document.getElementById('calculonum');
    button.addEventListener('click', calcular);

}

eventlistened()

function calcular(){

    const cantidad = Number(prompt('¿Cuantos numeros vas a evaluar?'));
    let contador = 0,contador1 = 0, acumulador=0,acumulador2=0,acumuladorglobal=0, promediopositivos=0, totalsuma=0;
    let imprimir = document.getElementById('imprimirnum');
    imprimir.innerHTML = '';
    
    for(let i=0; i<cantidad; i++){
        
      let num = Number(prompt('Ingresa el número'));  

        if(num > 0){

            contador++; 

            acumulador+=num;
            acumuladorglobal += num;

            promediopositivos = acumulador / contador;  
        } 

        else {

            contador1++; 

            acumulador2+=(num);
            acumuladorglobal += num;      

        }
        
         totalsuma = acumuladorglobal / cantidad;
       
    }
    imprimir.innerText = `Los numeros mayores a 0 son: ${contador}, 
    Los numeros menoras a 0 son: ${contador1},
    El promedio de los numeros positivos son ${promediopositivos}, 
    El promedio de todos los numeros son: ${totalsuma}`;
}