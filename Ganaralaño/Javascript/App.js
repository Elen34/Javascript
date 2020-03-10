function eventlistened(){
    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularahorro);
}

eventlistened();

function calcularahorro(){

        let ahorro=0;
        let dia = 0.03;
        let divimprimir = document.getElementById('imprimir');

    for(let x=1; x<=365; x++){
               
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item');
        listado.innerText = `Lo que ahorra en el dia es: ${dia}` ;
        divimprimir.appendChild(listado);

        ahorro = ahorro + (dia * 3);
       
        dia = dia * 3;   
       
    }
        const listado = document.createElement('li');
        listado.setAttribute('class', 'list-group-item');
        listado.innerText = `Lo que ahorra en el año es: ${ahorro}`;
        divimprimir.appendChild(listado);

}