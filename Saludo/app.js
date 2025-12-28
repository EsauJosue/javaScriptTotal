function mostrarTexto(){
    let nombre = document.querySelector("#nombre").value;
    let elementoTexto = document.querySelector("#salida");
    elementoTexto.textContent = nombre;
}