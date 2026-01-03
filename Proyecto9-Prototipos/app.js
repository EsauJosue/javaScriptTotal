function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let auto1 = new Automovil("Nissan","Altima","Rojo",2017,"Martha Patricia Segovia Ramirez");
let auto2 = new Automovil("Volkswagen", "Polo", "Gris", 2023, "Cristopher Martínez Cortez");
let auto3 = new Automovil("Toyota", "Attitude", "Blanco", 2013, "Rogelio Ruvalcaba");


let informacion = [auto1, auto2, auto3];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
};
Automovil.prototype.verAuto = function(){
    let texto = `[${this.marca}] [${this.modelo}] - [${this.anio}] - [${this.titular}]`;
    return texto;
};

Automovil.prototype.encender = function(){
    alert("El automovil fue encendido");
};

function verAutos(){
    let resultados = document.querySelector("#listResultados");
    let elementoList;
    for(let item of informacion){
        elementoList = document.createElement("li");
        elementoList.textContent = item.verAuto();
        resultados.appendChild(elementoList);
    }
}