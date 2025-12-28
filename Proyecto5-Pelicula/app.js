function recomendar(genero){
    let edad = document.querySelector("#age").value;
    let recomendacion = document.querySelector("#recomendacion");
    switch(genero){
        case 'drama':
            if(edad <= 13){
                recomendacion.textContent = "Pelicula Drama ATP";
            }else if(edad >13 && edad <=16){
                recomendacion.textContent = "Pelicula Drama +13";
            }else if(edad >=18){
                recomendacion.textContent = "Pelicula Drama +18";
            }
            break;
        case 'comedia':
            if(edad <= 13){
                recomendacion.textContent = "Pelicula Comedia ATP";
            }else if(edad >13 && edad <=16){
                recomendacion.textContent = "Pelicula Comedia +13";
            }else if(edad >=18){
                recomendacion.textContent = "Pelicula Comedia +18";
            }
            break;
        case 'suspenso':
            if(edad <= 13){
                recomendacion.textContent = "Pelicula Suspenso ATP";
            }else if(edad >13 && edad <=16){
                recomendacion.textContent = "Pelicula Suspenso +13";
            }else if(edad >=18){
                recomendacion.textContent = "Pelicula Suspenso +18";
            }
            break;
        case 'accion':
            if(edad <= 13){
                recomendacion.textContent = "Pelicula Acción ATP";
            }else if(edad >13 && edad <=16){
                recomendacion.textContent = "Pelicula Acción +13";
            }else if(edad >=18){
                recomendacion.textContent = "Pelicula Acción +18";
            }
            break;
        
    }
    recomendacion.style.color = "blue";
    
}