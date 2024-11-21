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
}
