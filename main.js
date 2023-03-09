const   formulario = document.getElementById('formulario');
const   newIntegrante = document.getElementById("btnAgregarIntegrante");

const   divAgregarI = document.createElement("div");
const   labelNom= document.createElement("label");
const   labelDni= document.createElement("label");
const   inputNom = document.createElement("input");
const   inputDni = document.createElement("input");
const   btnAgregar = document.createElement("button");

const   divPariente = document.createElement("div");
const   pNomYDni = document.createElement("p");
const   divFrente = document.createElement("div");
const   divDorso = document.createElement("div");
const   labelFrente = document.createElement("label");
const   labelDorso = document.createElement("label");
const   inputFrente = document.createElement("input");
const   inputDorso = document.createElement("input");

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

        inputDni.setAttribute("type","text");
        inputDni.setAttribute("class","form-control");
        inputDni.setAttribute("id","dni");
        inputDni.setAttribute("placeholder","XXXXXXXX");

        btnAgregar.setAttribute("id","agregar");
        btnAgregar.setAttribute("type","button");
        btnAgregar.setAttribute("class","btn btn-primary");
        btnAgregar.innerText="Agregar";


        divPariente.setAttribute("class","col-md-6 col-xl-4 p-2 border ronded-sm");
        divFrente.setAttribute("class","custom-file mb-1");
        divDorso.setAttribute("class","custom-file mb-1");

        pNomYDni.setAttribute("class","text-uppercase h6");

        labelFrente.setAttribute("for","dnititularfrente");
        labelFrente.setAttribute("class","custom-file-label");
        labelFrente.innerText="Frente";

        labelDorso.setAttribute("class","custom-file-label");
        labelDorso.setAttribute("for","dnititulardorso");
        labelDorso.innerText="Dorso";

        inputFrente.setAttribute("type","file");
        inputFrente.setAttribute("class","custom-file-input");

        inputDorso.setAttribute("type","file");
        inputDorso.setAttribute("class","custom-file-input");

divAgregarI.appendChild(labelNom);
divAgregarI.appendChild(inputNom);
divAgregarI.appendChild(labelDni);
divAgregarI.appendChild(inputDni);
divAgregarI.appendChild(btnAgregar);

newIntegrante.onclick = function(){
    console.log("click en agregar integrante (para agregar datos)");
    const familiares = document.getElementById("familiares");
    familiares.appendChild(divAgregarI);
    const agregar = document.getElementById('agregar');
    agregar.onclick = function(){
        console.log("click en agregar (datos ya cargados)");
        const nombre = inputNom.value;
        const dni = inputDni.value;
        pNomYDni.innerText = nombre + ", "+ dni;

        divFrente.appendChild(labelFrente);
        divFrente.appendChild(inputFrente);
        divDorso.appendChild(inputDorso);
        divDorso.appendChild(labelDorso);
        divPariente.appendChild(pNomYDni);
        divPariente.appendChild(divFrente);
        divPariente.appendChild(divDorso);

        familiares.replaceChild(divPariente,divAgregarI);
    }
};

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
})