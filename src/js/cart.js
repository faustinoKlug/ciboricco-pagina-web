const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";

  const modalHeader = document.createElement("div");
  const modalClose = document.createElement("div");
  modalClose.innerHTML = "&Cross;";
  modalClose.className = "modal-close text-4xl absolute top-[2px] right-[10px]";
  modalHeader.append(modalClose);

  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Carrito";
  modalTitle.className = "modal-title font-bebas text-4xl tracking-wide";
  modalHeader.append(modalTitle);
  modalContainer.append(modalHeader);

  if (cart.length > 0) {
    cart.forEach((product) => {
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
        <div class="product flex items-center justify-around mb-[20px] w-full">
          <img class="product-img object-cover w-[100px] h-[90px]" src="${product.img}" />
          <div class="product-info flex flex-col">
            <p class="text-lg">${product.productName}</p>
            <form class="flex flex-col">
              <label>
                <input type="checkbox" class="checkbox media-checkbox" data-product-id="${product.id}">
                Media              
              </label>
              ${product.productCart.includes("EMPANADA") ? 
                `<label>
                  <input type="checkbox" class="checkbox unit-checkbox" data-product-id="${product.id}">
                  Unidad
                </label>` : ''}
            </form>
          </div>
          <div class="quantity flex items-center justify-center gap-x-4 text-white">
            <p class="quantity-btn-decrese text-xl cursor-pointer text-white">-</p>
            <p class="quantity-input text-xl text-white">${product.quanty}</p>
            <p class="quantity-btn-increse text-xl cursor-pointer text-white">+</p>
          </div>
          <p class="price text-lg">$${product.price * product.quanty}</p>
          <p class="delete-product cursor-pointer text-3xl">&Cross;</p>
        </div>
      `;
      modalContainer.append(modalBody);

      const mediaCheckbox = modalBody.querySelector('.media-checkbox');
      const unitCheckbox = modalBody.querySelector('.unit-checkbox');
      const priceElement = modalBody.querySelector('.price');

      if (!product.productType) {
        if (product.productCart.includes("EMPANADA")) {
          product.productType = "Docena";
        } else {
          product.productType = "Entera";
        }
      }

      if (product.productType === "Media") {
        mediaCheckbox.checked = true;
      } else if (product.productType === "Unidad" && unitCheckbox) {
        unitCheckbox.checked = true;
      }

      if (!product.originalPrice) {
        product.originalPrice = product.price;
      }

      const updatePrice = (priceElement, product) => {
        priceElement.innerText = `$${product.price * product.quanty}`;
      };

      const updateTotal = () => {
        const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
        const totalPriceElement = modalContainer.querySelector('.total-price');
        
        if (totalPriceElement) {
          totalPriceElement.innerText = `Total: $${total}`;
        }
      };

      mediaCheckbox.addEventListener('change', () => {
        if (mediaCheckbox.checked) {
          if (unitCheckbox) unitCheckbox.checked = false;
          product.productType = "Media";
      
          switch (product.id) {
<<<<<<< HEAD
            case 12: 
            case 13: 
            case 14: 
              product.price = 5500;
              break;
            case 16: 
              product.price = 6500;
              break;
            case 17: 
              product.price = 6900; 
              break;
            case 18: 
              product.price = 6500; 
              break;
            case 15: 
=======
            case 12: // JAMÓN Y QUESO
            case 13: // POLLO
            case 14: // VERDURA
              product.price = 5500;
              break;
            case 16: // CARNE
              product.price = 6500;
              break;
            case 17: // ARABE
              product.price = 6900; // Corregido a 6500
              break;
            case 18: // CAPRESSE
              product.price = 6500; // Corregido a 6000
              break;
            case 15: // CEBOLLA Y QUESO
>>>>>>> e5d2910af529282587a64fc73215b6502e67277c
              product.price = 5900;
              break;
            default:
              product.price = product.originalPrice / 2;
          }
        } else {
          if (!unitCheckbox?.checked) {
            product.price = product.originalPrice;
            product.productType = product.productCart.includes("EMPANADA") ? "Docena" : "Entera";
          }
        }
        updatePrice(priceElement, product);
        updateTotal();
<<<<<<< HEAD
      });   
=======
      });
      
      
      
>>>>>>> e5d2910af529282587a64fc73215b6502e67277c

      if (unitCheckbox) {
        unitCheckbox.addEventListener('change', () => {
          if (unitCheckbox.checked) {
            mediaCheckbox.checked = false;
            product.productType = "Unidad";
<<<<<<< HEAD
=======
            // Add prices for unit option if necessary
>>>>>>> e5d2910af529282587a64fc73215b6502e67277c
          } else {
            if (!mediaCheckbox?.checked) {
              product.price = product.originalPrice;
              product.productType = product.productCart.includes("EMPANADA") ? "Docena" : "Entera";
            }
          }
          updatePrice(priceElement, product);
          updateTotal();
        });
      }

      const decrese = modalBody.querySelector(".quantity-btn-decrese");
      decrese.addEventListener("click", () => {
        if (product.quanty > 1) {
          product.quanty--;
        }
        displayCart();
        displayCartCounter();
        updateTotal();
      });

      const increse = modalBody.querySelector(".quantity-btn-increse");
      increse.addEventListener("click", () => {
        if (product.quanty < 5) { 
          product.quanty++;
        }
        displayCart();
        displayCartCounter();
        updateTotal();
      });

      const deleteProduct = modalBody.querySelector(".delete-product");
      deleteProduct.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer flex mx-auto items-center justify-center w-full flex-col";
    modalFooter.innerHTML = `
      <div class="total-price font-semibold my-2 text-xl">Total: $${total}</div>
      <button class="font-bold rounded-md py-3 bg-[#131313] text-lg px-6 uppercase pedido-btn">realizar pedido</button>
    `;
    modalContainer.append(modalFooter);

    const pedidoBtn = modalFooter.querySelector(".pedido-btn");
    pedidoBtn.addEventListener("click", () => {
      modalContainer.style.display = "none";
      modalOverlay.style.display = "none";

      const pedidoInput = document.getElementById('pedido');
      let pedidoText = '';

      cart.forEach((product) => {
        pedidoText += `${product.productCart} (x${product.quanty} ${product.productType || "Entera"})\n`;
      });

      pedidoInput.innerHTML = pedidoText;

      const formMenu = document.getElementById("menu-pedido");
      const formOverlay = document.getElementById("overlay-pedido");

      formMenu.classList.remove("hidden");
      formMenu.classList.add("flex");
      formOverlay.classList.remove("hidden");
      document.documentElement.classList.add("overflow-y-hidden");
    });
  } else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "El carrito está vacío";
    modalContainer.append(modalText);
  }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
  const foundId = cart.findIndex((element) => element.id === id);

  if (foundId !== -1) {
    cart.splice(foundId, 1);

    const contentDiv = document.querySelector(`.pizza-${id}`);
    if (contentDiv) {
      contentDiv.classList.remove('in-cart');
    }

    displayCart();
    displayCartCounter();
  }
};

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);

  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};
