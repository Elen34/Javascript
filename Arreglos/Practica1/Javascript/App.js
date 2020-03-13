
let Arreglo = []; // Inicializar el arreglo en 0 
const output = document.getElementById("output");

function EventListener() {
    
    document.addEventListener("DOMContentLoaded", CargarInputs);

  document
    .getElementById('buttonAceptar')
    .addEventListener('click', ObtenerResultado);

    document
    .getElementById('btnReiniciar').
    addEventListener('click', ReiniciarApp);
}

    function ReiniciarApp(){
        window.location.reload(); // cargar la funcion de nuevo
    }

EventListener();

function CargarInputs() {

  for (let x = 0; x < 10; x++) {

    const DivFG = document.createElement("div");
    DivFG.setAttribute("class", "form-group mt-3");

    const labelFG = document.createElement("label");
    labelFG.innerText = `Dame el valor de la posicion ${x}:`;

    const inputFG = document.createElement("input");
    inputFG.setAttribute("type", "number");
    inputFG.setAttribute("placeholder", "Ingresa el valor");
    inputFG.setAttribute("class", "form-control");
    inputFG.setAttribute("id", `inputValor${x}`);

    output.appendChild(DivFG); //imprimir el div
    DivFG.appendChild(labelFG); //imprimir el label
    DivFG.appendChild(inputFG); //imprimir el input
  }
}
//funcion para rellenar los inputs
function ObtenerResultado(){

    for(let x=0; x<10; x++){
        const valor =  document.getElementById(`inputValor${x}`).value;

        if( valor != ""){

            Arreglo [x] = valor; // traemos los valores del input
            
        } else{

            Arreglo[x] = `<span class="text-danger">No se ingreso número</span>`;
        }

    }
    MostrarValores();
}

function MostrarValores(){

    ClearDom();
    const MostrarvaloresUl = document.getElementById('MostrarArreglo');

    for(let x=0; x < Arreglo.length; x++){ // arreglo.length, lo que mide el arreglo

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item mt-3');
        li.innerHTML = `<p> Index: ${x} </p>  <p> Valor: ${Arreglo[x]} </p>`;
        MostrarvaloresUl.appendChild(li);
    }
}

//ParentNode tiene valores true and false, 
function ClearDom(){

    while(output.firstChild){

        output.firstChild.remove();
    }
    
}
