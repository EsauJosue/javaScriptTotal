let tiempoTerminado;
let intervaloDeTiempo;

function iniciar(){
    tiempoTerminado = setTimeout(tiempoCumplido, 3000);
    intervaloDeTiempo = setInterval(ticTac, 1000);
    document.querySelector("#indicador").textContent = 30;
}

function ticTac(){
    let tiempo = document.querySelector("#indicador").textContent;
    document.querySelector("#indicador").textContent = tiempo -1;
}

function tiempoCumplido(){
    clearInterval(intervaloDeTiempo);
    document.querySelector("#indicador").textContent = 0;
    document.querySelector("#alarma").play();
    alert("Se acabó el juego");
}