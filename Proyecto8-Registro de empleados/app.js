let empleados = [];

function Empleado(legajo, nombre, apellido, fecha, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.cargo = cargo; 
}
function guardarRegistro(){
    let legajo = document.querySelector("#legajo").value;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let fechaNac = document.querySelector("#fecha").value;
    let cargo = document.querySelector("#cargo").value;

    let object = new Empleado(legajo,nombre,apellido,fechaNac, cargo);

    empleados.push(object);
    alert("Se ha registrado el empleado");

    limparCampos();
}

function verRegistros(){

    let area_resultados = document.querySelector("#resultados");
    area_resultados.innerHTML = "";
    let legajo, nombre, apellido, cargo, fecha, resultado;
    for(let item in empleados){
        resultado = document.createElement("div");
        resultado.className = "ItemBox";
        nombre = document.createElement("p");
        legajo = document.createElement("p");
        apellido = document.createElement("p");
        cargo = document.createElement("p");
        fecha = document.createElement("p");
        legajo.innerHTML = "<strong>Legajo:</strong> "+empleados[item].legajo;
        nombre.innerHTML = "<strong>Nombre:</strong>  "+empleados[item].nombre;
        apellido.innerHTML = "<strong>Apellido:</strong> "+empleados[item].apellido;
        fecha.innerHTML = "<strong>Fecha de nacimiento: </strong>"+empleados[item].fecha;
        cargo.innerHTML = "<strong>Cargo:</strong> "+empleados[item].cargo;
        resultado.appendChild(legajo);
        resultado.appendChild(nombre);
        resultado.appendChild(apellido);
        resultado.appendChild(cargo);
        resultado.appendChild(fecha);
        area_resultados.appendChild(resultado);
    }

}
function limparCampos(){
    let legajo = document.querySelector("#legajo");
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let fechaNac = document.querySelector("#fecha");
    let cargo = document.querySelector("#cargo");
    legajo.value ="";
    nombre.value="";
    apellido.value="";
    fechaNac.value = "";
    cargo.value = "";
}