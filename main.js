const   formulario = document.getElementById('formulario');
const   inputs = document.querySelectorAll('#formulario input');
const   newIntegrante = document.getElementById("btnAgregarIntegrante");
const   familiares = document.getElementById("familiares");

const regex = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    dni: /^\d{7,9}$/}

const campos = {
	nombre: false,
	dni: false
}

const validarDatos = (e) => {
    console.log("Entra a validarDatos");
	switch (e.target.name) {
		case "nombre":
            console.log("Entra a validarDatos case nombre");
			validarCampo(regex.nombre, e.target, e.target.name);
		break;
		case "dni":
            console.log("Entra a validarDatos case dni");
            validarCampo(regex.dni, e.target, e.target.name);
        break;
	}
}

const validarCampo = (expresion, input, campo) => {
    console.log("Entra a validarCampo");
	if(expresion.test(input.value)){
    console.log("Entra a validarCampo if");
		document.getElementById(campo).classList.remove('text-danger');
		document.getElementById(campo).classList.remove('border-danger');
		document.getElementById(campo).classList.add('border-success');
		document.getElementById(campo).classList.add('text-success');
		/* document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo'); */
		campos[campo] = true;
	} else {
		document.getElementById(campo).classList.add('border-danger');
		document.getElementById(campo).classList.add('text-danger');
		document.getElementById(campo).classList.remove('text-success');
		document.getElementById(campo).classList.remove('border-success');
		/* document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo'); */
		campos[campo] = false;
	}
}

newIntegrante.onclick = function(){
    console.log("click en agregar integrante (para agregar datos)");
    
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
    inputNom.setAttribute("name","nombre");
    inputNom.setAttribute("placeholder","Tal y como aparece en el documento");

    inputDni.setAttribute("type","text");
    inputDni.setAttribute("class","form-control");
    inputDni.setAttribute("id","dni");
    inputDni.setAttribute("name","dni");
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

    familiares.append(divAgregarI);
    const agregar = document.getElementById('agregar');

    const   inputsFam = document.querySelectorAll('#familiares input');

    inputsFam.forEach((input) => {
        input.addEventListener('keyup', validarDatos);
        input.addEventListener('blur', validarDatos);
    });

    agregar.onclick = function(){
        if (campos.nombre && campos.dni){
            console.log("click en agregar (datos ya cargados)");
        const nombre = inputNom.value;
        const dni = inputDni.value;

        const divPariente = document.createElement("div");
        const pNomYDni = document.createElement("p");
        const divFrente = document.createElement("div");
        const divDorso = document.createElement("div");
        const labelFrente = document.createElement("label");
        const labelDorso = document.createElement("label");
        const inputFrente = document.createElement("input");
        const inputDorso = document.createElement("input");

        divPariente.setAttribute(
            "class",
            "col-md-6 col-xl-4 p-2 border ronded-sm"
        );
        divFrente.setAttribute("class", "custom-file mb-1");
        divDorso.setAttribute("class", "custom-file mb-1");

        pNomYDni.setAttribute("class", "text-uppercase h6");

        labelFrente.setAttribute("for", "dnititularfrente");
        labelFrente.setAttribute("class", "custom-file-label");
        labelFrente.innerText = "Frente";

        labelDorso.setAttribute("class", "custom-file-label");
        labelDorso.setAttribute("for", "dnititulardorso");
        labelDorso.innerText = "Dorso";

        inputFrente.setAttribute("type", "file");
        inputFrente.setAttribute("class", "custom-file-input");

        inputDorso.setAttribute("type", "file");
        inputDorso.setAttribute("class", "custom-file-input");
        
        pNomYDni.innerText = nombre + ", "+ dni;

        divFrente.appendChild(labelFrente);
        divFrente.appendChild(inputFrente);
        divDorso.appendChild(inputDorso);
        divDorso.appendChild(labelDorso);
        divPariente.appendChild(pNomYDni);
        divPariente.appendChild(divFrente);
        divPariente.appendChild(divDorso);

        divPariente.setAttribute("id",dni);

        familiares.replaceChild(divPariente,divAgregarI)
        }
        else{
            const noAgregado = document.createElement("div");
            const close = document.createElement("button");
            const span = document.createElement("span");

            noAgregado.setAttribute("class", " alert alert-danger alert-dismissible fade show");
            noAgregado.setAttribute("role", "alert");
            close.setAttribute("type", "button");
            close.setAttribute("class", "close");
            close.setAttribute("data-dismiss", "alert");
            close.setAttribute("aria-label", "Close");
            span.setAttribute("aria-hidden", "true");

            span.innerHTML ="&times;";
            noAgregado.innerText ="Integrante no agregado, revise que todos los campos sean correctos";
            
            close.appendChild(span);
            noAgregado.appendChild(close);

            familiares.appendChild(noAgregado)
        }
        
    }
};

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
})