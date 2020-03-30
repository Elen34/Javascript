function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularnumperfectos);
}

eventlistened();

function calcularnumperfectos(){

    // const cantnum = Number(prompt('¿Cuantos numeros vas a ingresar?'));
    let divisor=0; 
    let num = Number(prompt('¿Ingresa un numero?'));
    
    for(let i=0;i<num;i++){
        

        divisor = num / num;
        divisor2 = num / divisor    

        console.log(divisor, divisor2);
        


    }



}