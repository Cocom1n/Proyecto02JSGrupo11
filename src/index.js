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