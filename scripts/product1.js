
  const navSelector = document.getElementById("navbar");

navSelector.innerHTML = '';

const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "como", linkTo: "./how.html" },
    { title: "tarifas", linkTo: "./taxs.html" },
    { title: "ordenes", linkTo: "./orders.html" },
    { title: "Canasta", linkTo: "./warranty.html" },
  ];


  for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    navSelector.appendChild(anchor);
  }




