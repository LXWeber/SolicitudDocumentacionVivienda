const   formulario = document.getElementById('formulario');
const   inputs = document.querySelectorAll('#formulario input');
const   newIntegrante = document.getElementById("btnAgregarIntegrante");
const   familiares = document.getElementById("familiares");

const regex = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
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
		campos[campo] = true;
	} else {
		document.getElementById(campo).classList.add('border-danger');
		document.getElementById(campo).classList.add('text-danger');
		document.getElementById(campo).classList.remove('text-success');
		document.getElementById(campo).classList.remove('border-success');
		campos[campo] = false;
	}
}

/////////////////Boton Agregar Integrante DNI//////////////////////
newIntegrante.onclick = function(){
    let msjError = false
    newIntegrante.disabled = true;
    console.log("click en agregar integrante (para agregar datos)");
    
    const   divAgregarI = document.createElement("div");
    const   divInterno = document.createElement("div");
    const   labelNom= document.createElement("label");
    const   labelDni= document.createElement("label");
    const   inputNom = document.createElement("input");
    const   inputDni = document.createElement("input");
    const   btnAgregar = document.createElement("button");

    divAgregarI.setAttribute("id","agregarIntegrante");
    divAgregarI.setAttribute("class","col-md-6 col-xl-4");
    
    divInterno.setAttribute("class","p-2 border rounded form-group")

    labelNom.setAttribute("for","nombre");
    labelNom.setAttribute("class","mb-0");
    labelNom.innerText = "Nombre Completo:";

    labelDni.setAttribute("for","dni");
    labelDni.setAttribute("class","mb-0 mt-2");
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
    btnAgregar.setAttribute("class","btn btn-primary m-1");
    btnAgregar.innerText="Agregar";

    divInterno.appendChild(labelNom);
    divInterno.appendChild(inputNom);
    divInterno.appendChild(labelDni);
    divInterno.appendChild(inputDni);
    divInterno.appendChild(btnAgregar);
    divAgregarI.appendChild(divInterno);

    familiares.append(divAgregarI);
    const agregar = document.getElementById('agregar');

    const inputsFam = document.querySelectorAll('#familiares input');

    inputsFam.forEach((input) => {
        input.addEventListener('keyup', validarDatos);
        input.addEventListener('blur', validarDatos);
    });

    agregar.onclick = function(){
        if (campos.nombre && campos.dni){
            campos.nombre = false;
            campos.dni = false;
            newIntegrante.disabled = false;
            
            const nombre = inputNom.value;
            const dni = inputDni.value;
            
            familiares.replaceChild(dniDOM (nombre,dni),divAgregarI)
            const keys = Object.keys(secciones);
            for(let i=0; i<keys.length; i++){
                document.getElementById((secciones[keys[i]])).appendChild(motivosDOM (nombre,dni,(secciones[keys[i]])));
            }
            
            if(msjError){familiares.removeChild(noAgregado)}
        }
        else if(!msjError){
            msjError = true;
            const noAgregado = document.createElement("div");
            const close = document.createElement("button");
            const span = document.createElement("span");

            noAgregado.setAttribute("class", "col-12 alert alert-danger alert-dismissible fade show");
            noAgregado.setAttribute("id", "noAgregado");
            noAgregado.setAttribute("role", "alert");
            close.setAttribute("type", "button");
            close.setAttribute("class", "close");
            close.setAttribute("id", "cerrarMensaje");
            close.setAttribute("data-dismiss", "alert");
            close.setAttribute("aria-label", "Close");
            span.setAttribute("aria-hidden", "true");

            span.innerHTML ="&times;";
            noAgregado.innerText ="Integrante no agregado, revise que todos los campos sean correctos";
            
            close.appendChild(span);
            noAgregado.appendChild(close);

            familiares.appendChild(noAgregado)

            document.getElementById('cerrarMensaje').addEventListener('click',function(){
                msjError = false;
            });
        }
        else{
            noAgregado.classList.remove("blink");
            noAgregado.offsetWidth;
            noAgregado.classList.add("blink");
        };
    }
}

function dniDOM (nombre,dni){
    const divPariente = document.createElement("div");
    const divInterno = document.createElement("div");
    const pNomYDni = document.createElement("p");
    const divFrente = document.createElement("div");
    const divDorso = document.createElement("div");
    const labelFrente = document.createElement("label");
    const labelDorso = document.createElement("label");
    const inputFrente = document.createElement("input");
    const inputDorso = document.createElement("input");

    divPariente.setAttribute("class","col-md-6 col-xl-4");
    divFrente.setAttribute("class", "custom-file mb-1");
    divDorso.setAttribute("class", "custom-file mb-1");

    divInterno.setAttribute("class","p-2 border rounded form-group")

    pNomYDni.setAttribute("class", "text-uppercase h6");

    labelFrente.setAttribute("for", "dnititularfrente");
    labelFrente.setAttribute("class", "custom-file-label");
    labelFrente.innerText = "Frente";

    labelDorso.setAttribute("class", "custom-file-label");
    labelDorso.setAttribute("for", "dnititulardorso");
    labelDorso.innerText = "Dorso";

    inputFrente.setAttribute("type", "file");
    inputFrente.setAttribute("id", "dnititularfrente");
    inputFrente.setAttribute("class", "custom-file-input");

    inputDorso.setAttribute("type", "file");
    inputDorso.setAttribute("id", "dnititulardorso");
    inputDorso.setAttribute("class", "custom-file-input");

    pNomYDni.innerText = nombre + ", "+dni+":";

    divFrente.appendChild(labelFrente);
    divFrente.appendChild(inputFrente);
    divDorso.appendChild(inputDorso);
    divDorso.appendChild(labelDorso);
    divInterno.appendChild(pNomYDni);
    divInterno.appendChild(divFrente);
    divInterno.appendChild(divDorso);
    divPariente.appendChild(divInterno);

    divPariente.setAttribute("id",dni);

    return(divPariente);
}

function motivosDOM(nombre,dni,seccion){
    const divExterno = document.createElement("div");
    const divInterno = document.createElement("div");
    const pNomYDni = document.createElement("p");
    const divFile = document.createElement("div");
    const inputFile = document.createElement("input");
    const labelFile = document.createElement("label");
    const divCheck = document.createElement("div");
    const inputCheck = document.createElement("input");
    const labelCheck = document.createElement("label");
    const divMoti = document.createElement("div");
    const inputMoti = document.createElement("input");

    divExterno.setAttribute("class","col-md-6 col-xl-4");
    divInterno.setAttribute("class","p-2 border rounded");
    pNomYDni.setAttribute("class","text-uppercase h6");

    divFile.setAttribute("class","custom-file mb-1");
    inputFile.setAttribute("class","custom-file-input");
    inputFile.setAttribute("type","file");
    inputFile.setAttribute("id","file_"+seccion+"_"+dni);
    labelFile.setAttribute("class","custom-file-label");
    labelFile.setAttribute("for","file_"+seccion+"_"+dni);

    divCheck.setAttribute("class","custom-control custom-switch my-2");
    inputCheck.setAttribute("class","custom-control-input");
    inputCheck.setAttribute("type","checkbox");
    inputCheck.setAttribute("id","check_"+seccion+"_"+dni);
    inputCheck.setAttribute("data-toggle","collapse");
    inputCheck.setAttribute("data-target","#divMot_"+seccion+"_"+dni);
    labelCheck.setAttribute("for","check_"+seccion+"_"+dni);
    labelCheck.setAttribute("class","custom-control-label");

    divMoti.setAttribute("class","collapse");
    divMoti.setAttribute("id","divMot_"+seccion+"_"+dni);
    inputMoti.setAttribute("id","mot_"+seccion+"_"+dni);
    inputMoti.setAttribute("type","text");
    inputMoti.setAttribute("class","form-control form-control-sm mb-3");
    inputMoti.setAttribute("placeholder","Motivo");

    pNomYDni.innerText = nombre + ", "+dni+":";

    divMoti.appendChild(inputMoti);
    divCheck.appendChild(inputCheck);
    divCheck.appendChild(labelCheck);
    divFile.appendChild(inputFile);
    divFile.appendChild(labelFile);
    divInterno.appendChild(pNomYDni);
    divInterno.appendChild(divFile);
    divInterno.appendChild(divCheck);
    divInterno.appendChild(divMoti);
    divExterno.appendChild(divInterno);

    return(divExterno);
}

const checkCorresponde = (e) =>{
    console.log(e.target.id);
    if(e.target.id.startsWith("check_")){
        let arrayDni = e.target.id.match(/(\d)/g).join('');
        let dni = arrayDni.toString();
        const keys = Object.keys(secciones);
        let seccion="";
        for(let i=0; i<keys.length; i++){
            if(e.target.id.includes(secciones[keys[i]])){
                seccion = secciones[keys[i]];
            }
        }
        console.log(dni);
            if(e.target.checked){
                document.getElementById("mot_"+seccion+"_"+dni).disabled = false;
                document.getElementById("mot_"+seccion+"_"+dni).value = "";
                document.getElementById("file_"+seccion+"_"+dni).disabled = true;
                document.getElementById("file_"+seccion+"_"+dni).value = "";
            }else{
                document.getElementById("mot_"+seccion+"_"+dni).disabled = true;
                document.getElementById("mot_"+seccion+"_"+dni).value = "";
                document.getElementById("file_"+seccion+"_"+dni).disabled = false;
                document.getElementById("file_"+seccion+"_"+dni).value = "";
            }
    }
}

const secciones = {
	1: "ingresos",
	2: "residencia",
	3: "catastro",
}

inputs.forEach((input) => {
	input.addEventListener('click', checkCorresponde);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
})