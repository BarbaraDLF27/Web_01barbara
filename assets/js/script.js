
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const abierto = navMenu.classList.toggle('abierto');
  menuToggle.setAttribute('aria-expanded', abierto);
  menuToggle.setAttribute('aria-label', abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
});

// Cierra el menú automáticamente al hacer clic en un enlace
// (útil en móvil: si no, el menú queda abierto tapando la sección)
const enlacesNav = navMenu.querySelectorAll('a');
enlacesNav.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    navMenu.classList.remove('abierto');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reducirMovimiento ? 'auto' : 'smooth' });
});

