///////////////////////✏️ Actividad: asignación de evento de teclado con event listener////////
////1.Define la función captureText para que imprima por consola “capturado”. 
//   function captureText(){
//      console.log("capturado");
//    }


   //const seachSelector = document.querySelector("#search");

//seachSelector.addEventListener("keyup",captureText);







////////////////////////✏️ Actividad: Investigación del evento de teclado//////////////////////


//        const seachSelector = document.querySelector("#search");

//Modifica el escuchador de eventos, de manera que ahora, la función depende de un objeto con todos los datos del evento. A modo de ejemplo:

//    seachSelector.addEventListener("keyup",evento=>captureText(evento))
//
////Modifica la función captureText para que reciba el evento como parámetro e imprime por consola algunas propiedades importantes. 
//
//    function captureText(evento){
//        
//        console.log(evento); // Imprimir el objeto KeyboardEvent completo
//        console.log("tecla presionado: ",evento.key);
//        console.log("valor input: ",evento.target.value);
//
//
//        
//      }
//
//



////Filtrar con teclado
//////////////////////////////////////✏️ Actividad: Filtrar productos///////////////////
////Modifica la función captureText para que:

/////////guarde en una variable el valor capturado por el evento

/////////filtre el array con todos los productos con los productos cuyo nombre incluya el texto capturado

////////actualice la vista con una nueva impresión de las tarjetas



    const seachSelector = document.querySelector("#search");


       function captureText(evento){
        // Guardar en una variable el valor capturado por el evento
              const searchText=evento.target.value.toLowerCase();

        // Filtrar el array de productos para obtener solo aquellos cuyo nombre incluya el texto capturado
        // products es el array const products = [product1, product2, product3, product4, product5, product6];

             const FiltrarProductos= products.filter(product =>product.name.toLowerCase().includes(searchText)) ;
             
            renderProducts(FiltrarProductos,'products');


            console.log("guardar variable: " ,searchText); 
            console.log("guardar filtrado: " ,FiltrarProductos); 
            console.log("tecla presionado: ",evento.key);
            console.log("valor input: ",evento.target.value);
       }

       seachSelector.addEventListener("keyup",captureText);


       