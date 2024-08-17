const d = document;

export default function hamburgerMenu(btn, nav, anchor) {
 const $btn = d.querySelector(btn),
  $nav = d.querySelector(nav),
  $anchorNav = d.querySelectorAll(anchor);

 $btn.addEventListener("click", (e) => {
  $btn.classList.toggle("is-active");
  $nav.classList.toggle("hidden");
 });

 $anchorNav.forEach((element) => {
  element.addEventListener("click", (e) => {
   $btn.classList.toggle("is-active");
   $nav.classList.toggle("hidden");
  });
 });
}
