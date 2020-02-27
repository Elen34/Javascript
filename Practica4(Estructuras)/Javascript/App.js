function evenListener(){

    const button = document.getElementById('btnInit');

    button.addEventListener('click', InitApp);
}

evenListener();

function InitApp(){

    let acumulador = 0; 
    const listGroup = document.getElementById('listahorro');
    
    for(let i=1; i<=12; i++){

        let Saving = Number(prompt('¿Cual es tu ahorro del mes?'));

        acumulador+= Saving;
        
        //Se crea una lista dentro de ul
        const li = document.createElement(`li`);
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El dinero ahorrado en el mes ${i} es: ${acumulador}`;
        
        listGroup.appendChild(li);
    }

    //imprimir el total del dinero ahorado
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item bg-danger');
    li.innerText = `El dinero ahorrado en el año es: ${acumulador}`;
    listGroup.appendChild(li);

    console.log(li);
    
}