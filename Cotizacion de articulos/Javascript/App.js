const button = document.getElementById('calcularpresupuesto');

button.addEventListener('click', totalarticulos);

function totalarticulos(){

    const articulo1 = Number(document.getElementById('precio1').value);
    const articulo2 = Number(document.getElementById('precio2').value);
    const articulo3 = Number(document.getElementById('precio3').value);
    const articulo4 = Number(document.getElementById('precio4').value);
    const presupuestos = Number(document.getElementById('presupuesto').value);

    let imprimir = document.getElementById('imprimirpresupuesto');

    let divimprimir;

    let sumaarticulos = articulo1 + articulo2 + articulo3 + articulo4;

    if(sumaarticulos > presupuestos){

        divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>El precio esta fuera del presupuesto</p></div>`;
    }
    else{
    divimprimir = `<div class="alert alert-secondary mt-3" role="alert"><p>El precio está dentro del presupuesto</p></div>`;
    }

    imprimir.innerHTML = divimprimir;
}
