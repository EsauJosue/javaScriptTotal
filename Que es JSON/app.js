let datosJson;
let xhr = new XMLHttpRequest();
xhr.open('GET', "persona.json", true)
xhr.responseType = 'json';
xhr.onload = function(){
    if(xhr.status === 200){
        datosJson = xhr.response;
        let elementoTexto = document.querySelector("#nombre");
        elementoTexto.textContent = datosJson.nombre;
    }else{
        alert("Error");
    }
}
xhr.send();
