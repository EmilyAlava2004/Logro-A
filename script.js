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
               <button onclick="eliminar(${cop})" type="button" class="btn btn-danger">Eliminar</button >
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
function eliminar(cop){
    list.splice(cop,1);
    mostrar();
    }

    function buscar(){
        return  document.getElementById("filtrar").value;
    }
    
    document.getElementById("btn2").addEventListener("click" , function(){
        console.log("Button clicked");
        var todo =  document.getElementById("mostrar");
        todo.innerHTML ="";
        if(buscar()===""){
            console.log("No filter applied");
            list.forEach((pers, cop) =>{
                todo.innerHTML +=  `<tr> 
                <td>${pers.nombre}</td>
                <td>${pers.telefono}</td>
                <td>${pers.correo}</td>
                <td>${pers.etiqueta}</td>
                <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
                 <button onclick="eliminar(${cop})" type="button" class="btn btn-danger">Eliminar</button >
                <button onclick="editar(${cop})" type="button" clas="btn btn-warning">Editar</button>
                </div>
                </td>
           </tr> `;
            } )
        }else{
            var filtroo = list.filter((per) =>  per.nombre === buscar());
            filtroo.forEach((flt,cop) =>{
                console.log("Adding filtered persona to table:", flt);
                todo.innerHTML +=  `<tr> 
                <td>${flt.nombre}</td>
                <td>${flt.telefono}</td>
                <td>${flt.correo}</td>
                <td>${flt.etiqueta}</td>
                <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
                 <button onclick="eliminar(${cop})" type="button" class="btn btn-danger">Eliminar</button >
                <button onclick="editar(${cop})" type="button" clas="btn btn-warning">Editar</button>
                </div>
                </td>
           </tr> `;
         })}
        })