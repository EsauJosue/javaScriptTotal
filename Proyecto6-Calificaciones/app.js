let nombre = "";
let espanol = "";
let matematicas = "";
let historia ="";
let geografia = "";

function lectura(){
    nombre = prompt("Ingrese el nombre del estudiante");
    espanol = prompt("Ingrese la calificación de Español");
    matematicas = prompt("Ingrese la calificación de Matemáticas");
    historia = prompt("Ingrese la calificación de Historia");
    geografia = prompt("Ingrese la calificación de Geografía");

}
function verCalificaciones(){
    let resultado = document.querySelector(".resultado");
    let calificaciones = [espanol, matematicas, historia, geografia];
    let parrafo = document.createElement("h2");
    parrafo.innerHTML = "Nombre del estudiante: "+nombre;
    resultado.appendChild(parrafo);
    for(let x = 0; x< calificaciones.length; x++){
        let parrafo = document.createElement("p");
        switch(calificaciones[x]){
            case calificaciones[0]:
                parrafo.innerHTML = "Español..."+ calificaciones[x] + "<br>";
                resultado.appendChild(parrafo);
                break;
            case calificaciones[1]:
                parrafo.innerHTML = "Matemáticas..."+ calificaciones[x] + "<br>";
                resultado.appendChild(parrafo);
                break;
            case calificaciones[2]:
                parrafo.innerHTML = "Historia..."+ calificaciones[x] + "<br>";
                resultado.appendChild(parrafo);
                break;
            case calificaciones[3]:
                parrafo.innerHTML = "Geografía..."+ calificaciones[x] + "<br>";
                resultado.appendChild(parrafo);
                break;
        }
    }
    

}
function verPromedio(){
    let resultado = document.querySelector(".resultado");
    let calificaciones = [+espanol, +matematicas, +historia, +geografia];
    let suma = 0;
    let promedio = 0;
    for(let calificacion of calificaciones ){
        suma += calificacion;
    }
    console.log(suma);

    promedio = suma / 4;
    let informe = document.createElement("h3");
    informe.innerHTML = "El promedio del estudiante es: " + promedio;
    resultado.appendChild(informe); 
}
function verCalificacionAlta(){
    let resultado = document.querySelector(".resultado");
    let calificaciones = [+espanol, +matematicas, +historia, +geografia];
    let masAlta = 0;
    for(let calificacion of calificaciones){
        if(masAlta < calificacion){
            masAlta = calificacion;
        }
    }
    let informe = document.createElement("h3");
    informe.innerHTML = "La calificación mas alta es de: " + masAlta;
    resultado.appendChild(informe); 
}
function verReprobadas(){
    let resultado = document.querySelector(".resultado");
    let calificaciones = [+espanol, +matematicas, +historia, +geografia];
    for(let x = 0; x< calificaciones.length; x++){
        let parrafo = document.createElement("p");
        if(calificaciones[x] < 6){
            switch(calificaciones[x]){
                case calificaciones[0]:
                    parrafo.innerHTML = "Español..."+ calificaciones[x] + "<br>";
                    resultado.appendChild(parrafo);
                    break;
                case calificaciones[1]:
                    parrafo.textContent = "Matemáticas..."+ calificaciones[x] + "<br>";
                    resultado.appendChild(parrafo);
                    break;
                case calificaciones[2]:
                    parrafo.innerHTML = "Historia..."+ calificaciones[x] + "<br>";
                    resultado.appendChild(parrafo);
                    break;
                case calificaciones[3]:
                    parrafo.innerHTML = "Geografía..."+ calificaciones[x] + "<br>";
                    resultado.appendChild(parrafo);
                    break;
            }
        }
       
    }

}