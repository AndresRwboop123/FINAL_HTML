// Verificar si isOnline ya está definido en localStorage
if(localStorage.getItem("isOnline") === null) {
    // Si no está definido, lo definimos como false
    localStorage.setItem("isOnline", "false");
}



function renderizarIconos() {
    var isOnline = localStorage.getItem("isOnline");

    if (isOnline === "true") {
        // Si está en línea, ocultamos el ícono de inicio de sesión y mostramos el ícono del carrito y del perfil
        document.getElementById("sesionid").src = "./assets/sesionabierta.png";
        document.getElementById("cart").style.display = "block";
        document.getElementById("fav").style.display = "block";

    } else {
        // Si está fuera de línea, mostramos el ícono de inicio de sesión y ocultamos el ícono del carrito y del perfil
        document.getElementById("sesionid").src = "./assets/sesion.png";
        document.getElementById("cart").style.display = "none";
        document.getElementById("fav").style.display = "none";
    }
}


  // document.getElementById("sesionid").addEventListener("click", function() {
  //     var isOnline = localStorage.getItem("isOnline");
  // 
  //     if (isOnline === "false") {
  //         // Si el usuario no ha iniciado sesión, cambiar isOnline a true
  //         localStorage.setItem("isOnline", "true");
  //     } else {
  //         // Si el usuario ya inició sesión, cambiar isOnline a false
  //         localStorage.setItem("isOnline", "false");
  //     }
  // 
  //     // Renderizar los íconos después de cambiar el estado de la sesión
  //     renderizarIconos();
  // });



// Función para manejar el evento de clic en el ícono de sesión
function handleClickSesion() {
    var isOnline = localStorage.getItem("isOnline");

    if (isOnline === "false") {
        // Si el usuario no ha iniciado sesión, cambiar isOnline a true
        localStorage.setItem("isOnline", "true");
    } else {
        // Si el usuario ya inició sesión, cambiar isOnline a false
        localStorage.setItem("isOnline", "false");
    }

    // Renderizar los íconos después de cambiar el estado de la sesión
    renderizarIconos();
}

// Verificar si el documento HTML ha sido completamente cargado antes de intentar acceder a los elementos
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el elemento con ID "sesionid" está presente en el DOM
    var sesionidElement = document.getElementById("sesionid");
    if (sesionidElement) {
        // Agregar un event listener al elemento "sesionid" para manejar el clic
        sesionidElement.addEventListener("click", handleClickSesion);
    } else {
        console.error("El elemento con ID 'sesionid' no fue encontrado en el DOM.");
    }

    // Llamar a la función para renderizar los íconos al cargar la página
    renderizarIconos();
});


