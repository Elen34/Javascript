const button = document.getElementById('determinarnum');

button.addEventListener('click', Calcularcifra);

function Calcularcifra() {

  const Numero = Number(document.getElementById('Numcapicua').value);

  let imprimir = document.getElementById('Verificarnumero');

  let divimprimir, entero1, decimal1, entero2, decimal2, entero3, decimal3, entero4, decimal4;

  if(Numero >= 10  && Numero < 100){

    entero1 = Math.floor(Numero/10);
    decimal1 = Numero % 10;

    console.log(entero1, decimal1);

      if(entero1 == decimal1){
        divimprimir = `<div class="alert alert-dark mt-3" role="role"><p>El número ${Numero} es capicua</p></div>`
      }else{
        divimprimir = `<div class="alert alert-dark mt-3" role="role"><p>El número ${Numero} no es capicua</p></div>`
      }


} else if(Numero < 1000){

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

  divimprimir = `<div class="alert alert-dark mt-3" role="role"><p>El número ${Numero} es capicua</p></div>`

} else {

  divimprimir = `<div class="alert alert-dark mt-3" role="role"><p>El número ${Numero} no es capicua</p></div>`

}

} else if(Numero <= 9999){

  entero1 = Math.floor(Numero / 10);
  decimal1 = Numero % 10;

  console.log(entero1, decimal1);
  
  entero2 = Math.floor(entero1 / 10);
  decimal2 = entero1 % 10;

  console.log(entero2, decimal2);

    entero3 = Math.floor(entero2 / 10);
    decimal3 = entero2 % 10;

  console.log(entero3, decimal3);
  
    entero4 = Math.floor(entero3/10);
    decimal4 = entero3 % 10;

  console.log(entero4, decimal4);
  
  if(decimal1 == decimal4 && decimal2 == decimal3){

    divimprimir = `<div class="alert alert-dark mt-3" role="role"><p>El número ${Numero}  es capicua</p></div>`
 
  }
  else{

    divimprimir = `<div class="alert alert-dark mt-3" role="role"><p>El número ${Numero} no es capicua</p></div>`
  
  }

}
    imprimir.innerHTML = divimprimir; 
}