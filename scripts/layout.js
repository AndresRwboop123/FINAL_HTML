
// Seleccionar el elemento del footer por su id
const footerSelector2 = document.getElementById("footer");

// Eliminar todos los elementos hijos del footer
footerSelector2.innerHTML = '';

//hacemos los que nos pide del ejercicio
const footerSelector = document.querySelector("#footer");


// Definir las opciones para el footer, incluyendo las URLs específicas para cada opción
const optionsfooter = [
    { title: "Ofertas", linkTo: "./ofertas.html", opts: ["Laptops", "Audio", "Auriculares"], optLinks: ["./laptops.html", "./audio.html", "./auriculares.html"] },
    { title: "Cómo comprar", linkTo: "./comprar.html", opts: ["Formas de pago", "Envios", "Devoluciones"], optLinks: ["./formas-pago.html", "./envios.html", "./devoluciones.html"] },
    { title: "Servicio al cliente", linkTo: "./servicio-cliente.html", opts: ["Contacto", "Ayuda", "FAQ"], optLinks: ["./contacto.html", "./ayuda.html", "./faq.html"] },
    { title: "Información",linkTo: "./information.html", opts: [" ", "", ""] },
    
    ];

  
// Iterar sobre cada opción
for (const option of optionsfooter) {
    // Crear el elemento <ul> para cada columna del footer
    const columnUl = document.createElement("ul");
    columnUl.classList.add("footer-ul");
  
    // Crear el elemento <li> para el título de la columna
    const titleLi = document.createElement("li");
    titleLi.classList.add("footer-main-item");
    const titleLink = document.createElement("a");
    titleLink.classList.add("footer-a");
    titleLink.textContent = option.title;
    titleLink.href = option.linkTo;
    titleLi.appendChild(titleLink);
    columnUl.appendChild(titleLi);
  


      // Verificar si la opción tiene subopciones
  if (option.opts.length > 0 && option.optLinks && option.optLinks.length === option.opts.length) {
    // Iterar sobre las opciones de la columna
    for (let i = 0; i < option.opts.length; i++) {
      const opt = option.opts[i];
      const optUrl = option.optLinks[i]; // Obtener la URL específica para la opción actual

      const optLi = document.createElement("li"); // Crea un elemento <li> para cada opción
      optLi.classList.add("footer-li");
      const optLink = document.createElement("a"); // Crea un elemento <a> para el enlace
      optLink.classList.add("footer-a");
      optLink.textContent = opt; // Establece el texto del enlace como la opción
      optLink.href = optUrl; // Establece la URL específica como href del enlace

      optLi.appendChild(optLink); // Agrega el enlace al elemento <li>
      columnUl.appendChild(optLi); // Agrega el elemento <li> al elemento <ul>
    }
  }

  // Agregar la columna completa al footer
  footerSelector.appendChild(columnUl);
}












///////////////// para barra de navegacion ////////////////////////////////////////
// Seleccionar el elemento del footer por su id
const navSelector3 = document.getElementById("navbar");

// Eliminar todos los elementos hijos del footer
navSelector3.innerHTML = '';


const options2 = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "como", linkTo: "./how.html" },
  { title: "tarifas", linkTo: "./taxs.html" },
  { title: "ordenes", linkTo: "./orders.html" },
  { title: "Canasta", linkTo: "./warranty.html" },
];


for (let option of options2) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector3.appendChild(anchor);
}



// Selecciona todos los elementos de ancla con la clase "nav-button"
const navButtons = document.querySelectorAll('.nav-button');

// Itera sobre cada elemento de ancla
navButtons.forEach(button => {
    // Elimina la línea debajo del título
    button.style.textDecoration = 'none';
    
    // Cambia el color del texto a blanco
    button.style.color = 'white';
});