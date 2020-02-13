 let base;
 let altura;
 let resultado;


 let button=document.getElementById('boton');

 button.addEventListener('click', calcular);

 function calcular(){

     base = Number(document.getElementById('bases').value);
     altura = Number(document.getElementById('alturas').value);

     resultado = (base * altura) / 2;
     
     let ImprimirResultado = document.getElementById('ImprimirResultado'); 
     ImprimirResultado.innerText=resultado;

 }
