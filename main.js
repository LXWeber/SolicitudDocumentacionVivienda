const formulario = document.getElementById('formulario');
const newIntegrante = document.getElementById("btnAgregarIntegrante");
newIntegrante.onclick = function(){
    //esto se ejecutaría mientras NO haya ningun div con id "agregarIntegrante"
    console.log("click en agregar integrante (para agregar datos)");
    document.getElementById("familiares").innerHTML +=
    '<div id="agregarIntegrante" class="col-md-6 col-xl-4 p-2 border ronded-sm form-group"> <label for="nombre">Nombre Completo:</label> <input type="text" class="form-control" id="nombre"> <label for="dni">Numero de DNI:</label> <input type="text" class="form-control" id="dni"> <button id="agregar" type="button" class="btn btn-primary">Agregar</button> </div>'
};

document.getElementById("agregar").onclick = function(){
    console.log("click en agregar (datos ya cargados)");
    document.getElementById("agregarIntegrante").innerHTML = "";
    //falta ELIMINAR el div agregarIntegrante
    const agregarIntegrante = document.getElementById("agregarIntegrante");
    //falta el comportamiento que agregue la tarjeta para poder ingresar los archivos del integrante
}

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
})