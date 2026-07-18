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
    if (href && href !== '#') {
      try {
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } catch (e) {
        // Ignore invalid selectors
      }
    }
  });
});

const navLinks = document.querySelectorAll('.nav-menu a');
const navTargets = Array.from(navLinks)
  .map((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      try {
        return document.querySelector(href);
      } catch (e) {
        return null;
      }
    }
    return null;
  })
  .filter(Boolean);

function updateActiveNav() {
  const offset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
  const scrollPosition = window.scrollY + offset + 24;
  
  const currentPath = window.location.pathname;
  const isPersonalPage = currentPath.includes('personal');

  if (isPersonalPage) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href && href.includes('personal'));
    });
    return;
  }

  if (navTargets.length === 0) return;

  let activeId = navTargets[0]?.id;

  navTargets.forEach((target) => {
    if (target.offsetTop <= scrollPosition) {
      activeId = target.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', updateActiveNav);
updateActiveNav();

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
    activeIndex = ((index % slides.length) + slides.length) % slides.length;
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

  // Create carousel arrow buttons for manual navigation
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-arrow prev-arrow';
  prevBtn.setAttribute('aria-label', 'Previous image');
  prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-arrow next-arrow';
  nextBtn.setAttribute('aria-label', 'Next image');
  nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent opening lightbox
    stop();
    showSlide(activeIndex - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent opening lightbox
    stop();
    showSlide(activeIndex + 1);
  });

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
  start();
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxClose = document.getElementById('lightboxClose');

let lightboxImages = [];
let lightboxActiveIndex = 0;
let lightboxTrigger = null;

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxTrigger?.focus();
}

function updateLightboxImage() {
  if (lightboxImages.length > 0) {
    const activeImg = lightboxImages[lightboxActiveIndex];
    lightboxImg.src = activeImg.src;
    lightboxImg.alt = activeImg.alt;
  }
}

function showLightboxSlide(index) {
  if (lightboxImages.length === 0) return;
  lightboxActiveIndex = ((index % lightboxImages.length) + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

document.querySelectorAll('.pub-thumbnail img').forEach((img) => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lightboxTrigger = img;
    const carousel = img.closest('.pub-carousel');
    if (carousel) {
      lightboxImages = Array.from(carousel.querySelectorAll('img'));
      lightboxActiveIndex = lightboxImages.indexOf(img);
      lightbox.classList.add('has-multiple');
      updateLightboxImage();
    } else {
      lightboxImages = [];
      lightboxActiveIndex = 0;
      lightbox.classList.remove('has-multiple');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
  });
});

lightboxPrev.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  showLightboxSlide(lightboxActiveIndex - 1);
});

lightboxNext.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  showLightboxSlide(lightboxActiveIndex + 1);
});

lightboxClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeLightbox();
});

lightbox.addEventListener('click', (event) => {
  // Only a click on the dimmed backdrop closes the viewer.
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('active')) return;

  if (event.key === 'Escape') {
    closeLightbox();
  } else if (event.key === 'ArrowLeft' && lightboxImages.length > 0) {
    showLightboxSlide(lightboxActiveIndex - 1);
  } else if (event.key === 'ArrowRight' && lightboxImages.length > 0) {
    showLightboxSlide(lightboxActiveIndex + 1);
  }
});
