    const cuadro = document.getElementById('output');   
    
    const titulo = document.createElement('h1');
    titulo.innerText= 'Numeros descendientes';
    titulo.setAttribute('class', 'text-center');
    cuadro.appendChild(titulo);
    
    const button = document.createElement('button');
    button.innerText = 'Mostrar los numeros descendientes';
    button.setAttribute('id', 'btncontar');
    button.setAttribute('class', 'btn-outline-info btn-block mt-3');
    cuadro.appendChild(button);

    const listado = document.createElement('ul');
    listado.setAttribute('class', 'list-group mt-3');
    cuadro.appendChild(listado);
    
    function crearboton(){
        const button = document.getElementById('btncontar');
        button.addEventListener('click', DOM);
    }
    
    crearboton();

    function DOM(){
        
        listado.innerText = '';

        for(let i=100; i>=0; i--){ 
         
        const li = document.createElement('li'); 
        li.setAttribute('class', 'list-group-item');    
        li.innerText = `${i}`;
        listado.appendChild(li);    
    }
    
}

