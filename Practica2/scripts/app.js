// Obtener el contenedor
const mostrar = document.getElementById("malla");

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

function cargarProductos() {
    fetch('data/archivo.json')  
        .then(response => response.json())
        .then(data => {
        
            data.minerales.forEach(mineral => {
                // Crear div producto
                let producto = document.createElement("div");
                producto.className = "product";  

                // Crear enlace
                let link = document.createElement("a");
                link.href = "tienda.html";

                // Crear imagen
                let imagen = document.createElement("img");  
                imagen.className = "product__imagen";
                imagen.src = mineral.imagen;  
                imagen.alt = mineral.nombre;

                
                link.appendChild(imagen);

                
                let info = document.createElement("div");
                info.className = "product__informacion";

              
                let nombre = document.createElement("p");
                nombre.className = "product__name";
                nombre.textContent = mineral.nombre;

                
                let precio = document.createElement("p");
                precio.className = "product__price";
                precio.textContent = `$${mineral.precio} MXN`;

                
                info.appendChild(nombre);
                info.appendChild(precio);

                producto.appendChild(link);
                producto.appendChild(info);

                
                mostrar.appendChild(producto);
            });
        })
        .catch(error => console.error('Error:', error));
}