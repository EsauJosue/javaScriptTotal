const estado = document.querySelector("#status");
const elementoHora = document.querySelector("#tiempoA");

function iniciar(){
    activado();
    const tiempo = document.querySelector("#tiempo");
    const sonido = document.querySelector("#sonidoAlarma");
    setTimeout(function(){
        sonido.play();
        estado.textContent = "Se terminó el tiempo";
        estado.style.color = "red";
        elementoHora.style.color ="red";
    },1000 * tiempo.value)
}

function activado(){
    estado.textContent = "Activado";
    estado.style.color = "green";
}

function comenzarReloj(){
    setInterval(tictac, 1000);
}

function tictac(){
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = String(tiempoActual.getSeconds()).padStart(2,"0");
    let textoHora = hora +":"+minutos+":"+segundos;
    elementoHora.textContent = textoHora;
}