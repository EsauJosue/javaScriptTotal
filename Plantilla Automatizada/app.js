let tiendasId = [];
function preguntar(){
    let cant = prompt("¿Cuantas tiendas deseas crear?");
    crearTiendas(+cant);
}
function crearTiendas(cantidad){
      //Info Salida
    let salida = document.querySelector(".Tiendas");

    for(let x = 1; x <= cantidad; x++){
        salida.appendChild(crearInputTienda("tienda"+ x,"Tienda "+x+":",0));
        tiendasId.push("tienda"+x);
    }
    generarBotonCalcular();
}
function crearInputTienda(idLabel, textoLabel, valorMin){
    //Crear box de la tienda
    let boxTienda = document.createElement("div");
    boxTienda.className = "boxTienda";
    //Crear etiqueta de la tienda
    let nombreTienda = document.createElement("label");
    nombreTienda.textContent = textoLabel;
    //Conectar el label con el input
    nombreTienda.setAttribute("for",idLabel);
    //Crear input
    let input = document.createElement("input");
    //Establecemos atributos del input
    input.setAttribute("type","Number");
    input.setAttribute("min", valorMin);
    input.setAttribute("id",idLabel);
    input.setAttribute("value", 0);
    //Agregar label e input al parrafo
    boxTienda.appendChild(nombreTienda);
    boxTienda.appendChild(input);
    
    //Retornamos el input completo
    return boxTienda;

}
function generarBotonCalcular(){
    let seccionCalcular = document.querySelector("#btnCalcular");
    let btnCalcular = document.createElement("button");
    btnCalcular.setAttribute("id", "btn-calcular");
    btnCalcular.setAttribute("onclick","calcular()");
    btnCalcular.textContent = "Calcular";
    seccionCalcular.appendChild(btnCalcular);
}

function calcular(){
    let ventas = [];
    for(let tienda of tiendasId){
        ventas.push(document.getElementById(tienda).value);
    }
    let areaResultados = document.querySelector("#infoSalida");
    let sumatoria = document.createElement("p");
    let mayor = document.createElement("p");
    let menor = document.createElement("p");
    mayor.textContent = "La mayor venta fue de: "+ calcularMayorVenta(ventas);
    sumatoria.textContent = "Las ventas totales son: " + calcularTotalVentas(ventas);
    menor.textContent = "La venta menor fue de: " + calcularMenorVenta(ventas);
    areaResultados.appendChild(sumatoria);
    areaResultados.appendChild(mayor);
    areaResultados.appendChild(menor);
}

//Calculos de las cantidades
function calcularMayorVenta(ventas){
    let mayorVenta = 0;
    let tiendas = document.querySelector(".Tiendas").children;
    let inputMayor;
    for(let x = 0; x < ventas.length; x++){
        if(mayorVenta < ventas[x]){
            mayorVenta = +ventas[x];        
        }
    }
    for(let tienda of tiendas){
        let tiendaId = tienda.children[1];
        if(tiendaId.value == +mayorVenta){
            inputMayor = tiendaId;
            inputMayor.classList = "mayor";
        }
    }
    return mayorVenta;
}

function calcularTotalVentas(ventas){
    let suma = 0;
    for(let venta of ventas){
            suma += +venta;
        }
    
    return suma;
}

function calcularMenorVenta(ventas){
    let tiendas = document.querySelector(".Tiendas").children;
    let inputMenor;
    let menor = ventas[0];
    for(let venta of ventas){
        if(menor < venta){
           
        }else{
            menor = +venta;
        }
    }
     for(let tienda of tiendas){
        let tiendaId = tienda.children[1];
        if(tiendaId.value == +menor){
            inputMenor = tiendaId;
            inputMenor.classList = "menor";
        }
    }
    return menor;
}