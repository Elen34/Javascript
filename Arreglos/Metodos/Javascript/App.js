/**
 * . length: la longitud del arreglo
 *  .push Agrega elementos a la ultima ultima posicion
 * Option 1 imprimir un 0 a los numeros impares 
 * Option 2 eliminar el ultimo elemento del array es con el elemento .pop
 * Option 3 Arregar un elemento desde el inicio es con la funcion unshit
 * Option 4 Quitar el elemento desde el inicio es con el metodo es shit
 * Option 5 Encontrar los elementos con valor 10 y regresamos la posicion con valor 10 
 * Si en un arreglo no encuentra un numero 10 coloca el index -1
 * Option 6 Ordenar un arreglo es el metodo .sort
 * Option 7 Mostrar Regresar un array invertido es con el metodo reverse()
 * Option 8 Todos los elementos del valor 5, se va a cambiar la palabra cinco, con el metodo splice para cambiar un valor por otro
 * * */

let array = [];
let outArray = [];
let imprimir = document.getElementById('imprimir');

EventListener();

function EventListener(){

    document
    .getElementById('size')
    .addEventListener('keypress', getsize);

    document
    .addEventListener('click', validarClick);

}

function getsize(e){ // Se puede agregar cualquier valor en un parametro

    if(e.key != "Enter") return;

    if(e.target.value == '') return;

    if(isNaN(e.target.value)) return;

    if(e.target.value <= 0) return;

    createArray(e.target.value);
    e.target.value = '';

}


function createArray(size){

    array = [];

    for(let i=0; i<size; i++){

        array.push(Math.floor(Math.random()* (11-1) + 1));
    }

    console.log(array); 

}

function validarClick(e){

    switch(e.target.id){  // key es el valor que estamos evaluando

        case 'Op1':

        for(let i=0;i<array.length; i++){

            if((i+1)% 2 == 0){

                outArray.push(0);

            }else{
                outArray.push(array[i]);
            }
        }console.log(outArray);
            break;
        
        case 'Op2':

            array.pop();
            console.log(array);
            break;

         case 'Op3':
            let random = Math.floor(Math.random() * (11 - 1) + 1);    
            array.unshift(random);
            console.log(array);
            break;

        case 'Op4':
            array.shift();
            console.log(array);
            break;
            
        case 'Op5':
            let indices = []; // declaramos una variable nueva
            let index = array.indexOf(10); //
            console.log(index);
               while(index != -1){
                  indices.push(index);
                  index = array.indexOf(10, index + 1)  
               }  
               console.log(indices); // nos regresa un array con la posicion del numero 10
               break;
               
        case 'Op6':

               //Numeros, Mayusculas, minusculas
               //ordena los arreglos 
               // 1Ricardo, RICARDO, ricardo
               console.log(array.sort());
               break;
         
        case 'Op7':
            
              console.log(array.reverse());
               break;
           
        case 'Op8':
            
           for(let i = 0; i< array.length; i++){

               if(array[i] == 5){
                   array.splice(i, 1, 'cinco');
                   //buscar la posicion 5, remplaza una posicion y lo cambiar por la palabra cinco
                } 
            }
            console.log(array);
            break;
         
        
            default:
               return;
               break;
    }

}