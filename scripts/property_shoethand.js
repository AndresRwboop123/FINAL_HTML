// Definición de variables que representan datos personales y físicos
const nombre = "Ana";
const edad = 25;
const correo = "ana@example.com";
const altura = 160;
const peso = 55;

// Creación del objeto usando property shorthand
const usuario = {
  nombre,
  edad,
  correo,
  fisicos: {
    altura,
    peso
  }
};


// Actualización del contenido de los elementos HTML
document.getElementById("nombre").textContent = `Nombre: ${usuario.nombre}`;
document.getElementById("edad").textContent = `Edad: ${usuario.edad}`;
document.getElementById("correo").textContent = `Correo: ${usuario.correo}`;



// Verificación de la edad para mostrar información adicional o restringir cierta información
if (usuario.edad >= 18) {
    document.getElementById("altura").textContent = `Altura: ${usuario.fisicos.altura} cm`;
    document.getElementById("peso").textContent = `Peso: ${usuario.fisicos.peso} kg`;
  } else {
    document.getElementById("altura").textContent = "Información restringida para menores de edad.";
    document.getElementById("peso").textContent = "Información restringida para menores de edad.";
  }