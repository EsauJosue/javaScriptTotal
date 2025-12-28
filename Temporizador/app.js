const tiempo = document.querySelector("#inputTiempo");
const status = document.querySelector("#Status");


function comenzarTiempo(){
    setTimeout(tiempoCumplido, 1000 * tiempo.value);
    status.textContent = "Encendido";
    status.style.color = "green";
}
function tiempoCumplido(){
    status.textContent = "Se terminó el tiempo";
    status.style.color = "red";
    
}