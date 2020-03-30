function EventListener() {
    const button = document.getElementById("btnPromedio");
    button.addEventListener("click", Calcularcalificaciones);
  }
  
  EventListener();

  function Calcularcalificaciones(){

    let promediogeneral = 0, promediomujeresapro=0, promediomujeresrepro=0, promediomujeres=0,
    promediohombresapro = 0, promediohombresrepro=0, promediohombres=0, Calificacion=0, 
    contadormujeres=0, contadorhombres=0;

    const PromedioMujeres = document.getElementById('imprimirpromediomujeres');
    const PromedioHombres = document.getElementById('imprimirpromediohombres');
    const PromedioMayor = document.getElementById('imprimirpromedioMayor');
    const PromedioGlobal = document.getElementById('imprimirpromedioglobal');
 
      for(let x=1; x<=20; x++){
          
          Calificacion = Number(prompt('Ingresa una calificación'));
          const Sexo = (prompt('Ingrese el sexo del alumno')); 

          if(Sexo == 'Mujer'){

            if(Calificacion>=7 && Calificacion<=10){

                promediomujeresapro += Calificacion; 
                contadormujeres++;                   
              }
              else{
                promediomujeresrepro += Calificacion;
                contadormujeres++; 
            }
            
            promediomujeres = (promediomujeresapro + promediomujeresrepro) / contadormujeres;
            PromedioMujeres.innerText = `El promedio total de las mujeres es: ${promediomujeres}`;  
          }

          else if(Sexo == 'Hombre'){
            
            if(Calificacion>=7 && Calificacion<=10){
              
              promediohombresapro += Calificacion;
              contadorhombres++;
              
            }else{
              
              promediohombresrepro += Calificacion;
              contadorhombres++;
            }    
            promediohombres = (promediohombresapro + promediohombresrepro) / contadorhombres;
            PromedioHombres.innerText = `El promedio total de los hombres es: ${promediohombres}`;  
          }    
    
          if(promediomujeres > promediohombres){
            
            PromedioMayor.innerText = `El promedio mas alto es el de Mujeres: ${promediomujeres}`; 
            
          } else{
  
            PromedioMayor.innerText = `El promedio mas alto es el de Hombres: ${promediohombres}`; 
          }  
  
        }
        
        promediogeneral = (promediomujeres + promediohombres)/2;
        PromedioGlobal.innerText = `El promedio global es: ${promediogeneral}`;      
      }
