const fondo = document.getElementById("output");

const titulo = document.createElement("h1");
titulo.innerText = "Imprimir numeros pares";
titulo.setAttribute("class", "text-center");
fondo.appendChild(titulo);

const button = document.createElement("button");
button.innerText = "Numeros pares";
button.setAttribute("class", "btn btn-outline-secondary btn-block mt-3");
button.setAttribute("id", "verificarnumeros");
fondo.appendChild(button);

const ul = document.createElement("ul");
ul.setAttribute("class", "list-group mt-3");
ul.setAttribute("id", "listadonumeros");
fondo.appendChild(ul);

function eventlistened() {
    const button = document.getElementById("verificarnumeros");
    button.addEventListener("click", calcularpares);
}

eventlistened();

function calcularpares(){

    ul.innerText = '';

    for(let i=0; i<=100; i+=2){        
        const lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = `${i}`;
        ul.appendChild(lista);
    }
}



