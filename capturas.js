const visor = document.querySelector('#visor');
const titulo = document.querySelector('#visor-titulo');
const imagen = document.querySelector('#visor-imagen');

if (typeof visor.showModal === 'function') {
  for (const enlace of document.querySelectorAll('a.shot')) {
    enlace.addEventListener('click', (evento) => {
      if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;
      evento.preventDefault();
      titulo.textContent = enlace.dataset.caption;
      imagen.alt = enlace.querySelector('img').alt;
      imagen.src = enlace.href;
      visor.showModal();
    });
  }
}
