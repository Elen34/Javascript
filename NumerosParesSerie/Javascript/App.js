function eventlistened() {
  const button = document.getElementById("numerospares");
  button.addEventListener("click", verificarnumerospares);
}

eventlistened();

function verificarnumerospares() {

  const imprimir = document.getElementById("listapar");
  imprimir.innerHTML = '';
  
  for (let i = 0; i <= 100; i+=2) {
      
              const lista = document.createElement("li");
              lista.setAttribute("class", "list-group-item");
              lista.innerText = `${i}`;
              imprimir.appendChild(lista);  
    }
  }
