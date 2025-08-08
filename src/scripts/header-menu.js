const btnMenu = document.getElementById('btn-menu');
const btnClose = document.getElementById('btn-close');
const menuModal = document.getElementById('menu-modal');

/**
 * Abre o cierra el menú
 * @param {boolean} open 
 */
function toggleMenu(open) {
    menuModal.classList.toggle('hidden', !open);
    btnClose.setAttribute('aria-expanded', String(open));
};

// Eventos
btnMenu.addEventListener('click', () => toggleMenu(true));
btnClose.addEventListener('click', () => toggleMenu(false));
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleMenu(false);
});