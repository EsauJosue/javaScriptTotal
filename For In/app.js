function Perro(nombre, edad, raza){
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.ladrar = function(){
        console.log("guau");
    }
}

let duquesa = new Perro("duquesa", 4, "Chihuahua");

for(let item in duquesa){
    console.log(`${item}: ${duquesa[item]}`);
}