const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

function closeMobileMenu() {
  menuButton?.classList.remove('is-open');
  mobileMenu?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const nextState = !mobileMenu.classList.contains('is-open');
  menuButton.classList.toggle('is-open', nextState);
  mobileMenu.classList.toggle('is-open', nextState);
  menuButton.setAttribute('aria-expanded', String(nextState));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
});
