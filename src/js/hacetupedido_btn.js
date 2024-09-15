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
  enviarpedido
) {
  const $menuBtn = d.querySelectorAll(btn),
    $menu = d.querySelector(menu),
    $overlay = d.querySelector(overlay),
    $closeBtn = d.querySelector(close),
    $nombreInput = d.querySelector(nombre),
    $domicilioInput = d.querySelector(domicilio),
    $horarioInput = d.querySelector(horario),
    $comentarioInput = d.querySelector(comentario),
    $pedidoInput = d.querySelector(pedido),
    $pedidoBtn = d.querySelector(enviarpedido);

  $menuBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      $menu.classList.remove("hidden");
      $menu.classList.add("flex");
      $overlay.classList.remove("hidden");
    });
  });

  $closeBtn.addEventListener("click", (e) => {
    $menu.classList.remove("flex");
    $menu.classList.add("hidden");
    $overlay.classList.add("hidden");
  });

  $pedidoBtn.addEventListener("click", (e) => {
    let domicilioValue = $domicilioInput.value,
      nombreValue = $nombreInput.value,
      horarioValue = $horarioInput.value,
      pedidoValue = $pedidoInput.value,
      comentarioValue = $comentarioInput.value;

    let whatsappMessage = `
      https://wa.me/3442558577?text=Pedido:%0A${pedidoValue}%0A%0ANombre%20y%20apellido:%0A${nombreValue}%0A%0ADirección:%0A${domicilioValue}%0A%0AHorario%20de%20entrega%20preferido:%0A${horarioValue}%0A%0AComentario%20adicional:%0A${comentarioValue}`;

    if (
      domicilioValue === "" ||
      nombreValue === "" ||
      horarioValue === "" ||
      pedidoValue === "" ||
      comentarioValue === ""
    ) {
      alert("Rellena TODO el formulario");
    } else {
      window.open(whatsappMessage);
    }
  });
}
