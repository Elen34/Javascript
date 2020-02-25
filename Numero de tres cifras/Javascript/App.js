const button = document.getElementById("determinarnum");

button.addEventListener("click", Calcularcifra);

function Calcularcifra() {

  const Numero = Number(document.getElementById("Numtrescif").value);

  let imprimir = document.getElementById("Verificarnumero");

  let divimprimir, entero1, decimal1, entero2, decimal2, entero3, decimal3;
 
    if(Numero > 99 && Numero < 1000)  {

        entero1 = Math.floor(Numero / 10);
        decimal1 = Numero % 10;
        console.log(entero1, decimal1);
        

        entero2 = Math.floor(entero1 / 10);
        decimal2 = entero1 % 10;
        console.log(entero2, decimal2);
        

        entero3 = Math.floor(entero2 / 10);
        decimal3 = entero2 % 10;
        console.log(entero3, decimal3);
        
        if(decimal1 == decimal3){

            divimprimir = `<div class="alert alert-success mt-3" role=alert><p>El número es igual al reves</p></div>`;
        }
  
     else{

        divimprimir = `<div class="alert alert-success mt-3" role=alert><p>El número no es igual al reves</p></div>`;
    }
}
else {
    divimprimir = `<div class="alert alert-success mt-3" role=alert><p>Ingresa sólo numero de tres digitos</p></div>`;
    
}
imprimir.innerHTML = divimprimir;
}