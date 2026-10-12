// ============================================================
// Portfolio interactions for Zaki Abdussalam Alfajary
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Ikon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1.1 Theme Toggle Manager (Dark Mode & Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');

  function updateThemeUI(isDark) {
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = isDark
        ? '<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>'
        : '<i data-lucide="moon" class="w-4 h-4 text-slate-600"></i>';
    }
    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.innerHTML = `
        <span class="flex items-center gap-2 font-semibold">
          ${isDark
            ? '<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>'
            : '<i data-lucide="moon" class="w-4 h-4 text-slate-600"></i>'}
          <span>${isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </span>
        <i data-lucide="repeat" class="w-3.5 h-3.5 text-slate-400"></i>
      `;
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateThemeUI(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateThemeUI(true);
    }
  }

  // Initial UI sync with current DOM state
  const currentIsDark = document.documentElement.classList.contains('dark');
  updateThemeUI(currentIsDark);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
  }
  // Navbar Scroll & Section Spy (Matching WendoJ)
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Navbar glass effect on scroll (smooth editorial sticky header)
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link based on scroll position
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 250) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('nav-active');
      }
    });
  }, { passive: true });

  // 3. Smooth Scrolling with Offset for Navbar & In-Page Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetTop = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight + 6;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });

        if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
          closeMobileMenu();
        }
      }
    });
  });

  // 5. Mobile Drawer Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }

  function closeMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', (e) => {
      if (e.target === mobileMenuOverlay) closeMobileMenu();
    });
  }
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 6. Real-time WIB Clock in Footer (Matching WendoJ)
  const localClock = document.getElementById('localClock');
  function updateClock() {
    if (localClock) {
      const now = new Date();
      // WIB = UTC+7
      const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      localClock.textContent = `${now.toLocaleTimeString('id-ID', options)} WIB`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 7. Project Case Studies & Technical Architecture Database
  const projectDetails = {
    'ldk-fikri': {
      category: 'FULLSTACK WEB APP',
      period: 'Sep 2026 &ndash; Present',
      title: 'LDK FIKRI PNJ &mdash; Official Campus Ministry & Outreach Portal',
      image: 'img/optimized/projects/ldk-fikri.webp',
      githubUrl: 'https://github.com/zakski-bit/Ldk-Fikri',
      liveUrl: 'https://ldk-fikri-pnj.vercel.app',
      specs: [
        { label: 'FRONTEND STACK', val: 'Next.js 15 (React 19 App Router)' },
        { label: 'LANGUAGE & CSS', val: 'TypeScript &amp; Tailwind CSS' },
        { label: 'DATABASE & AUTH', val: 'Supabase (PostgreSQL, Auth & Storage)' },
        { label: 'DEPLOYMENT HOST', val: 'Vercel Edge Network' }
      ],
      points: [
        'Architected the official student ministry web portal for Jakarta State Polytechnic using Next.js 15 App Router and React 19.',
        'Integrated the Daarul Ilmi Mosque Endowment & Waqf module with transparent fund reporting, live waqf calculators, official BSI banking details, and interactive QRIS.',
        'Implemented dynamic prayer schedule synchronization, daily hadith feeds, grand study agendas, and online registration for Islamic Mentoring (PAMI).',
        'Built a robust role-based administrative dashboard powered by Supabase for inventory oversight, incoming waqf verification, and article publishing.'
      ]
    },
    'dicostory': {
      category: 'FRONTEND & PWA',
      period: 'Sep 2026',
      title: 'DicoStory &mdash; Progressive Web App with Offline Sync & Geospatial Mapping',
      image: 'img/optimized/projects/dicostory.webp',
      githubUrl: 'https://github.com/zakski-bit/dicostory',
      liveUrl: 'https://dicostory-sub.netlify.app/',
      specs: [
        { label: 'PWA CAPABILITIES', val: 'Installable, Service Worker, Maskable Manifest' },
        { label: 'OFFLINE CACHING', val: 'IndexedDB &amp; Cache API (StaleWhileRevalidate)' },
        { label: 'GEOSPATIAL MAP', val: 'Leaflet.js &amp; OpenStreetMap API' },
        { label: 'PUSH NOTIFICATIONS', val: 'Web Push Notifications (VAPID Support)' }
      ],
      points: [
        'Engineered an installable Progressive Web App (PWA) story-sharing platform delivering a responsive native-app-like user experience across desktop and mobile.',
        'Implemented an Offline-First architecture with an IndexedDB outbox queue: stories composed while offline automatically synchronize upon network restoration.',
        'Visualized user-submitted story locations across Indonesia on an interactive Leaflet.js map with dynamic coordinate clustering and geolocation pins.',
        'Integrated standard Web Push Notifications with custom push event listeners and action buttons for direct story navigation.'
      ]
    },
    'dicoevent': {
      category: 'BACKEND ARCHITECTURE',
      period: 'Sep 2026',
      title: 'DicoEvent V2 &mdash; Scalable Event Management RESTful API',
      image: 'img/optimized/projects/dicoevent.webp',
      githubUrl: 'https://github.com/zakski-bit/dicoevent-rest-api',
      liveUrl: 'https://dicoevent.vercel.app/',
      specs: [
        { label: 'BACKEND CORE', val: 'Python 3.10 &amp; Django 4.2 LTS (DRF)' },
        { label: 'DATABASE & CACHE', val: 'PostgreSQL &amp; Redis Caching Invalidation' },
        { label: 'ASYNC WORKERS', val: 'Celery + RabbitMQ Message Queue' },
        { label: 'OBJECT STORAGE', val: 'MinIO S3 &bull; 233 Newman Tests Passed' }
      ],
      points: [
        'Architected an advanced RESTful API (5-star / 4.0 evaluation) for high-concurrency event ticketing and catalog management.',
        'Optimized query latency and server throughput with Redis caching and automatic cache invalidation triggers on event record mutations.',
        'Integrated asynchronous background task processing using Celery and RabbitMQ for distributed ticket email delivery and heavy computations.',
        'Secured API endpoints with JWT authentication, granular RBAC, MinIO S3 media storage, achieving 100% pass across 233 automated Postman/Newman tests.'
      ]
    },
    'antara-crm': {
      category: 'ENTERPRISE CRM',
      period: 'Sep 2025 &ndash; Apr 2026',
      title: 'ANTARA CRM & Digital Media Portal (Perum LKBN ANTARA)',
      image: 'img/optimized/projects/antara-crm.webp',
      githubUrl: 'https://github.com/zakski-bit/antara-crm-system',
      liveUrl: 'https://crm-portfolio-live.vercel.app',
      specs: [
        { label: 'ENVIRONMENT', val: 'Docker Compose, Nginx, PHP, MariaDB' },
        { label: 'SECURITY & AUTH', val: '6-Digit OTP Simulation &amp; Multi-level RBAC' },
        { label: 'CORE MODULES', val: 'Invoice Billing, Sales Force, License Management' },
        { label: 'CLIENT DASHBOARD', val: 'Corporate Partnership Portal &amp; Analytics' }
      ],
      points: [
        'Engineered a customer relationship management (CRM) system and B2B news media distribution platform for LKBN ANTARA.',
        'Implemented two-factor authentication simulation via 6-digit OTP, tiered multimedia subscription licensing (text, HD photography, broadcast video), and automated billing.',
        'Designed high-fidelity analytics dashboards for real-time media distribution metrics and corporate partnership account monitoring.',
        'Deployed an interactive production showcase on Vercel for instant browser exploration without requiring local server orchestration.'
      ]
    },
    'forum-api': {
      category: 'DEVOPS & BACKEND',
      period: 'Sep 2026',
      title: 'Forum API V2 &mdash; Clean Architecture, CI/CD & Security Hardening',
      image: 'img/optimized/projects/forum-api.webp',
      githubUrl: 'https://github.com/zakski-bit/forum-api',
      liveUrl: 'https://github.com/zakski-bit/forum-api',
      specs: [
        { label: 'ARCHITECTURE', val: 'Clean Architecture (Separation of Concerns)' },
        { label: 'CI/CD PIPELINE', val: 'GitHub Actions with Postgres Service Container' },
        { label: 'SECURITY HARDENING', val: 'Nginx SSL/TLS, Rate Limiting 90 req/min (DDoS)' },
        { label: 'TESTING COVERAGE', val: '100% Automated Unit, Integration &amp; Functional Tests' }
      ],
      points: [
        'Constructed a robust RESTful API leveraging Clean Architecture principles across Domain, Application, Infrastructure, and Interface layers.',
        'Built continuous integration (CI) workflows with GitHub Actions utilizing PostgreSQL service containers to run automated test suites on every pull request.',
        'Automated Continuous Deployment (CD) pipeline deploying directly to AWS EC2 via SSH upon successful main branch merges.',
        'Hardened server infrastructure with Nginx reverse proxy, HTTPS SSL/TLS encryption, and DDoS mitigation rate limiting capped at 90 requests per minute.'
      ]
    },
    'wa-automation': {
      category: 'AUTOMATION & PYTHON',
      period: 'Feb 2026 &ndash; Present',
      title: 'WhatsApp Desktop Automation Sender & Batch Messenger',
      image: 'img/optimized/projects/wa-desktop-automation.webp',
      githubUrl: 'https://github.com/zakski-bit/wa-desktop-automation',
      liveUrl: 'https://wa-desktop-automation.vercel.app',
      specs: [
        { label: 'RUNTIME CORE', val: 'Python 3.10 &amp; Win32 API Hooking' },
        { label: 'INPUT INJECTION', val: 'Hardware Scan Code 0x1C (Key Event)' },
        { label: 'ANTI-SPAM ENGINE', val: 'Random Jitter Delays (15–25s) &amp; Logger' },
        { label: 'LIVE SIMULATOR', val: 'Interactive Web Demo at Vercel' }
      ],
      points: [
        'Engineered a lightweight batch messaging engine targeting Windows WhatsApp Desktop via native protocol handlers (whatsapp://send).',
        'Implemented Win32 API window focusing and low-level hardware scan code key injection, completely bypassing heavy Selenium browser overhead.',
        'Supported dynamic message templating with variable substitution ({name}, {department}, {organization}) parsed directly from CSV and Excel spreadsheets.',
        'Developed and deployed an interactive web simulator on Vercel demonstrating safe, jitter-delayed automated messaging workflows.'
      ]
    },
    'bitcoin-forecast': {
      category: 'DEEP LEARNING & TIME SERIES',
      period: 'Oct 2026',
      title: 'Bitcoin 24-Hour Multi-Horizon Price Forecasting (Seq2Seq LSTM)',
      image: 'img/optimized/projects/bitcoin-forecast.webp',
      githubUrl: 'https://github.com/zakski-bit/bitcoin-seq2seq-forecasting',
      liveUrl: 'https://bitcoin-seq2seq-forecasting-41sf.vercel.app',
      colabUrl: 'https://colab.research.google.com/drive/1dHQX7Zh0oi9HBnhiZxZ1-blRG87GEFjz?usp=sharing',
      specs: [
        { label: 'DEEP LEARNING FRAMEWORK', val: 'TensorFlow 2.15 &amp; Keras 3' },
        { label: 'MODEL ARCHITECTURE', val: 'Seq2Seq LSTM + Self-Attention Layer' },
        { label: 'CUSTOM TRAINING LOOP', val: 'tf.GradientTape with Adam Optimizer' },
        { label: 'EVALUATION & UI', val: 'RMSE / MAE Metrics &amp; Interactive Chart.js' }
      ],
      points: [
        'Engineered a Sequence-to-Sequence (Seq2Seq) LSTM neural architecture augmented with a custom Self-Attention mechanism for multi-step 24-hour Bitcoin price forecasting.',
        'Constructed a low-level Custom Training Loop (tf.GradientTape) providing fine-grained control over gradient optimization, clipping, and custom loss dynamics.',
        'Formulated multi-dimensional feature engineering including log returns, rolling volatility, RSI momentum indicators, and robust MinMax scaling.',
        'Shipped an interactive web dashboard on Vercel featuring Chart.js visual analytics alongside an executable Google Colab research notebook.'
      ]
    },
    'movie-recommender': {
      category: 'APPLIED MACHINE LEARNING',
      period: 'Oct 2026',
      title: 'CineMatch &mdash; End-to-End Movie Recommender System',
      image: 'img/optimized/projects/movie-recommender.webp',
      githubUrl: 'https://github.com/zakski-bit/movie-recommender-system',
      liveUrl: 'https://movie-recommender-system-mu-sable.vercel.app/',
      colabUrl: 'https://colab.research.google.com/drive/1INLUzym1GanvzJL8NU3YgXJeYVfl0K8N?usp=sharing',
      specs: [
        { label: 'ML & DEEP LEARNING', val: 'TensorFlow/Keras &amp; Scikit-Learn' },
        { label: 'COLLABORATIVE MODEL', val: 'RecommenderNet (Neural Embeddings)' },
        { label: 'CONTENT-BASED MODEL', val: 'TF-IDF Vectorizer + Cosine Similarity' },
        { label: 'BENCHMARK DATASET', val: 'MovieLens 100K (100,000+ Ratings)' }
      ],
      points: [
        'Designed a hybrid movie recommendation engine combining content-based textual features with deep collaborative filtering embeddings.',
        'Implemented RecommenderNet utilizing user and item embedding layers, dot-product similarity, and Dropout regularization to minimize RMSE and MAE.',
        'Engineered a content-based vectorizer over genre and metadata corpus using TF-IDF and high-dimensional Cosine Similarity matrices.',
        'Deployed a production web demo on Vercel for real-time recommendation querying accompanied by a reproducible Google Colab notebook.'
      ]
    },
    'forumapp': {
      category: 'FRONTEND EXPERT & REACT',
      period: 'Sep 2026 &ndash; Oct 2026',
      title: 'Dicoding Forum App &mdash; React, Redux Toolkit & Automated Testing',
      image: 'img/optimized/projects/forumapp.webp',
      githubUrl: 'https://github.com/zakski-bit/forumapp',
      liveUrl: 'https://forumapp-ofvr-seven.vercel.app',
      specs: [
        { label: 'REACT ECOSYSTEM', val: 'React 18 &amp; Redux Toolkit (Thunk &amp; Slices)' },
        { label: 'AUTOMATION TESTING', val: 'Jest Unit/Integration &amp; Cypress E2E (5-Star Rating)' },
        { label: 'CI/CD AUTOMATION', val: 'GitHub Actions Workflow (Lint, Test, Build)' },
        { label: 'DEPLOYMENT HOST', val: 'Vercel Edge Network' }
      ],
      points: [
        'Built an enterprise-grade discussion forum application with React 18 and centralized state architecture powered by Redux Toolkit.',
        'Adopted Test-Driven Development (TDD) with comprehensive Jest unit and integration suites, plus Cypress End-to-End (E2E) automation achieving a flawless 5-star score.',
        'Configured GitHub Actions CI/CD to enforce ESLint standards, run automated test suites, and deploy production builds to Vercel upon push.',
        'Implemented interactive threaded replies, upvote/downvote mechanics, category filtering, active user leaderboards, and JWT token authentication.'
      ]
    },
    'notes-app': {
      category: 'MODULAR WEB COMPONENTS',
      period: 'Oct 2026',
      title: 'Notes App &mdash; Vanilla Web Components & RESTful API v2',
      image: 'img/optimized/projects/notes-app.webp',
      githubUrl: 'https://github.com/zakski-bit/notes-app',
      liveUrl: 'https://notes-appz.netlify.app/',
      specs: [
        { label: 'CORE TECHNOLOGY', val: 'Vanilla JavaScript ES6+ (Framework-free)' },
        { label: 'COMPONENT ARCHITECTURE', val: 'Web Components (Custom Elements &amp; Shadow DOM)' },
        { label: 'MODULE BUNDLER', val: 'Webpack 5 with Babel Transpiler' },
        { label: 'RESTFUL API', val: 'Dicoding Notes REST API v2 Integration' }
      ],
      points: [
        'Engineered a zero-framework, modular web application adhering strictly to official W3C Web Component standards (Custom Elements, Shadow DOM, HTML Templates).',
        'Integrated asynchronous Fetch API communication with Dicoding Notes REST API v2 for full CRUD handling across active and archived notes.',
        'Implemented custom real-time client-side form validation with dynamic feedback and responsive CSS Grid animations.',
        'Configured Webpack 5 build tooling for modern asset bundling, tree-shaking, code minification, and Netlify deployment.'
      ]
    }
  };

  // 8. Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectsContainer = document.getElementById('projectsContainer');
  const projectsTrack = document.getElementById('projectsTrack');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('pill-active'));
      btn.classList.add('pill-active');

      const selectedCat = btn.getAttribute('data-cat');
      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (selectedCat === 'all' || cardCat === selectedCat) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
      // If a category other than 'all' is selected, switch to grid view for easy browsing
      if (selectedCat !== 'all') {
        const gridBtn = document.getElementById('projectGridViewBtn');
        if (gridBtn && !gridBtn.classList.contains('active')) gridBtn.click();
      }
    });
  });

  // Certificate Filtering
  const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-card');
  const certificatesContainer = document.getElementById('certificatesContainer');
  const certificatesTrack = document.getElementById('certificatesTrack');

  certFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilterBtns.forEach(b => b.classList.remove('pill-active'));
      btn.classList.add('pill-active');

      const selectedCat = btn.getAttribute('data-cert-cat');
      certCards.forEach(card => {
        const cardCat = card.getAttribute('data-cert-category');
        if (selectedCat === 'all' || cardCat === selectedCat || cardCat === 'all') {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
      if (selectedCat !== 'all') {
        const gridBtn = document.getElementById('certGridViewBtn');
        if (gridBtn && !gridBtn.classList.contains('active')) gridBtn.click();
      }
    });
  });

  // 8.1 Smooth Marquee & Grid View Mode Controller (Gambar 1 Referensi)
  function setupMarqueeViewControl({
    containerId,
    trackId,
    sliderViewBtnId,
    gridViewBtnId,
    arrowsContainerId,
    prevBtnId,
    nextBtnId
  }) {
    const container = document.getElementById(containerId);
    const track = document.getElementById(trackId);
    const sliderViewBtn = document.getElementById(sliderViewBtnId);
    const gridViewBtn = document.getElementById(gridViewBtnId);
    const arrows = document.getElementById(arrowsContainerId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!container || !track) return;

    if (sliderViewBtn && gridViewBtn) {
      sliderViewBtn.addEventListener('click', () => {
        container.classList.remove('grid-mode');
        container.classList.add('cards-marquee-container', 'marquee-fade-mask');
        track.classList.add('cards-marquee-track', 'cards-marquee-left');
        sliderViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        if (arrows) arrows.style.display = 'flex';
      });

      gridViewBtn.addEventListener('click', () => {
        track.classList.remove('cards-marquee-track', 'cards-marquee-left');
        container.classList.remove('cards-marquee-container', 'marquee-fade-mask');
        container.classList.add('grid-mode');
        gridViewBtn.classList.add('active');
        sliderViewBtn.classList.remove('active');
        if (arrows) arrows.style.display = 'none';
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }
  }

  // Setup Projects Marquee/Grid View Controller
  setupMarqueeViewControl({
    containerId: 'projectsContainer',
    trackId: 'projectsTrack',
    sliderViewBtnId: 'projectSliderViewBtn',
    gridViewBtnId: 'projectGridViewBtn',
    arrowsContainerId: 'projectSliderArrows',
    prevBtnId: 'projectPrevBtn',
    nextBtnId: 'projectNextBtn'
  });

  // Setup Certificates Marquee/Grid View Controller
  setupMarqueeViewControl({
    containerId: 'certificatesContainer',
    trackId: 'certificatesTrack',
    sliderViewBtnId: 'certSliderViewBtn',
    gridViewBtnId: 'certGridViewBtn',
    arrowsContainerId: 'certSliderArrows',
    prevBtnId: 'certPrevBtn',
    nextBtnId: 'certNextBtn'
  });

  // 8.3 Animated Number Counter (Gambar 2 Referensi)
  const statElements = document.querySelectorAll('.stat-number');
  let counterStarted = false;

  function runCounters() {
    statElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function (easeOutExpo)
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = target * ease;

        if (decimals > 0) {
          el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;
        } else {
          el.textContent = `${prefix}${Math.round(currentVal)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          if (decimals > 0) {
            el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
          } else {
            el.textContent = `${prefix}${target}${suffix}`;
          }
        }
      }
      requestAnimationFrame(update);
    });
  }

  const counterSection = document.getElementById('achievementCounters');
  if (counterSection && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
          counterStarted = true;
          runCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    counterObserver.observe(counterSection);
  } else {
    runCounters();
  }

  // 9. Case Study Modal Controller
  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalBody');
  const modalCategory = document.getElementById('modalCategory');
  const modalPeriod = document.getElementById('modalPeriod');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalActionBtn = document.getElementById('modalActionBtn');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data || !modal) return;

    modalCategory.textContent = data.category;
    modalPeriod.innerHTML = data.period;

    let specsHtml = data.specs.map(s => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
        <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">${s.label}</div>
        <div class="text-sm font-semibold text-slate-900 mt-0.5">${s.val}</div>
      </div>
    `).join('');

    let pointsHtml = data.points.map(p => `
      <li class="flex items-start gap-2.5">
        <i data-lucide="check" class="w-4 h-4 text-[#e62846] mt-0.5 shrink-0"></i>
        <span class="text-slate-700 leading-relaxed">${p}</span>
      </li>
    `).join('');

    let actionButtonsHtml = `
      <div class="flex flex-wrap items-center gap-3 pt-1">
        ${data.githubUrl ? `
          <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all">
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>View Source Code (GitHub)</span>
          </a>
        ` : ''}
        ${data.liveUrl && data.liveUrl !== data.githubUrl ? `
          <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#e62846] text-white hover:bg-[#d0203c] transition-all shadow-md shadow-[#e62846]/20">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            <span>Launch Live Demo</span>
          </a>
        ` : ''}
        ${data.colabUrl ? `
          <a href="${data.colabUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300 transition-all">
            <i data-lucide="book-open" class="w-4 h-4"></i>
            <span>Open Google Colab Notebook</span>
          </a>
        ` : ''}
      </div>
    `;

    modalBody.innerHTML = `
      <!-- Media Cover -->
      <div class="rounded-xl overflow-hidden border border-slate-200 bg-slate-950 aspect-video relative">
        <img src="${data.image}" alt="${data.title}" width="800" height="450" loading="lazy" decoding="async" class="w-full h-full object-cover" />
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-white">${data.title}</h3>
        </div>
      </div>

      <!-- Action Links -->
      ${actionButtonsHtml}

      <!-- Specs Grid -->
      <div>
        <h4 class="text-xs font-bold text-[#e62846] uppercase tracking-wider mb-2.5">Technical Specs &amp; Architecture</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${specsHtml}
        </div>
      </div>

      <!-- Responsibility Points -->
      <div class="pt-2 border-t border-slate-100">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Key Engineering Implementations</h4>
        <ul class="space-y-2 text-xs sm:text-sm">
          ${pointsHtml}
        </ul>
      </div>
    `;

    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();

    modalActionBtn.onclick = () => {
      closeProjectModal();
      window.location.href = `https://wa.me/6288298038392?text=Hello%20Zaki,%20I%20would%20like%20to%20discuss%20the%20project:%20${encodeURIComponent(data.title)}`;
    };
  }

  function closeProjectModal() {
    if (modal) {
      modal.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    }
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      openProjectModal(pId);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('modal-open')) {
      closeProjectModal();
    }
  });

  // 10. Copy Email Button
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('zakiabdussalamal@gmail.com').then(() => {
        const orig = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Email Copied!</span>`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          copyEmailBtn.innerHTML = orig;
          if (window.lucide) window.lucide.createIcons();
        }, 2200);
      });
    });
  }

  // 11. WhatsApp Direct Form
  const waQuickForm = document.getElementById('waQuickForm');
  if (waQuickForm) {
    waQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('waName').value.trim();
      const msg = document.getElementById('waMsg').value.trim();
      const phone = '6288298038392';
      let text = `Hello Zaki, I am *${name}*:%0A%0A${encodeURIComponent(msg)}`;
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  }

  // 12. Interactive 3D Parallax Tilt for Hero Portrait
  const heroStage = document.getElementById('heroPortraitStage');
  const heroCard = document.getElementById('heroPortraitCard');

  if (heroStage && heroCard && window.matchMedia('(hover: hover)').matches) {
    let isHovering = false;

    heroStage.addEventListener('mouseenter', () => {
      isHovering = true;
      heroCard.style.animationPlayState = 'paused';
    });

    heroStage.addEventListener('mousemove', (e) => {
      if (!isHovering) return;
      const rect = heroStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotX = -(y / (rect.height / 2)) * 10;
      const rotY = (x / (rect.width / 2)) * 10;
      
      heroCard.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-8px)`;
    });

    heroStage.addEventListener('mouseleave', () => {
      isHovering = false;
      heroCard.style.transform = '';
      heroCard.style.animationPlayState = 'running';
    });
  }

  // All content is guaranteed visible without scroll-blocking opacity shifts

});
