// tenemos que borrar todas tarjetas de producto 
// Selecciona todas las tarjetas de productos

const productCards = document.querySelectorAll('.product-card');

// Itera sobre cada tarjeta de producto
productCards.forEach(card => {
    // Elimina la tarjeta de producto del DOM
    card.remove();
});

//console.log(productCards);








// comenzamos con el ejericio //

//////////// Metodo estatico ////////////////////////////////////////

///
//////// Define el template con el contenido de las tarjetas de productos
///let productsTemplate = `
///<article class="product-card"> 
///    <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="iPad Pro 12.9" />
///    <div class="product-info">
///        <span class="product-title">iPad Pro 12.9</span>
///        <span class="product-description">Silver</span>
///        <div class="product-price-block">
///            <span class="product-price">900000</span>
///            <span class="product-discount">50% Off</span>
///        </div>
///        <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
///    </div>
///</article>
///<article class="product-card"> 
///    <!-- Contenido de la segunda tarjeta de producto -->
///    <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="iPad Pro 12.9" />
///    <div class="product-info">
///        <span class="product-title">iPad Pro 12.9</span>
///        <span class="product-description">Silver</span>
///        <div class="product-price-block">
///            <span class="product-price">900000</span>
///            <span class="product-discount">50% Off</span>
///        </div>
///        <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
///    </div>
///</article>
///<!-- Agrega más tarjetas de producto según sea necesario -->
///<article class="product-card"> 
///    <!-- Contenido de la segunda tarjeta de producto -->
///    <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="iPad Pro 12.9" />
///    <div class="product-info">
///        <span class="product-title">iPad Pro 12.9</span>
///        <span class="product-description">Silver</span>
///        <div class="product-price-block">
///            <span class="product-price">900000</span>
///            <span class="product-discount">50% Off</span>
///        </div>
///        <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
///    </div>
///</article>
///<!-- Agrega más tarjetas de producto según sea necesario -->
///<article class="product-card"> 
///    <!-- Contenido de la segunda tarjeta de producto -->
///    <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="iPad Pro 12.9" />
///    <div class="product-info">
///        <span class="product-title">iPad Pro 12.9</span>
///        <span class="product-description">Silver</span>
///        <div class="product-price-block">
///            <span class="product-price">900000</span>
///            <span class="product-discount">50% Off</span>
///        </div>
///        <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
///    </div>
///</article>
///<!-- Agrega más tarjetas de producto según sea necesario -->
///<article class="product-card"> 
///    <!-- Contenido de la segunda tarjeta de producto -->
///    <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="iPad Pro 12.9" />
///    <div class="product-info">
///        <span class="product-title">iPad Pro 12.9</span>
///        <span class="product-description">Silver</span>
///        <div class="product-price-block">
///            <span class="product-price">900000</span>
///            <span class="product-discount">50% Off</span>
///        </div>
///        <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
///    </div>
///</article>
///<!-- Agrega más tarjetas de producto según sea necesario -->
///<article class="product-card"> 
///    <!-- Contenido de la segunda tarjeta de producto -->
///    <img class="product-img" src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg" alt="iPad Pro 12.9" />
///    <div class="product-info">
///        <span class="product-title">iPad Pro 12.9</span>
///        <span class="product-description">Silver</span>
///        <div class="product-price-block">
///            <span class="product-price">900000</span>
///            <span class="product-discount">50% Off</span>
///        </div>
///        <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
///    </div>
///</article>
///`;
/// Inserta el contenido de las tarjetas de productos en el contenedor
///
///
///
///const productsSelector = document.getElementById("products"); // Selecciona el elemento con el ID "products"
///productsSelector.innerHTML = productsTemplate; // Asigna el contenido HTML al elemento
















///////////////////// tercer ejercicio/// Función para crear una tarjeta de producto dinámica//////////////////////
function createCard(product) { //product es un parametro de la funcion createCard
    return `
        <a class="product-card" href="./details.html?id=${product.id}">
            <img class="product-img" src="${product.image}" alt="${product.name}" />
            <div class="product-info">
                <span class="product-title">${product.name}</span>
                <span class="product-description">${product.category}</span>
                <div class="product-price-block">
                    <span class="product-price">${product.price}</span>
                    <span class="product-discount">${product.discount}</span>
                </div>
                <div class="product-tax-policy">${product.taxPolicy}</div>
            </div>
        </a>
    `;
}



// Obtener el contenedor de productos
//const productsContainer = document.getElementById("products"); //aca estamos agarrando de ID products de mi html.
//
//// Iterar sobre los productos y crear las tarjetas dinámicas
//products.forEach(product => {    //aca tener encuenta de products es del product.js es decir un array creado con sus propiedades 
//                                 //y product es el parametro funcion createCard que vamos estar colocando e iteractuando
//                                 // es decir forEach va recorre o interactuar en cada uno de los elementos del array
//
//    // Crear una nueva tarjeta de producto
//    const card = createCard(product);
//    // Agregar la tarjeta al contenedor
//    productsContainer.innerHTML += card;
//});












///////////////////////ultimo ejercicio capsula /////////////////////////////////////////////////
// atencion vamos usar la funcion createCard del ejercicio 3 y comentar para abajo todo
function renderProducts(productsArray, idSelector) {
    // Define una variable para almacenar todas las tarjetas de productos
    let productsTemplate = '';
  
    // Itera sobre el array de productos
    for (const product of productsArray) {
      // Crea la tarjeta de producto usando la función createCard definida anteriormente
      const productCard = createCard(product);
  
      // Agrega la tarjeta de producto al template
      productsTemplate += productCard;
    }
  
    // Selecciona el elemento HTML donde se van a imprimir las tarjetas de producto
    const container = document.getElementById(idSelector);
  
    // Imprime el contenido de las tarjetas de producto en el contenedor
    container.innerHTML = productsTemplate;
  }
  
  // Llamada a la función para renderizar los productos
  renderProducts(products, 'products');





