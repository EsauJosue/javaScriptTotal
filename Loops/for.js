// function cicloFor(){
//     for(let x=1; x<5; x++){
//         // console.log("hola mundo");
//         document.write("<h" + x + "> Hola Mundo </h" + x + ">");
//     }
// }
let elemento = document.querySelector("#resultados");

function multiplicar(){
    let numero = document.querySelector("#numero").value;
    for(x = 0; x<=10; x++){
        let textResultado = numero+" x "+ x +" = "+numero*x;
        let item = document.createElement("p");
        item.innerHTML = textResultado;
        item.className = "itemList";
        elemento.appendChild(item);
    }

}