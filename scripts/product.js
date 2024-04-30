class Productoprop {
  constructor(name, price, category,taxPolicy,image,imagenmin=[],discount,id,descripciong,colors) {
      this.name = name;
      this.price = price;
      this.category = category;
      this.taxPolicy=taxPolicy;
      this.image=image;
      this.imagenmin=imagenmin;
      this.discount=discount;
      this.id=id;
      this.descripciong=descripciong;
      this.colors = colors;
  }
}

// Crea seis instancias de la clase Product
const product1 = new Productoprop("iPad Pro 12.9", 900000, "Tablet","Incluye impuesto PAIS y percepción AFIP","https://i.postimg.cc/kX8PKZpq/ipad2.jpg",["https://acortar.link/obuA56","https://acortar.link/L7n7NO"],"50%"
,"PR1"
,"Experience the power of creativity with the MacBook Pro 13'4.Featuring 8GB of RAM and 512GB of storage"
,["Silver", "Space Gray"]);




const product2 = new Productoprop("iPhone 13 Pro", 1200000, "Smartphone","Incluye impuesto PAIS y percepción AFIP","https://i.postimg.cc/kX8PKZpq/ipad2.jpg",["https://i.postimg.cc/kX8PKZpq/ipad2.jpg","https://i.postimg.cc/kX8PKZpq/ipad2.jpg"]
,"20%",
"PR2"
,"Experience the power of creativity with the iPhone 13 .Featuring 8GB of RAM and 512GB of storage, this laptop provides"
,["Silver", "Graphite", "Gold", "Blue"]);


const product3 = new Productoprop("MacBook Pro", 2500000, "Laptop","Incluye impuesto PAIS y percepción AFIP","https://i.postimg.cc/kX8PKZpq/ipad2.jpg",["https://i.postimg.cc/kX8PKZpq/ipad2.jpg","https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
"50%",
"PR3","sAYONARA"
,["Graphite", "Space Gray"]);



const product4 = new Productoprop("AirPods Pro", 500000, "Audio","Incluye impuesto PAIS y percepción AFIP","https://i.postimg.cc/kX8PKZpq/ipad2.jpg",["https://i.postimg.cc/kX8PKZpq/ipad2.jpg","https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
"10%",
"PR4",
"Experience the power of creativity with theAirPods Pro.Featuring 8GB of RAM and 512GB of storage, this laptop provides",
["Graphite", "Gold"]);


const product5 = new Productoprop("Apple Watch Series 7", 800000, "Wearable","Incluye impuesto PAIS y percepción AFIP","https://i.postimg.cc/kX8PKZpq/ipad2.jpg",["https://i.postimg.cc/kX8PKZpq/ipad2.jpg","https://i.postimg.cc/kX8PKZpq/ipad2.jpg"],
"50%",
"PR5",
"Experience the power of creativity with theAirPods Pro.Featuring 8GB of RAM and 512GB ",
["Graphite", "Blue"]);



const product6 = new Productoprop("HomePod mini", 200000, "Smart Speaker","Incluye impuesto PAIS y percepción AFIP","https://i.postimg.cc/kX8PKZpq/ipad2.jpg",["https://i.postimg.cc/kX8PKZpq/ipad2.jpg","https://i.postimg.cc/kX8PKZpq/ipad2.jpg"]
,"1%"
,"PR6",
"Experience the power of creativity with theAirPods Pro.Featuring 8GB of RAM and 512GB ",
["Gold", "Blue"]);

// Crea un array con las instancias de Product
const products = [product1, product2, product3, product4, product5, product6];






