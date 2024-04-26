
// Captura el parámetro "id" de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Imprime el id por consola
console.log(productId);


//window.location.search : devuelve la cadena de consulta de la URL actual, incluyendo el signo de interrogación (?) 
//y cualquier parámetro que se haya pasado en la URL.
//
//URLSearchParams es una interfaz que permite trabajar con los parámetros de búsqueda de una URL. Al pasarle la cadena de consulta, 
//se puede manipular fácilmente cada parámetro.
//
//urlParams.get('id') devuelve el valor del parámetro llamado "id" en la URL. Si el parámetro no está presente, devuelve null.


function printDetails(productId) {
    const product = products.find((each) => each.id === productId);
    const detailsTemplate = `



    <div id="details" class="columns-container">
      <section class="product-images-block">
        <div class="product-images">


        ${product.imagenmin.map(
          (each) => `<img class="mini-img" src="${each}" alt="mini" onclick="changeMini(event)" />`
      ).join("")}        
      
        </div>
        <img
          class="big-img"
          id="big-img"
          src="${product.image}"
          alt="${product.name}"
        />
      </section>
      <div class="product-description-block">
        <h1 class="product-title">${product.name}</h1>
        <form class="product-selector">
          <fieldset class="product-fieldset">
            <label class="product-label" for="color">Color</label>
            <select class="product-select" type="text" placeholder="Selecciona un color" id="color">


          
            ${product.colors.map(
              (each) => `<option value=${each}>${each}</option>`).join("")}

             <!--<option value="Silver">Silver</option> -->


            </select>
          </fieldset>

        </form>
        <div class="product-description">
          <span class="product-label">Descripción</span>
          <p>
          ${product.descripciong}
          </p>
        </div>
      </div>
      <div class="product-checkout-block">
        <div class="checkout-container">
          <span class="checkout-total-label">Total:</span>
          <h2 id="price" class="checkout-total-price">$${product.price}</h2>
          <p class="checkout-description">
          ${product.taxPolicy}
          </p>
          <ul class="checkout-policy-list">
            <li>
              <span class="policy-icon"
                ><img src="./assets/truck.png" alt="Truck"
              /></span>
              <span class="policy-desc"
                >Agrega el producto al carrito para conocer los costos de
                envío</span
              >
            </li>
            <li>
              <span class="policy-icon"
                ><img src="./assets/plane.png" alt="Plane"
              /></span>
              <span class="policy-desc"
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
              >
            </li>
          </ul>
          <div class="checkout-process">
              <div class="top">
                   <input  class="product-input" type="number" min="1" value="1" id="quantity" onchange="changeSubtotal()" />
                  <button type="button" class="cart-btn">
                  Añadir al Carrito
               </button>
             </div>
              </div>
             </div>
         </div>
    </div>






  
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;      //con esto eliminando de mi html y reemplazando. con mi JAVA
 }
 printDetails(productId);



 function changeMini(event) {
  // Dependiendo del evento de click, obtenemos la imagen miniatura que se ha seleccionado
  const clickedMiniature = event.target;


  console.log(clickedMiniature);

  // Guardamos la ruta de la imagen de la miniatura
  const miniatureSrc = clickedMiniature.src;

  // Seleccionamos el id de la imagen agrandada
  const bigImg = document.getElementById("big-img");

  // Actualizamos la vista con la imagen agrandada seleccionada
  bigImg.src = miniatureSrc;
}







function changeSubtotal(){
  const quantityInput=document.getElementById("quantity");
  const cantidad=parseInt(quantityInput.value);
  const producto = products.find(each => each.id === productId); 
  const subtotal = cantidad*producto.price;
  const subtotalElement = document.getElementById("price");
  subtotalElement.innerText = `$${subtotal.toFixed(2)}`; // Actualizar el subtotal en la vistas
}