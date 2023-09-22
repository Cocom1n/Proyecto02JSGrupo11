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


    // No deja ingresar numeros muy grandes y negativos
    if (producto.precio < 0 || producto.precio > 1000000)
    {
        alert("No ingrese numeros negativos o muy grandes como precio.");
        return; 
    }

    // Muestra lo que se va a cargar
    console.log(producto);
  
    // Se carga la estructura al vector.
    g_totalProductos.push(producto);

    // Se ve el arreglo
    console.log(g_totalProductos);


    document.getElementById("mostrar_lista").onclick = () =>{

        let listaProductos = document.getElementById("lista_completa");
        
        // Borra el contenido previo en la lista
        listaProductos.innerHTML = "";

        g_totalProductos.forEach(function(producto, index) {
            listaProductos.innerHTML += `${(index + 1)}-  Nombre: ${producto.nombre}  $ ${producto.precio} Marca: ${producto.marca} <br>` ;
        });

        // Creamos un vector donde cada componente almacena otro arreglo con los productos elegidos.
        // Si la lista no tiene x producto, entonces el vector correspondiente estará vacio.
        let arrayMasBaratos = [
            {nombre: "", precio: -1, marca: ""},        // Azucar
            {nombre: "", precio: -1, marca: ""},        // Pan
            {nombre: "", precio: -1, marca: ""},        // Sal
            {nombre: "", precio: -1, marca: ""},        // Dulce
            {nombre: "", precio: -1, marca: ""},        // Leche
            {nombre: "", precio: -1, marca: ""},        // Queso
            {nombre: "", precio: -1, marca: ""},        // Yogurt
        ];

        g_totalProductos.forEach((elemento, index)=> {
            switch (elemento.nombre) {
                case "azucar":
                if (arrayMasBaratos[0].precio == -1 || arrayMasBaratos[0].precio > elemento.precio)    
                    arrayMasBaratos[0] = elemento;
                    break;
                case "pan":
                    if (arrayMasBaratos[1].precio == -1 || arrayMasBaratos[1].precio > elemento.precio)    
                    arrayMasBaratos[1] = elemento;
                    break;
                case "sal":
                    if (arrayMasBaratos[2].precio == -1 || arrayMasBaratos[2].precio > elemento.precio)    
                    arrayMasBaratos[2] = elemento;
                    break;
                case "dulce":
                    if (arrayMasBaratos[3].precio == -1 || arrayMasBaratos[3].precio > elemento.precio)    
                    arrayMasBaratos[3] = elemento;
                    break;
                case "leche":
                    if (arrayMasBaratos[4].precio == -1 || arrayMasBaratos[4].precio > elemento.precio)    
                    arrayMasBaratos[4] = elemento;
                    break;
                case "queso":
                    if (arrayMasBaratos[5].precio == -1 || arrayMasBaratos[5].precio > elemento.precio)    
                    arrayMasBaratos[5] = elemento;
                    break;
                case "yogurt":
                    if (arrayMasBaratos[6].precio == -1 || arrayMasBaratos[6].precio > elemento.precio)    
                    arrayMasBaratos[6] = elemento;
                    break;
            }
        }
        );

        // Borra lista mas baratos
        document.getElementById("lista_menor_precio").innerHTML = "";

        // Muestra los mas baratos
        arrayMasBaratos.forEach(
            (elemento)=>{
                // No muestra si elcampo esta "vacio"
                if (elemento.precio != -1)
                {
                    // RECUERDEN EL \n
                    document.getElementById("lista_menor_precio").innerHTML += 
                    `<p> ${elemento.nombre} - ${elemento.precio} - ${elemento.marca} </p>\n`
                }
            }
        )

    }

}