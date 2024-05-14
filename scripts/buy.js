// Seleccionar el botón "Finaliza tu compra" por su ID
var buySelector = document.getElementById('finalizaCompra');



// Agregar un manejador de eventos para el clic en el botón
buySelector.addEventListener('click', function() {
    // Aquí dentro puedes realizar acciones cuando se haga clic en el botón
        // Borrar todos los productos del arreglo cartproducts
        cartproducts = [];

        // Borrar todos los productos del localStorage
        localStorage.removeItem('cart');

              // Actualizar la impresión de las tarjetas de productos del carrito (sin productos)
              var cartContainer = document.getElementById('cartproducts');
              cartContainer.innerHTML = ''; // Vaciar el contenido del contenedor

              // Actualizar la impresión del cuadro de detalle del total (sumando cero)
               var totalPriceElement = document.querySelector('.checkout-total-price2');
               totalPriceElement.textContent = '$0'; // Establecer el total en cero


    
});