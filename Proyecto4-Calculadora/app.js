
let resultado = document.querySelector("#resultado");

function sumar(){
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");
    resultado.value = +numero1.value + +numero2.value;
}
function restar(){
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");
    resultado.value = +numero1.value - +numero2.value;
}
function multiplicar(){
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");
    resultado.value = +numero1.value * +numero2.value;
}
function dividir(){
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");
    resultado.value = +numero1.value / +numero2.value;
}
function potencia(){
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");
    resultado.value = Math.pow(numero1.value, numero2.value);
}

function raiz(){
    let numero1 = document.querySelector("#numero1");
    resultado.value = Math.sqrt(numero1.value);
}

function absoluto(){
    let numero1 = document.querySelector("#numero1");
    resultado.value = Math.abs(numero1.value);
}

function random(){
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");
    resultado.value = Math.random()*(numero1.value - numero2.value) + numero2.value;
}
function redondear(){
    let numero1 = document.querySelector("#numero1");
    resultado.value = Math.round(numero1.value);
}
function piso(){
    let numero1 = document.querySelector("#numero1");
    resultado.value = Math.floor(numero1.value);
}
function ceil(){
    let numero1 = document.querySelector("#numero1");
    resultado.value = Math.ceil(numero1.value);
}