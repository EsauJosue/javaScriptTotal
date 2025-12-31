function perro(nombre, edad){
    this.patas = 4;
    this.nombre = nombre;
    this.edad = edad;
    this.ladrar = function(){
        console.log("guau");
    }
}

let duquesa = new perro("duquesa", 4);


function Empleado(nombre, apellido, edad, cargo){
    this.nombre = nombre;
    this.lastname = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.presentarse = function(){
        console.log(`Hola, yo soy ${this.nombre} ${apellido} y tengo ${this.edad} años. Actualmente mi cargo es de ${this.cargo} en la empresa JMC Soluciones`);
    }
}

let josue = new Empleado("Josué","Martínez",41,"Director");