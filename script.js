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
    list.forEach((per)=>{
        mostrar.innerHTML += 
        `<tr> 
              <td>${per.nombre}</td>
              <td>${per.telefono}</td>
              <td>${per.correo}</td>
              <td>${per.etiqueta}</td>
         </tr> `    
    })
}
