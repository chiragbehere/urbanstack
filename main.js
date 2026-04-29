/* ============================================
   URBANSTACK — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Dark/Light Mode Toggle --- */
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('urbanstack-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('urbanstack-theme', next);
      updateToggleIcon(next);
    });
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark'
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';
    if (window.lucide) lucide.createIcons();
  }

  /* --- Mobile Hamburger Menu --- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Sticky Nav Glass Effect --- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* --- Active Nav Link --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --- Scroll Reveal (Intersection Observer) --- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* --- Animated Number Counters --- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  /* --- Testimonial Carousel --- */
  const carousel = document.querySelector('.testimonial-carousel');
  if (carousel) {
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    let current = 0;
    let autoplay;

    function showSlide(index) {
      slides.forEach((s, i) => {
        s.style.opacity = i === index ? '1' : '0';
        s.style.transform = i === index ? 'translateX(0)' : 'translateX(40px)';
        s.style.position = i === index ? 'relative' : 'absolute';
        s.style.pointerEvents = i === index ? 'all' : 'none';
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      current = index;
    }

    function nextSlide() { showSlide((current + 1) % slides.length); }
    function startAutoplay() { autoplay = setInterval(nextSlide, 5000); }
    function stopAutoplay() { clearInterval(autoplay); }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { stopAutoplay(); showSlide(i); startAutoplay(); });
    });

    showSlide(0);
    startAutoplay();
  }

  /* --- Portfolio Filter --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cats = card.getAttribute('data-category');
        const show = filter === 'all' || cats.includes(filter);
        card.style.opacity = show ? '1' : '0';
        card.style.transform = show ? 'scale(1)' : 'scale(0.9)';
        setTimeout(() => { card.style.display = show ? '' : 'none'; }, 300);
      });
    });
  });

  /* --- FAQ Accordion --- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* --- Pricing Toggle --- */
  const pricingToggle = document.querySelector('.pricing-toggle input');
  const monthlyPrices = document.querySelectorAll('.price-monthly');
  const projectPrices = document.querySelectorAll('.price-project');

  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const isMonthly = pricingToggle.checked;
      monthlyPrices.forEach(p => p.style.display = isMonthly ? 'block' : 'none');
      projectPrices.forEach(p => p.style.display = isMonthly ? 'none' : 'block');
    });
  }

  /* --- Contact Form Validation --- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      contactForm.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
        } else {
          input.classList.remove('error');
        }
      });

      const email = contactForm.querySelector('[type="email"]');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      const message = contactForm.querySelector('textarea');
      if (message && message.value.trim().length < 120) {
        message.classList.add('error');
        valid = false;
      }

      if (valid) {
        contactForm.style.display = 'none';
        const success = document.querySelector('.form-success');
        if (success) success.classList.add('show');
      }
    });

    contactForm.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('input', () => input.classList.remove('error'));
    });
  }

  /* --- Case Study Modal --- */
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.querySelector(trigger.getAttribute('data-modal'));
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    });
  });

  /* --- GSAP Hero Animations (if GSAP loaded) --- */
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero__title', { opacity: 0, y: 60, duration: 1, ease: 'power3.out', delay: 0.2 });
    gsap.from('.hero__subtitle', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.5 });
    gsap.from('.hero__ctas', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.8 });
    gsap.from('.hero__stats .stat', { opacity: 0, y: 20, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 1.1 });
  }

  /* --- Custom Cursor --- */
  if (window.innerWidth > 1024) {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorRing.className = 'cursor-ring';

    const style = document.createElement('style');
    style.textContent = `
      .cursor-dot { position:fixed; top:0; left:0; width:6px; height:6px; background:var(--accent-1);
        border-radius:50%; pointer-events:none; z-index:9999; transition:transform 0.1s; }
      .cursor-ring { position:fixed; top:0; left:0; width:32px; height:32px; border:1.5px solid var(--accent-1);
        border-radius:50%; pointer-events:none; z-index:9999; opacity:0.5; transition:transform 0.15s,width 0.3s,height 0.3s,opacity 0.3s; }
      a:hover ~ .cursor-ring, button:hover ~ .cursor-ring { width:48px; height:48px; opacity:0.3; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    document.addEventListener('mousemove', (e) => {
      cursorDot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      cursorRing.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    });
  }

  /* --- Initialize Lucide Icons --- */
  if (window.lucide) lucide.createIcons();
});
