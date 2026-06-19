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

// 汎用スライダー制御関数
function initSlider(sliderSelector, intervalTime = 5000) {
  const slider = document.querySelector(sliderSelector);
  if (!slider) return;

  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetSlideShow();
    });
  });

  if (slides.length > 0) {
    startSlideShow();
  }
}

// 各スライダーの初期化（5秒間隔）
initSlider('.hero-slider', 5000);
initSlider('.menu-slider', 5000);

