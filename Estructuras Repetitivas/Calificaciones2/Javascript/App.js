    const Contenedor = document.getElementById("contenedor");
    
    function EventListener() {
        
        const button = document.getElementById("MostrarInputs");
        button.addEventListener("click", MostrarInputs);
        
        //  const boton = document.getElementById('Calcularpromedios')
        //     .addEventListener('click', Calcularcalificaciones);
        // }
    }
    
    EventListener();
    
    function MostrarInputs() {
        
        for (let x = 1; x <= 10; x++) {
            
            const label = document.createElement("label");
            label.innerText = "Ingresa la calificacion del Alumno:";
            label.setAttribute('class', 'mt-3');
            Contenedor.appendChild(label);
            
            const input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("id", "Calificacion");
            input.setAttribute('type', 'number');
            Contenedor.appendChild(input);
            
            const label2 = document.createElement("label");
            label2.innerText = "Ingresa el sexo del alumno:";
            label2.setAttribute('class', 'mt-3');
            Contenedor.appendChild(label2);
            
            const input2 = document.createElement("input");
            input2.setAttribute("class", "form-control");
            input2.setAttribute("id", "Sexo");
            input2.setAttribute('type', 'text');
            Contenedor.appendChild(input2);    
        }

        boton = document.createElement("button");
        boton.setAttribute("class", "btn btn-outline-success btn-block mt-3");
        boton.setAttribute("id", "Calcularpromedios");
        boton.innerText = "Calcular promedios";
        Contenedor.appendChild(boton);
        
        const alert = document.createElement("div");
        alert.setAttribute("class", "alert alert-dark mt-3");
        alert.setAttribute("role", "alert");
        alert.setAttribute("id", "imprimirpromediomujeres");
        Contenedor.appendChild(alert);
        
        const alert2 = document.createElement("div");
        alert2.setAttribute("class", "alert alert-dark mt-3");
        alert2.setAttribute("role", "alert");
        alert2.setAttribute("id", "imprimirpromediohombres");
        Contenedor.appendChild(alert2);
        
        const alert3 = document.createElement("div");
        alert3.setAttribute("class", "alert alert-dark mt-3");
        alert3.setAttribute("role", "alert");
        alert3.setAttribute("id", "imprimirpromedioMayor");
        Contenedor.appendChild(alert3);
        
        const alert4 = document.createElement("div");
        alert4.setAttribute("class", "alert alert-dark mt-3");
        alert4.setAttribute("role", "alert");
        alert4.setAttribute("id", "imprimirpromedioglobal");
        Contenedor.appendChild(alert4);
    
    Calcularcalificaciones();
}

function Calcularcalificaciones() {
  let promediogeneral = 0,
    promediomujeresapro = 0,
    promediomujeresrepro = 0,
    promediomujeres = 0,
    promediohombresapro = 0,
    promediohombresrepro = 0,
    promediohombres = 0,
    Calificacion = 0,
    contadormujeres = 0,
    contadorhombres = 0;

  const PromedioMujeres = document.getElementById("imprimirpromediomujeres");
  const PromedioHombres = document.getElementById("imprimirpromediohombres");
  const PromedioMayor = document.getElementById("imprimirpromedioMayor");
  const PromedioGlobal = document.getElementById("imprimirpromedioglobal");

  Calificacion = document.getElementById("Calificacion").value;
  const Sexo = document.getElementById("Sexo");

  for (let x = 1; x<= 5; x++) {

    if (Sexo == "Mujer") {

      if (Calificacion >= 7 && Calificacion <= 10) {
        promediomujeresapro += Calificacion;
        contadormujeres++;
      } else {
        promediomujeresrepro += Calificacion;
        contadormujeres++;
      }

      promediomujeres = (promediomujeresapro + promediomujeresrepro) / contadormujeres;  
      PromedioMujeres.innerText = `El promedio total de las mujeres es: ${promediomujeres}`;
    //   alert.appendChild(PromedioMujeres);

    } else if (Sexo == "Hombre") {
      if (Calificacion >= 7 && Calificacion <= 10) {
        promediohombresapro += Calificacion;
        contadorhombres++;
      } else {
        promediohombresrepro += Calificacion;
        contadorhombres++;
      }
      promediohombres = (promediohombresapro + promediohombresrepro) / contadorhombres;
      PromedioHombres.innerText = `El promedio total de los hombres es: ${promediohombres}`;
    //   alert2.appendChild(PromedioMujeres);
    }

    if (promediomujeres > promediohombres) {
      PromedioMayor.innerText = `El promedio mas alto es el de Mujeres: ${promediomujeres}`;
    //   alert3.appendChild(PromedioMayor);
    } else {
      PromedioMayor.innerText = `El promedio mas alto es el de Hombres: ${promediohombres}`;
    //   alert3.appendChild(PromedioMayor);
    }
  }

  promediogeneral = (promediomujeres + promediohombres) / 2;
  PromedioGlobal.innerText = `El promedio global es: ${promediogeneral}`;
//   alert4.appendChild(PromedioGlobal);
}