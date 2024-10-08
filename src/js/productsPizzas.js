 const productosPizza = [
  {
    id: 1,
    productName: "MUZZA",
    productCart: "PIZZA MUZZA",
    productType: "",
    price: 6300,
    quanty: 1,
    description: `<span class="font-bold">Queso muzzarella</span>, tomate triturado y aceitunas`,
    img: "assets/muzza.webp",
  },
  {
    id: 2,
    productName: "DELUX",
    productCart: "PIZZA DELUX",
    productType: "",
    price: 6900,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado, <span class="font-bold">jamón y morron</span>`,
    img: "assets/delux.jpeg",
  },
  {
    id: 3,
    productName: "NAPOLES",
    productCart: "PIZZA NAPOLES",
    productType: "",
    price: 6900,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado y <span class="font-bold">tomate fresco</span>`,
    img: "assets/napoles.webp",
  },
  {
    id: 4,
    productName: "PICAPIEDRA",
    productCart: "PIZZA PICAPIEDRA",
    productType: "",
    price: 6900,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado y <span class="font-bold">huevo duro</span>`,
    img: "assets/picapiedra.webp",
  },
  {
    id: 5,
    productName: "FUGA",
    productCart: "PIZZA FUGA",
    productType: "",
    price: 7300,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado y <span class="font-bold">cebolla caramelizada</span>`,
    img: "assets/fuga.webp",
  },
  {
    id: 6,
    productName: "PROVEN",
    productCart: "PIZZA PROVEN",
    productType: "",
    price: 7300,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado, <span class="font-bold">perejíl y ajo</span>`,
    img: "assets/proven.webp",
  },
  {
    id: 7,
    productName: "MILAN",
    productCart: "PIZZA MILAN",
    productType: "",
    price: 7300,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado y <span class="font-bold">milan</span>`,
    img: "assets/milan.jpeg",
  },
  {
    id: 8,
    productName: "CALABRIA",
    productCart: "PIZZA CALABRIA",
    productType: "",
    price: 8100,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado y <span class="font-bold">longaniza</span>`,
    img: "assets/calabria.webp",
  },
  {
    id: 9,
    productName: "RÚCHETOM",
    productCart: "PIZZA RÚCHETOM",
    productType: "",
    price: 8100,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado, <span class="font-bold">rúcula y tomate cherry</span>`,
    img: "assets/ruchetom.webp",
  },
  {
    id: 10,
    productName: "CAPRESSE",
    productCart: "PIZZA CAPRESSE",
    productType: "",
    price: 8100,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado, <span class="font-bold">albahaca y tomates cherry</span>`,
    img: "assets/capresse-pizza.jpeg",
  },
  {
    id: 11,
    productName: "REINA",
    productCart: "PIZZA REINA",
    productType: "",
    price: 8700,
    quanty: 1,
    description: `Queso muzzarella, tomate triturado, <span class="font-bold">huevo frito y papas fritas</span>`,
    img: "assets/lareina.webp",
  },
];

const productosEmpanada = [
  {
    id: 12,
    productName: "JAMÓN Y QUESO",
    productCart: "EMPANADA DE JYQ",
    productType: "",
    price: "8900",
    quanty: 1,
    description: `$5000 Media. $900 c/u (comprando menos de media)`,
    img: "assets/jyq.jpeg",
  },
  {
    id: 13,
    productName: "POLLO",
    productCart: "EMPANADA DE POLLO",
    productType: "",
    price: 8900,
    quanty: 1,
    description: `$5000 Media, $900 c/u (comprando menos de media)`,
    img: "assets/pollo.jpeg",
  },
  {
    id: 14,
    productName: "VERDURA",
    productCart: "EMPANADA DE VERDURA",
    productType: "",
    price: 8900,
    quanty: 1,
    description: `$5700 Media, $1000 c/u (comprando menos de media)`,
    img: "assets/verdura.webp",
  },
  {
    id: 15,
    productName: `CEBOLLA Y QUESO`,
    productCart: "EMPANADA DE CEBOLLA Y QUESO",
    productType: "",
    price: 9400,
    quanty: 1,
    description: `$4700 Media, $870 c/u (comprando menos de media)`,
    img: "assets/cebollayqueso.jpeg",
  },
  {
    id: 16,
    productName: "CARNE",
    productCart: "EMPANADA DE CARNE",
    productType: "",
    price: 9900,
    quanty: 1,
    description: `$5700 Media, $970 c/u (comprando menos de media)`,
    img: "assets/nosesabe.webp",
  },
  {
    id: 17,
    productName: "CAPRESSE",
    productCart: "EMPANADA DE CAPRESSE",
    productType: "",
    price: 9900,
    quanty: 1,
    description: `$5700 Media, $970 c/u (comprando menos de media)`,
    img: "assets/capresse.webp",
  }
];

const productosCalzone = [
  {
    id: 18,
    productName: "CLÁSICO",
    productCart: "CALZONE CLÁSICO",
    productType: "",
    price: "10500",
    quanty: 1,
    description: `Salsa, muzzarella y jamón`,
    img: "assets/calzonclasico.jpg",
  },
  {
    id: 19,
    productName: "VERDURA",
    productCart: "CALZONE VERDURA",
    productType: "",
    price: "10500",
    quanty: 1,
    description: `Salsa, muzzarella y acelga`,
    img: "assets/calzonverdura.jpg",
  },
  {
    id: 20,
    productName: "CEBOLLA",
    productCart: "CALZONE CEBOLLA",
    productType: "",
    price: "11000",
    quanty: 1,
    description: `Salsa, muzzarella y cebolla caramelizada`,
    img: "assets/calzoncarne.jpg",
  },
  {
    id: 21,
    productName: "CARNE",
    productCart: "CALZONE CARNE",
    productType: "",
    price: "11900",
    quanty: 1,
    description: `Salsa, muzzarella y carne picada`,
    img: "assets/calzoncarne.jpg",
  },
  {
    id: 22,
    productName: "CAPRESSE",
    productCart: "CALZONE CAPRESSE",
    productType: "",
    price: "11900",
    quanty: 1,
    description: `Salsa, muzzarella, cherry y albahaca`,
    img: "assets/calzoncaprese.jpg",
  },
];