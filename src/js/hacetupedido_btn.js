const d = document;

export default function openForm(
  btn,
  menu,
  overlay,
  close,
  nombre,
  domicilio,
  horario,
  comentario,
  pedido,
  enviarpedido,
  pedidoCont
) {
  const $menuBtn = d.querySelectorAll(btn),
    $menu = d.querySelector(menu),
    $overlay = d.querySelector(overlay),
    $closeBtn = d.querySelector(close),
    $nombreInput = d.querySelector(nombre),
    $domicilioInput = d.querySelector(domicilio),
    $horarioInput = d.querySelector(horario),
    $comentarioInput = d.querySelector(comentario),
    $pedidoDiv = d.querySelector(pedido),
    $pedidoContainer = d.querySelector(pedidoCont),
    $pedidoBtn = d.querySelector(enviarpedido);

  $closeBtn.addEventListener("click", (e) => {
    $menu.classList.remove("flex");
    $menu.classList.add("hidden");
    $overlay.classList.add("hidden");
    d.documentElement.classList.remove("overflow-y-hidden");
  });

  $pedidoBtn.addEventListener("click", (e) => {
    let domicilioValue = $domicilioInput.value,
      nombreValue = $nombreInput.value,
      horarioValue = $horarioInput.value,
      comentarioValue = $comentarioInput.value,
      pedidoValue = $pedidoDiv.innerHTML;

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    let whatsappMessage = `
    https://wa.me/3442500075?text=*Pedido:*%0A${encodeURIComponent(pedidoValue)}%0A*Total:* $${total}%0A%0A*Nombre%20y%20apellido:*%0A${nombreValue}%0A%0A*Dirección:*%0A${domicilioValue}%0A%0A*Horario%20de%20entrega%20preferido:*%0A${horarioValue}%0A%0A*Comentario%20adicional:*%0A${comentarioValue}`;

    if (
      domicilioValue === "" ||
      nombreValue === "" ||
      horarioValue === "" ||
      pedidoValue === ""
    ) {
      alert("Rellena todo el formulario");
    } else {
      window.open(whatsappMessage);
    }
  });

}
