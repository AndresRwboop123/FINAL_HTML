//// Obtener el objeto 'cart' del almacenamiento local
 var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//
//// Crear un array de los Pricetotal de cada objeto en cart
//var priceTotalArray = cartItems.map(function(item) {
//  return item.Pricetotal;
//});
//
//console.log(priceTotalArray);
//
//
////····· Sumar todos los valores en priceTotalArray para mostra el resumen total del precio
//var totalarrayprecio = priceTotalArray.reduce(function(acc, currentValue) {
//    return acc + currentValue;
//  }, 0);
//  
//  console.log(totalarrayprecio);
//
//// Renderizar el valor total en el elemento HTML con la clase 'checkout-total-price' DE LA TARJETA DE FINALIZAR COMPRA
//document.querySelector('.checkout-total-price2').textContent = '$' + totalarrayprecio;











/////////////////////// Renderizando cada tarjeta para que se muestre cada opcion de añadir ///////////

class Cart {
  static renderCartProducts(cartItems) {
    // Procesar los elementos del carrito para agrupar por id y sumar priceTotal
    const groupedCartItems = Object.values(cartItems.reduce((acc, item) => {
      const key = `${item.id}-${item.colors}`;
      if (!acc[key]) {
        acc[key] = { ...item };
      } else {
        acc[key].quantity += item.quantity;
        acc[key].Pricetotal += item.Pricetotal
        ;
      }
      return acc;
    }, {}));

    // Renderizar los productos agrupados en el carrito
    const cartContainer = document.getElementById('cartproducts');
    cartContainer.innerHTML = '';

    groupedCartItems.forEach(item => {
      const productHTML = `
        <article class="product-checkout-block1">
          <div class="product-mod">
            <div class="checkout-container1">
              <div>
                <img class="big-img" src="${item.image}" alt="${item.name}" />
              </div>
              <div class="checkout-process">
                <h4 class="checkout-description">Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$</h4>
                <p>${item.name}</p>
                <p>${item.colors}</p>
                <div class="top">
                  <input type="number" min="0" value="${item.quantity}" class="quantity-input" data-id="${item.id}" data-color="${item.colors}"  />
                </div>
              </div>
              <ul class="checkout-policy-list">
                <li>
                  <h2 id="price" class="checkout-total-price">$${item.Pricetotal}</h2>
                </li>
              </ul>
              <button class="remove-item" data-id="${item.id}" data-color="${item.colors}">&times;</button>
            </div>
          </div>
        </article>
      `;
      cartContainer.insertAdjacentHTML('beforeend', productHTML);
    });


    // Agregar manejador de eventos para los campos de cantidad
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
      input.addEventListener('change', (event) => {
        const productId = input.dataset.id;
        const color = input.dataset.color;
        const newQuantity = parseInt(event.target.value);
        Cart.updateCartItemQuantity(productId, color, newQuantity);
      });
    });




           // Agregar manejador de eventos para los botones de eliminar
           const removeButtons = document.querySelectorAll('.remove-item');
           removeButtons.forEach(button => {
             button.addEventListener('click', () => {
               const productId = button.dataset.id;
               const color = button.dataset.color;
               Cart.removeItemFromCart(productId, color);
             });
           });
           
    // Recalcular y renderizar el precio total
    const totalprice = Cart.calculateTotalPrice(cartItems);
    Cart.renderTotalPrice(totalprice);

          }
          

          static updateCartItemQuantity(productId, color, newQuantity) {
            // Obtener y actualizar el carrito desde el almacenamiento local
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const updatedCartItems = cartItems.map(item => {
              if (item.id === productId && item.colors === color) {
                item.quantity = newQuantity;
                item.Pricetotal = item.price * newQuantity; // Actualizar el precio total del producto
              }
              return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        
            // Volver a renderizar el carrito
            Cart.renderCartProducts(updatedCartItems);
          }






          static removeItemFromCart(productId, color) {
    // Obtener y actualizar el carrito desde el almacenamiento local
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems = cartItems.filter(item => !(item.id === productId && item.colors === color));
    localStorage.setItem('cart', JSON.stringify(cartItems));

          
           // Volver a renderizar el carrito
           Cart.renderCartProducts(cartItems);
          
    
  }

  static calculateTotalPrice(cartItems) {
    // Calcular el precio total sumando los priceTotal de todos los productos en el carrito
    return cartItems.reduce((total, item) => total + item.Pricetotal, 0);
  }

  static renderTotalPrice(totalprice) {
    // Renderizar el precio total en el elemento HTML con la clase 'checkout-total-price2'
    document.querySelector('.checkout-total-price2').textContent = '$' + totalprice;
  }


}


  Cart.renderCartProducts(cartItems);





