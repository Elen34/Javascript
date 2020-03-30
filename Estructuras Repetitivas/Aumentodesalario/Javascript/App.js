function eventlistened(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularaumento);
}

eventlistened();

function calcularaumento(){

    let añoenlaempresa = Number(prompt('Ingresa los años trabajados'));
    let salarioinicial = 1500;
    let divimprimir = document.getElementById('imprimir');
    divimprimir.innerHTML = '';
    let lista = document.createElement('li');
    lista.setAttribute('class', 'list-group-item');
    lista.innerText = `El salario del empleado en el año 1 es ${salarioinicial}` ;
    divimprimir.appendChild(lista);

    for(let i=1;i<añoenlaempresa;i++){
        
       salarioinicial = ( salarioinicial + (salarioinicial * 0.1))
       
 
       lista = document.createElement('li');
       lista.setAttribute('class', 'list-group-item');
       lista.innerText = `El salario del empleado en el año ${i + 1} es ${salarioinicial}` ;
       divimprimir.appendChild(lista);
    }

}