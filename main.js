const   formulario = document.getElementById('formulario');
const   newIntegrante = document.getElementById("btnAgregarIntegrante");

const   divAgregarI = document.createElement("div");
const   labelNom= document.createElement("label");
const   labelDni= document.createElement("label");
const   inputNom = document.createElement("input");
const   inputDni = document.createElement("input");
const   btnAgregar = document.createElement("button");

        divAgregarI.setAttribute("id","agregarIntegrante");
        divAgregarI.setAttribute("class","col-md-6 col-xl-4 p-2 border ronded-sm form-group");

        labelNom.setAttribute("for","nombre");
        labelNom.innerText = "Nombre Completo:";

        labelDni.setAttribute("for","dni");
        labelDni.innerText = "N° de DNI:";

        inputNom.setAttribute("type","text");
        inputNom.setAttribute("class","form-control");
        inputNom.setAttribute("id","nombre");
        inputNom.setAttribute("placeholder","Tal y como aparece en el documento");

        inputDni.setAttribute("type","texto");
        inputDni.setAttribute("class","form-control");
        inputDni.setAttribute("id","dni");
        inputDni.setAttribute("placeholder","XXXXXXXX");

        btnAgregar.setAttribute("id","agregar");
        btnAgregar.setAttribute("type","button");
        btnAgregar.setAttribute("class","btn btn-primary");
        btnAgregar.innerText="Agregar";

divAgregarI.appendChild(labelNom);
divAgregarI.appendChild(inputNom);
divAgregarI.appendChild(labelDni);
divAgregarI.appendChild(inputDni);
divAgregarI.appendChild(btnAgregar);

newIntegrante.onclick = function(){
    //esto se ejecutaría mientras NO haya ningun div con id "agregarIntegrante"
    console.log("click en agregar integrante (para agregar datos)");
    const familiares = document.getElementById("familiares");
    familiares.appendChild(divAgregarI);
    /* document.getElementById("familiares").innerHTML +=
    '<div id="agregarIntegrante" class="col-md-6 col-xl-4 p-2 border ronded-sm form-group"> <label for="nombre">Nombre Completo:</label> 
    <input type="text" class="form-control" id="nombre"> <label for="dni">Numero de DNI:</label> 
    <input type="text" class="form-control" id="dni"> <button id="agregar" type="button" class="btn btn-primary">Agregar</button> </div>'
 */};

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