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

        /* //-------Muestra solo los productos que son más baratos, solo uno por nombre.
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
        `; */

        
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