let datosJson;

let encabezado = document.querySelector("#Encabezado");
let cliente = document.querySelector("#cliente");
let saldo = document.querySelector("#saldo");
let cbu = document.querySelector("#cbu");
fetch('resumen.json')
    .then(res => res.json())
    .then((salida) => {
        datosJson = salida;
        let banco = document.createElement('h1');
        let sucursal = document.createElement('h2');
        let nombre = document.createElement('p');
        let cuenta = document.createElement('p');
        let cbuText = document.createElement('p');

        //Datos del Banco
        banco.textContent = datosJson.banco;
        sucursal.textContent = datosJson.sucursal;
        
        encabezado.appendChild(banco);
        encabezado.appendChild(sucursal);

        //Datos del cliente
        nombre.textContent = `Nombre: ${datosJson.titular}`;
        cuenta.textContent = `Nro Cuenta: ${datosJson.cuenta}`;
        cliente.appendChild(nombre);
        cliente.appendChild(cuenta);

        //Saldo del cliente
        for(let items of datosJson.saldo){
            let saldoUSD = document.createElement('p');
            saldoUSD.textContent = `${items.monto} ${items.moneda}`;
            saldo.appendChild(saldoUSD);
            }
        //CBU
        cbuText.textContent = `CBU: ${datosJson.cbu}`;
        cbu.appendChild(cbuText);

       

    })
    .catch(function(error){
        console.log(error);
    })