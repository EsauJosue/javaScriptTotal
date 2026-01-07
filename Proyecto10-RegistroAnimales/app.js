class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
        informacion(){
        let texto = `${this.nombre} - ${this.peso}kg. - ${this.edad} años`;
        return texto;
    }
    
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
     informacion(){
        let texto = `${this.nombre} - ${this.peso}kg. - ${this.edad} años - ${this.raza}`;
        return texto;
    }
}
class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
     informacion(){
        let texto = `${this.nombre} - ${this.peso}kg. - ${this.edad} años - ${this.sexo}`;
        return texto;
    }
}
class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this._color = color;
    }
     informacion(){
        let texto = `${this.nombre} - ${this.peso}kg. - ${this.edad} años - ${this.color}`;
        return texto;
    }
}

let perro1 = new Perro("Simba",11,4,"Shi Tzu");
let gato1 = new Gato("Ring",10,3,"macho");
let conejo1 = new Conejo("Morsa",2,1,"Blanco");
let animales = [perro1, gato1, conejo1];

function verAnimales(){
    let lista = document.querySelector("#resultados");

    for(let item of animales){
        let info = document.createElement("li");
        info.innerHTML = item.informacion();
        lista.appendChild(info);

    }
}