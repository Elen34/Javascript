const Fondo = document.getElementById('output');

const Titulo = document.createElement('h1');
Titulo.innerText = "Distancia entre carretera";
Titulo.setAttribute('class', 'text-center');
Fondo.appendChild(Titulo);

const boton = document.createElement('button');
boton.innerText = "Calcular distancia entre carretera";
boton.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
boton.setAttribute('id', 'btncalcular');
Fondo.appendChild(boton);

const listado = document.createElement('ul');
listado.setAttribute('class', 'list-group mt-3');
Fondo.appendChild(listado);

function calculardistancia(){

    const button = document.getElementById('btncalcular');
    button.addEventListener('click', calcularahorro);
}

calculardistancia();

    function calcularahorro(){
        let ahorro=0;
        let dia = 0.03;
        listado.innerHTML = ''; 

    for(let x=1; x<=365; x++){
               
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item');
        lista.innerText = `Lo que ahorra en el dia es: ${dia}` ;
        listado.appendChild(lista);

        ahorro = ahorro + (dia * 3);
       
        dia = dia * 3;   
       
    }
        const lista = document.createElement('li');
        lista.setAttribute('class', 'list-group-item');
        lista.innerText = `Lo que ahorra en el año es: ${ahorro}`;
        listado.appendChild(lista);

}
