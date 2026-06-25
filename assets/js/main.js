const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

function updateIcons() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  sunIcon.style.display = isDark ? 'none' : 'block';
  moonIcon.style.display = isDark ? 'block' : 'none';
}

updateIcons();

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcons();
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function handleAnchorClick(event) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const sections = document.querySelectorAll('.nav-anchor');
const navLinks = document.querySelectorAll('.nav-menu a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach((section) => observerNav.observe(section));

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.pub-carousel').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('img'));
  if (slides.length < 2) {
    return;
  }

  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  carousel.appendChild(dots);

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === 0);
    slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');

    const dot = document.createElement('span');
    dot.className = `carousel-dot${index === 0 ? ' active' : ''}`;
    dots.appendChild(dot);
  });

  const dotItems = Array.from(dots.children);
  let activeIndex = 0;
  let timer;

  function showSlide(index) {
    activeIndex = index % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      dotItems[slideIndex].classList.toggle('active', isActive);
    });
  }

  function start() {
    timer = window.setInterval(() => {
      showSlide(activeIndex + 1);
    }, 3600);
  }

  function stop() {
    window.clearInterval(timer);
  }

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
  start();
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.pub-thumbnail img').forEach((img) => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
