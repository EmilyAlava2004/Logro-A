function person(nombre,telefono,correo,etiqueta){
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.etiqueta = etiqueta;
}
let list =[];
function agg(){
    list.push(new person(
        document.getElementById("nombre").value,
        document.getElementById('telefono').value,
        document.getElementById('correo').value,
        document.getElementById('etiqueta').value,
    ));
    mostrar();
}
function mostrar(){
    document.getElementById('btn1');
    var mostrar = document.getElementById('mostrar');
    mostrar.innerHTML='';
    list.forEach((per, cop)=>{
        mostrar.innerHTML += 
        `<tr> 
              <td>${per.nombre}</td>
              <td>${per.telefono}</td>
              <td>${per.correo}</td>
              <td>${per.etiqueta}</td>
              <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button onclick="editar(${cop})" type="button" clas="btn btn-warning">Editar</button>
              </div>
              </td>
         </tr> `    
    })
}

function editar(cop){
    list.splice(cop,1,{
        nombre:document.getElementById('nombre').value,
        telefono:document.getElementById('telefono').value,
        correo:document.getElementById('correo').value,
        etiqueta:document.getElementById('etiqueta').value
    });
    mostrar();
}