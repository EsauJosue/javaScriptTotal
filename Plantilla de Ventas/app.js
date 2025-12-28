
function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.querySelector(elemento);
    let miNumero = Number(miElemento.value);
    return miNumero;

}
function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    ventas1 = extraerNumeroDesdeElemento("#ventasTienda1");
    ventas2 = extraerNumeroDesdeElemento("#ventasTienda2");
    ventas3 = extraerNumeroDesdeElemento("#ventasTienda3");
    ventas4 = extraerNumeroDesdeElemento("#ventasTienda4");
    ventas5 = extraerNumeroDesdeElemento("#ventasTienda5");
    ventas6 = extraerNumeroDesdeElemento("#ventasTienda6");

    let ventas = [ventas1, ventas2, ventas3, ventas4, ventas5, ventas6];

    let areaResultados = document.querySelector("#resultados");
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

function calcularMayorVenta(ventas){
    let mayorVenta = 0;
     
    for(let venta of ventas){
        if(mayorVenta < venta){
            mayorVenta = venta;
        }
    }

    return mayorVenta;
}

function calcularTotalVentas(ventas){
    let suma = 0;
    for(let venta of ventas){
            suma += venta;
        }
    
    return suma;
}

function calcularMenorVenta(ventas){
    let menor = ventas[0];
    for(let venta of ventas){
        if(menor < venta){
           
        }else{
            menor = venta;
        }
    }
    return menor;
}