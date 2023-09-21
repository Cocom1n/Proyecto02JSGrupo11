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


    document.getElementById("mostrar_lista").onclick = () =>{

        let listaProductos = document.getElementById("lista_completa");

        g_totalProductos.forEach(function(producto, index) {
            listaProductos.innerHTML += `${(index + 1)}-  Nombre: ${producto.nombre}  $ ${producto.precio} Marca: ${producto.marca} <br>` ;
        });
        
        //-------Muestra solo los productos que son más baratos, solo uno por nombre.
        let aux="", aux1 = 100000, aux2=""; //estas son para azucar, los 100000 son para calcular el menor precio, debe haber un precio definido para sacar el menor.
        let aux3="", aux4 = 100000, aux5=""; // para pan
        let aux6="", aux7 = 100000, aux8=""; // para sal
        let aux9="", aux10 = 100000, aux11=""; // para dulce
        let aux12="", aux13 = 100000, aux14=""; // para leche
        let aux15="", aux16 = 100000, aux17=""; // para queso
        let aux18="", aux19 = 100000, aux20=""; // para yogurt

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
                case "sal":
                    //menor precio 
                    if (elemento.precio <= aux7) {
                        aux6 = elemento.nombre
                        aux7 = elemento.precio;
                        aux8 = elemento.marca;
                    }
                    break;
                case "dulce":
                        //menor precio 
                        if (elemento.precio <= aux10) {
                            aux9 = elemento.nombre
                            aux10 = elemento.precio;
                            aux11 = elemento.marca;
                        }
                    break;
                case "leche":
                        //menor precio 
                        if (elemento.precio <= aux13) {
                            aux12 = elemento.nombre
                            aux13 = elemento.precio;
                            aux14 = elemento.marca;
                        }
                    break;
                case "queso":
                        //menor precio 
                        if (elemento.precio <= aux16) {
                            aux15 = elemento.nombre
                            aux16 = elemento.precio;
                            aux17 = elemento.marca;
                        }
                    break;
                case "yogurt":
                        //menor precio 
                        if (elemento.precio <= aux19) {
                            aux18 = elemento.nombre
                            aux19 = elemento.precio;
                            aux20 = elemento.marca;
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
        <p> ${aux12} - ${aux13} - ${aux14} </p>
        <p> ${aux15} - ${aux16} - ${aux17} </p>
        <p> ${aux18} - ${aux19} - ${aux20} </p>
        `;

    }

    // document.getElementById("mostrar_lista").onclick = function(){
    //     let listaProductos = document.getElementById("listaProductos");

    //     if(g_totalProductos.length==0){
    //         listaProductos.innerHTML = `La lista esta vacia`;
    //     }else{
    //         g_totalProductos.forEach(function(elemento){
    //             listaProductos.innerHTML = `Nomnbre: ${g_totalProductos.nombre}  precio: $ ${g_totalProductos.precio}  Marca: ${g_totalProductos.marca}`;
    //         });
    //     }
    // }
}