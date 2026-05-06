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

  /* --- GSAP Advanced Animations (SKILL.md patterns) --- */
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // === Hero entrance with spring physics ===
    const heroTl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });
    heroTl
      .from('.hero__title', { opacity: 0, y: 80, scale: 0.95, duration: 1.2 })
      .from('.hero__subtitle', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' }, '-=0.7')
      .from('.hero__ctas .btn', { opacity: 0, y: 30, scale: 0.9, duration: 0.7, stagger: 0.15 }, '-=0.5')
      .from('.hero__stats .stat', { opacity: 0, y: 25, duration: 0.6, stagger: 0.12, ease: 'power2.out' }, '-=0.3')
      .from('.orbit-badge', { opacity: 0, scale: 0, duration: 0.5, stagger: 0.1, ease: 'elastic.out(1, 0.5)' }, '-=0.4');

    // === Scroll-triggered stagger reveals (SKILL.md: AnimatedSection pattern) ===
    document.querySelectorAll('.services-strip, .featured-grid, .team-teaser, .mini-projects, .portfolio-grid, .skills-bars, .stack-grid, .design-process').forEach(container => {
      const children = container.children;
      if (children.length > 0) {
        gsap.from(children, {
          scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' },
          opacity: 0, y: 40, scale: 0.95,
          duration: 0.7, stagger: 0.12, ease: 'power2.out'
        });
      }
    });

    // === Section headers — slide up with fade ===
    document.querySelectorAll('.section-header, .profile-section h2').forEach(header => {
      gsap.from(header, {
        scrollTrigger: { trigger: header, start: 'top 88%' },
        opacity: 0, y: 50, duration: 0.8, ease: 'power3.out'
      });
    });

    // === Why items — stagger from left ===
    gsap.from('.why-item', {
      scrollTrigger: { trigger: '.why-list', start: 'top 80%' },
      opacity: 0, x: -40, duration: 0.6, stagger: 0.15, ease: 'power2.out'
    });

    // === 3D cube entrance — scale in with rotation ===
    const cubeScene = document.querySelector('.cube-scene');
    if (cubeScene) {
      gsap.from(cubeScene, {
        scrollTrigger: { trigger: cubeScene, start: 'top 85%' },
        opacity: 0, scale: 0, rotateY: -180, duration: 1.2, ease: 'elastic.out(1, 0.6)'
      });
    }

    // === CTA banner — dramatic entrance ===
    const ctaBanner = document.querySelector('.cta-banner');
    if (ctaBanner) {
      gsap.from(ctaBanner.querySelector('h2'), {
        scrollTrigger: { trigger: ctaBanner, start: 'top 80%' },
        opacity: 0, y: 40, scale: 0.9, duration: 0.8, ease: 'power3.out'
      });
      gsap.from(ctaBanner.querySelector('.btn'), {
        scrollTrigger: { trigger: ctaBanner, start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.6, delay: 0.3, ease: 'back.out(1.7)'
      });
    }

    // === Glass cards — 3D tilt on hover (SKILL.md: CSS 3D transforms) ===
    if (window.innerWidth > 768) {
      document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / centerY * -5;
          const rotateY = (x - centerX) / centerX * 5;
          gsap.to(card, {
            rotateX, rotateY,
            transformPerspective: 800,
            duration: 0.4, ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        });
      });
    }

    // === Magnetic button effect (SKILL.md: interaction polish) ===
    if (window.innerWidth > 768) {
      document.querySelectorAll('.btn-primary, .btn-accent').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
        });
      });
    }

    // === Scroll progress bar ===
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:var(--gradient-1);z-index:9999;transition:width 0.1s linear;width:0%;border-radius:0 2px 2px 0;';
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + '%';
    }, { passive: true });

    // === Parallax scroll on gradient mesh orbs ===
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.gradient-mesh__orb').forEach((orb, i) => {
        const speed = (i + 1) * 0.05;
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });

    // === Text character reveal on hero title ===
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
      heroTitle.style.overflow = 'hidden';
    }

    // === Smooth counter with GSAP ===
    document.querySelectorAll('.stat__number[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power2.out',
        onUpdate: function() {
          el.textContent = Math.floor(parseFloat(el.textContent)) + suffix;
        }
      });
    });
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
