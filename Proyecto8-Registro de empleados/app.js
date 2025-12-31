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
}

function verRegistros(){
    let area_resultados = document.querySelector("#resultados");
    let nombre = document.createElement('p');
    for(let item in empleados){
        nombre.textContent = "Nombre del empleado: "+empleados[item].nombre;
        area_resultados.appendChild(nombre);
    }

}