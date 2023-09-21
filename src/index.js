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


    //Muestra la lista completa de objetos cargados por el usuario en la pagina
    document.getElementById("mostrar_lista").onclick = () =>{

        let listaProductos = document.getElementById("lista_completa");

        g_totalProductos.forEach(function(producto) {
            listaProductos.innerHTML += `${producto.nombre} - $${producto.precio} - ${producto.marca} <br>` ;
        });
    }

    //filtra los productos mas baratos segun el nombre y muestra los mas baratos
    document.getElementById("mostrar_barato").onclick = () => {
        // Arreglo donde se guardaran todos los precios minimos cargados
        const listBarato = [];
    
        // Iterar sobre los productos y actualizar los precios mínimos
        g_totalProductos.forEach((producto) => {

            // Buscar si ya existe un precio mínimo para este producto
            const menorPrecioExistente = listBarato.find((minPrecio) => minPrecio.nombre === producto.nombre);
    
            // Si no existe un precio mínimo para este producto o el precio actual es menor, actualizarlo o agregarlo
            if (!menorPrecioExistente || producto.precio < menorPrecioExistente.precio) {
                if (menorPrecioExistente) {
                    // Actualizar el precio mínimo existente
                    menorPrecioExistente.precio = producto.precio;
                } else {
                    // Agregar un nuevo precio mínimo
                    listBarato.push({
                        nombre: producto.nombre,
                        precio: producto.precio,
                        marca: producto.marca
                    });
                }
            }
        });
    
        // Mostrar la lista de productos de precio mínimo
        let listaProductos = document.getElementById("lista_menor_precio");
        
    
        listBarato.forEach(function(producto) {
            listaProductos.innerHTML += `${producto.nombre} - $${producto.precio} - ${producto.marca} <br>`;
        });
    };

}