// Definicion de la estructura Producto. Es para que se guien.
/*
let producto = {
        "nombre" : ??,
        "precio" : ??,
        "marca" : ??
    }
*/

// Declaracion de un arreglo. Este arreglo va a contener los precios.
// que se van a cargar.
const g_totalProductos = [];

// Funcion que se activa al pulsar el boton "Cargar"
document.getElementById("cargar_dato").onclick = ()=> {
    
    // Se obtienen los datos en la pagina.
    let producto = {
        "nombre" : document.getElementById("nombre").value,
        "precio" : parseFloat(document.getElementById("precio").value), // El punto separador es un .
        "marca" : document.getElementById("marca").value
    }

    // Comprobacion de errores. Esta parte la hace otro xd

    // Muestra lo que se va a cargar
    console.log(producto);

    // Se carga la estructura al vector.
    g_totalProductos.push(producto);

    // Se ve el arreglo
    console.log(g_totalProductos);

}

    //cuando se presione el boton mostrar lista

    document.getElementById("mostrar_lista").onclick = ()=>{
 
        //-------Muestra solo los productos que son más baratos, solo uno por nombre.
        let aux, aux1 = 100000, aux2; //estas son para azucar, los 100000 son para calcular el menor precio, debe haber un precio definido para sacar el menor.
        let aux3, aux4 = 100000, aux5; // para pan
        let aux6, aux7 = 100000, aux8; // para harina
        let aux9, aux10 = 100000, aux11; // para leche

        g_totalProductos.forEach((elemento)=>{
            switch (elemento.nombre) {
                case "azucar":
                    //menor precio 
                        if (elemento.precio <= aux1) {
                            aux = elemento.nombre
                            aux1 = elemento.precio;
                            aux2 = elemento.marca;
                        }
                    break;
                case "pan":
                        if (elemento.precio <= aux4) {
                            aux3 = elemento.nombre
                            aux4 = elemento.precio;
                            aux5 = elemento.marca;
                        }
                    break;
                case "harina":
                    //menor precio 
                    if (elemento.precio <= aux7) {
                        aux6 = elemento.nombre
                        aux7 = elemento.precio;
                        aux8 = elemento.marca;
                    }
                    break;
                case "leche":
                        //menor precio 
                        if (elemento.precio <= aux10) {
                            aux9 = elemento.nombre
                            aux10 = elemento.precio;
                            aux11 = elemento.marca;
                        }
                    break;    
                default:
                    break;
            }
        })
        //console.log(` ${aux} - ${aux1} - ${aux2}`);
        document.getElementById("lista_menor_precio").innerHTML = 
        `<p> ${aux} - ${aux1} - ${aux2} </p>
         <p> ${aux3} - ${aux4} - ${aux5} </p>
         <p> ${aux6} - ${aux7} - ${aux8} </p>
         <p> ${aux9} - ${aux10} - ${aux11} </p>
        `;

    }




