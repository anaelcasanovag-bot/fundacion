// smooth-scroll.js → 100 % funcional (desaparece siempre arriba)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-ir-arriba');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.classList.remove('d-none'); // muestra
    } else {
      btn.classList.add('d-none'); // oculta siempre arriba
    }
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Al cargar la página (si estás arriba lo oculta)
  if (window.pageYOffset <= 300) btn.classList.add('d-none');
});
