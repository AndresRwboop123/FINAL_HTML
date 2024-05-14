//// Obtener el objeto 'favoritos' del almacenamiento local
var favItems = JSON.parse(localStorage.getItem('favoritos')) || [];

////////////////////// Renderizando cada tarjeta para que se muestre cada opcion de añadir ///////////
   // Renderizar los productos agrupados en el carrito
   const favContainer = document.getElementById('cartproducts2');
   favContainer.innerHTML = '';


/////// recordemos que products es un array con las instancias de Product es: de mi product.js
             //const products = [product1, product2, product3, product4, product5, product6];

 favItems.forEach(item => {
    const favHTML = `
      <article class="product-checkout-block1" id="cartproducts">
        <div class="product-mod2">
          <div class="checkout-container1">
            <div>
              <img class="big-img" src="${item.image}" alt="${item.name}" />
            </div>
            <div class="checkout-process">
              <h4 </h4>
              <p>${item.name}</p>
              <p>${item.colors}</p>
              <div class="top">
              </div>
            </div>
            <ul class="checkout-policy-list">
              <li>
                <h2 id="price" class="checkout-total-price">$${item.price}</h2>
              </li>
            </ul>
            <button class="remove-item1" data-id1="${item.id}" data-color="${item.colors}">&times;</button>
          </div>
        </div>
      </article>
    `;
    favContainer.insertAdjacentHTML('beforeend', favHTML);
  });

// Agregar event listener para los botones de eliminación
const removeButtons = document.querySelectorAll('.remove-item1');
removeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productId1 = this.getAttribute('data-id1');

    // Eliminar el elemento del DOM
    const productElement = this.closest('.product-checkout-block1');
    productElement.remove();

    // Eliminar el producto del objeto 'favoritos' en el almacenamiento local
    // Encuentra el índice del producto en el array favItems
    const index = favItems.findIndex(item => item.id === productId1);
    if (index !== -1) {
      // Elimina el producto del array favItems
      favItems.splice(index, 1);
      // Actualiza el objeto 'favoritos' en el almacenamiento local
      localStorage.setItem('favoritos', JSON.stringify(favItems));
    } else {
      console.error('Producto no encontrado en el objeto de favoritos.');
    }
  });
});
 

// const removeButtons = document.querySelectorAll('.remove-item1');
// removeButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const productId = button.dataset.id;
//     const color = button.dataset.color;
//     Cart.removeItemFromCart(productId, color);
//     // Eliminar el elemento del DOM si es necesario
//     button.closest('.product-checkout-block1').remove();
//   });
// });