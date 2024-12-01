const shopContentPizzas = document.getElementById("shopContentPizzas"),
  shopRContentPizzas = document.getElementById("Pizzas"),
  shopContentEmpanadas = document.getElementById("shopContentEmpanadas"),
  shopRContentEmpanadas = document.getElementById("Empanadas"),
  shopContentCalzones = document.getElementById("shopContentCalzones"),
  shopRContentCalzones = document.getElementById("Calzones");

const cart = [];

const separatorPizzas = document.createElement("h2");
separatorPizzas.className = "font-bold text-4xl lg:text-5xl"
separatorPizzas.innerHTML = `
    &RightArrow; 
      <span class="text-green-500">PI</span><span class="text-WHITE">ZZ</span></span><span class="text-red-500">AS</span>
    &LeftArrow;`;
shopRContentPizzas.append(separatorPizzas);
productosPizza.forEach((product) => {
    let contentPizzas = document.createElement("div");
    contentPizzas.className =
      `shadow-2xl p-4 h-auto max-w-[320px] rounded-lg flex flex-col justify-between items-center mt-4 pizza-${product.productName}`;
    contentPizzas.innerHTML = `
      <img src="${product.img}" alt="pizza" class="rounded-full h-[190px] object-cover w-[190px]">
      <p class="flex w-full justify-between text-lg md:text-xl text-orange-400 mb-2 items-center">
          ${product.productName}
          <span class="flex items-center justify-center gap-x-2">
              <button class="buybutton-pizza">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048">
                      <path fill="#ffffff" d="M960 0q132 0 255 34t229 97t194 150t150 194t97 230t35 255t-34 255t-97 229t-150 194t-194 150t-230 97t-255 35t-255-34t-229-97t-194-150t-150-194t-97-229T0 960q0-132 34-255t97-229t150-194t194-150t229-97T960 0m576 896h-512V384H896v512H384v128h512v512h128v-512h512z"/>
                  </svg>
              </button>
              <span class="font-bold lg:text-green-500 p-1 lg:border-green-500 text-white border-white border-[1px]">$${product.price}</span>
          </span>
      </p>
    <p class="text-lg">${product.description}</p>
    `;

    shopContentPizzas.append(contentPizzas);

});

const separatorEmpanadas = document.createElement("h2");
separatorEmpanadas.className = `font-bold text-4xl lg:text-5xl`
separatorEmpanadas.innerHTML = `
      &RightArrow; <span class="text-cyan-500">EM</span>PA<span class="text-yellow-500">N</span>AD</span><span class="text-cyan-500">AS</span>
      &LeftArrow;`;
shopRContentEmpanadas.append(separatorEmpanadas);
productosEmpanada.forEach((product) => {
  let contentEmpanadas = document.createElement("div");
  contentEmpanadas.className =
    `shadow-2xl p-4 h-auto max-w-[320px] rounded-lg flex flex-col justify-between items-center mt-4 pizza-${product.productName}`;
  contentEmpanadas.innerHTML = `
        <img src="${product.img}" alt="pizza" class="rounded-full h-[190px] object-cover w-[190px]">
        <p class="flex w-full justify-between text-lg md:text-xl text-orange-400 mb-2 items-center">
            ${product.productName}
            <span class="flex items-center justify-center gap-x-2">
                <button class="buybutton-empanada">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048">
                        <path fill="#ffffff" d="M960 0q132 0 255 34t229 97t194 150t150 194t97 230t35 255t-34 255t-97 229t-150 194t-194 150t-230 97t-255 35t-255-34t-229-97t-194-150t-150-194t-97-229T0 960q0-132 34-255t97-229t150-194t194-150t229-97T960 0m576 896h-512V384H896v512H384v128h512v512h128v-512h512z"/>
                    </svg>
                </button>
                <span class="font-bold lg:text-green-500 p-1 lg:border-green-500 text-white border-white border-[1px]">$${product.price}</span>
            </span>
        </p>
      <p class="text-lg">${product.description}</p>
      `;
  
  shopContentEmpanadas.append(contentEmpanadas);
});

const separatorCalzones = document.createElement("h2");
separatorCalzones.className = `font-bold text-4xl lg:text-5xl`
separatorCalzones.innerHTML = `
    &RightArrow; <span class="text-green-500">CAL</span><span class="text-WHITE">ZO</span></span><span class="text-red-500">NES</span>
    &LeftArrow;`;
shopRContentCalzones.append(separatorCalzones);
productosCalzone.forEach((product) => {
  let contentCalzones = document.createElement("div");
  contentCalzones.className =
    `shadow-2xl p-4 h-auto max-w-[320px] rounded-lg flex flex-col justify-around mt-4 pizza-${product.productName}`;
  contentCalzones.innerHTML = `
        <img src="${product.img}" alt="pizza" class="rounded-full mx-auto h-[190px] object-cover w-[190px]">
        <p class="flex w-full justify-between text-lg md:text-xl text-orange-400 items-center">
            ${product.productName}
            <span class="flex items-center justify-center gap-x-2">
                <button class="buybutton-calzone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048">
                        <path fill="#ffffff" d="M960 0q132 0 255 34t229 97t194 150t150 194t97 230t35 255t-34 255t-97 229t-150 194t-194 150t-230 97t-255 35t-255-34t-229-97t-194-150t-150-194t-97-229T0 960q0-132 34-255t97-229t150-194t194-150t229-97T960 0m576 896h-512V384H896v512H384v128h512v512h128v-512h512z"/>
                    </svg>
                </button>
                <span class="font-bold lg:text-green-500 p-1 lg:border-green-500 text-white border-white border-[1px]">$${product.price}</span>
            </span>
        </p>
      <p class="text-lg">${product.description}</p>
      `;
  
  shopContentCalzones.append(contentCalzones);
});

const buyButtonsPizzas = document.querySelectorAll(".buybutton-pizza");

buyButtonsPizzas.forEach((buyButtonPizza, index) => {
  buyButtonPizza.addEventListener("click", () => {
    const product = productosPizza[index];
    const repeat = cart.some(
      (repeatProduct) => repeatProduct.id === product.id
    );

    const contentDiv = document.querySelector(`.pizza-${product.productName}`);

      cart.push({
        id: product.id,
        img: product.img,
        productName: product.productName,
        productCart: product.productCart,
        price: product.price,
        quanty: 1,
      });
      // Añadir clase cuando se agrega al carrito
      contentDiv.classList.add('in-cart');
      displayCartCounter();
    
  });
});

const buyButtonsEmpanadas = document.querySelectorAll(".buybutton-empanada");

buyButtonsEmpanadas.forEach((buyButtonEmpanada, index) => {
  buyButtonEmpanada.addEventListener("click", () => {
    const product = productosEmpanada[index];
    const repeat = cart.some(
      (repeatProduct) => repeatProduct.id === product.id
    );

    const contentDiv = document.querySelector(`.pizza-${product.productName}`);

      cart.push({
        id: product.id,
        img: product.img,
        productName: product.productName,
        productCart: product.productCart,
        price: product.price,
        quanty: 1,
      });

      contentDiv.classList.add('in-cart');
      displayCartCounter();
    
  });
});

const buyButtonsCalzones = document.querySelectorAll(".buybutton-calzone");

buyButtonsCalzones.forEach((buyButtonCalzone, index) => {
  buyButtonCalzone.addEventListener("click", () => {
    const product = productosCalzone[index];

    const contentDiv = document.querySelector(`.pizza-${product.productName}`);

      cart.push({
        id: product.id,
        img: product.img,
        productName: product.productName,
        productCart: product.productCart,
        price: product.price,
        quanty: 1,
      });

      contentDiv.classList.add('in-cart');
      displayCartCounter();
    
  });
});

