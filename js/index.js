function eliminar(value){
   const fila = document.getElementsByClassName("elementos")[value];   
   const confirmacion = confirm("¿Estas seguro que quieres eliminar esta fila?");
   if(confirmacion){
      while(fila.childElementCount > 0 ){
         fila.removeChild(fila.lastChild);
      }
      alert("Eliminacion Exitosa");
   }
   else{
      alert("Eliminacion Cancelada");
   }
}

function modificar(value){
   const fila = document.getElementsByClassName("elementos")[value];
   const confirmacion = confirm("¿Estas seguro que quieres modificar esta fila?")
   if(confirmacion){
      let nuevoId = prompt("Ingrese un nuevo id: ");
      while(nuevoId == "" || nuevoId == " "){
         nuevoId = prompt("Vuelva a Intentarlo. Ingrese un nuevo id: ");
      }
      fila.getElementsByTagName("td")[0].textContent = nuevoId;

      let nuevoItem = prompt("Ingrese un nuevo item: ");
      while(nuevoItem == "" || nuevoItem == " "){
         nuevoItem = prompt("Vuelva a Intentarlo. Ingrese un nuevo item: ");
      }
      
      fila.getElementsByTagName("td")[1].textContent = nuevoItem;
      alert("La Modificacion ha sido Exitosa")
   }
   else{
      alert("Modificacion Cancelada");
   }
}

function crear(){
   const tabla = document.getElementsByClassName("tabla")[0];
   const fila = document.getElementsByClassName("elementos");
   let indice = fila.length;
   
   const crearFila = document.createElement("tr");
   const id = document.createElement("td");
   const description = document.createElement("td");
   const botones = document.createElement("td");

   crearFila.className = "elementos";
   id.className = "id";
   id.scope = "row";
   description.className = "item";
   botones.innerHTML = "<button class='bt delete' onclick='eliminar("+ indice+")'>Eliminar</button> <button class='bt modificar' onclick='modificar("+indice+")'>Modificar</button>"
   
   id.textContent = indice+1;
   description.textContent = "Elemento " + (indice + 1);

   crearFila.appendChild(id);
   crearFila.appendChild(description);
   crearFila.appendChild(botones);


   tabla.childNodes[1].appendChild(crearFila);
}