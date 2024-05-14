

function saveProduct2(productId) {
    console.log("Guardando producto con ID:", productId);
    // Encontrar el producto con el ID dado
    const found = products.find((each) => each.id === productId);

    console.log("Producto encontrado:", found);

    // Obtener el contenido actual de "favoritos" del almacenamiento local
    const favContent = localStorage.getItem("favoritos");

    if (favContent) {
        // Si la clave "favoritos" existe, parseamos su contenido a un array
        let favoritos = JSON.parse(favContent);

        // Verificar si el contenido de "favoritos" es un array
        if (!Array.isArray(favoritos)) {
            // Si el contenido de "favoritos" no es un array válido, inicializamos un nuevo array
            favoritos = [];
        }

        // Verificar si el producto ya está en favoritos (mismo id y mismo color)
        const existente = favoritos.find(item => item.id === productId && item.colors === document.querySelector("#color").value);

        if (existente) {
            console.log("El producto ya está en favoritos.");
            // Aquí puedes mostrar un mensaje o realizar otra acción si el producto ya está en favoritos
            return false; // Producto ya está en favoritos, devuelve false
        } else {
            // Agregar el nuevo producto a la lista de favoritos
            favoritos.push({
                id: productId,
                name: found.name,
                price: found.price,
                image: found.image,
                colors: document.querySelector("#color").value,
            });

            // Guardar el array actualizado en el almacenamiento local
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            console.log("Producto añadido a favoritos.");
            return true; // Producto agregado correctamente, devuelve true
        }
    } else {
        // Si la clave "favoritos" no existe, creamos un nuevo array con el producto
        const productosguardado2 = [{
            id: productId,
            name: found.name,
            price: found.price,
            image: found.image,
            colors: document.querySelector("#color").value,
        }];

        // Guardar el nuevo array en el almacenamiento local
        const stringifyProduct = JSON.stringify(productosguardado2);
        localStorage.setItem("favoritos", stringifyProduct);
        console.log("Producto añadido a favoritos.");
        return true; // Producto agregado correctamente, devuelve true
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de añadir a favoritos
    var addToFavoritesBtn1 = document.querySelector('.cart-btn2');

    // Agregar un event listener para el clic en el botón de añadir a favoritos
    addToFavoritesBtn1.addEventListener('click', function() {
        // Obtener el ID del producto de los parámetros de la URL
        const urlParams1 = new URLSearchParams(window.location.search);
        const productId2 = urlParams.get('id');

        // Verificar si se obtuvo un ID válido
        if (productId2) {
            // Llamar a la función saveProduct2 con el ID del producto
            const addedToFavorites = saveProduct2(productId2);

            if (addedToFavorites) {
                alert("Producto añadido a favoritos.");
            } else {
                alert("¡Este producto ya ha sido agregado a favoritos anteriormente!");
            }

            // Redirigir al usuario a la página de favoritos
            window.location.href = './Favoritos.html';
        } else {
            console.error("No se proporcionó un ID válido en la URL");
        }
    });
});





//function resetFavorites() {
//    localStorage.removeItem("favoritos");
//    console.log("Lista de favoritos reseteada.");
// }
//
//// Llamada a la función para resetear la lista de favoritos (por ejemplo, cuando se hace clic en un botón)
//resetFavorites();