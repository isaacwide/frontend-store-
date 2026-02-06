document.addEventListener('DOMContentLoaded', function() {
    const mineralGuardado = localStorage.getItem('mineralSeleccionado');
    if (mineralGuardado) {
        const mineral = JSON.parse(mineralGuardado);
        mostrar_info(mineral);
    }
});


function mostrar_info(mineral){
    const ventas  = document.getElementById("venta");
    const texto = document.getElementById("testo");

    let imagen = document.createElement("img");  
    imagen.className = "product__img";
    imagen.src = mineral.imagen;  
    imagen.alt = mineral.nombre;

    let precio = document.createElement("p");
    precio.className = "product__rice";
    precio.textContent = `$${mineral.precio} MXN`;

    let nombre = document.createElement("p");
    nombre.className = "product__names";
    nombre.textContent = mineral.nombre;

    ventas.appendChild(imagen);
    ventas.appendChild(nombre); 
    ventas.appendChild(precio);

    let descripcion = document.createElement("p");
    descripcion.className = "product__description";
    descripcion.textContent = mineral.descripcion;

    texto.appendChild(descripcion);

}