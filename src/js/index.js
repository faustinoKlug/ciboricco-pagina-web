import openForm from "./hacetupedido_btn.js";
import hamburgerMenu from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".hamburger", ".nav-mobile", ".anchor-nav");
  openForm(
    ".hacetupedido",
    "#menu-pedido",
    "#overlay-pedido",
    ".close-pedido",
    "#nombre",
    "#domicilio",
    "#horario",
    "#comentario",
    "#pedido",
    "#enviar-pedido",
  );
});
