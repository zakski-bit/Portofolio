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
          <span>${isDark ? 'Mode Terang (Light)' : 'Mode Gelap (Dark)'}</span>
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

  // 7. Database Detail Proyek (5 Proyek GitHub Produksi Zaki)
  const projectDetails = {
    'ldk-fikri': {
      category: 'FULLSTACK WEB APP',
      period: 'September 2026 &ndash; Sekarang',
      title: 'LDK FIKRI PNJ &mdash; Portal Resmi & Syiar Kampus',
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
        'Membangun portal resmi kegiatan dakwah kampus Politeknik Negeri Jakarta dengan arsitektur Next.js 15 App Router dan React 19.',
        'Mengintegrasikan modul Wakaf & Pembangunan Masjid Daarul Ilmi PNJ lengkap dengan transparansi dana, kalkulator wakaf, rekening resmi BSI, dan QRIS interaktif.',
        'Menyediakan fitur jadwal sholat dinamis, hadits harian, agenda kajian akbar, dan pendaftaran Mentoring Agama Islam (PAMI).',
        'Membangun portal admin dan manajemen konten berbasis Supabase untuk pengelolaan inventaris, verifikasi wakaf masuk, dan publikasi artikel.'
      ]
    },
    'dicostory': {
      category: 'FRONTEND & PWA',
      period: 'September 2026',
      title: 'DicoStory &mdash; Progressive Web App with Offline Sync & Geospatial Mapping',
      image: 'img/optimized/projects/dicostory.webp',
      githubUrl: 'https://github.com/zakski-bit/dicostory',
      liveUrl: 'https://dicostory-sub.netlify.app/',
      specs: [
        { label: 'PWA FEATURES', val: 'Installable, Service Worker, Manifest Maskable' },
        { label: 'OFFLINE CACHING', val: 'IndexedDB &amp; Cache API (StaleWhileRevalidate)' },
        { label: 'GEOSPATIAL MAP', val: 'Leaflet.js &amp; OpenStreetMap API' },
        { label: 'PUSH NOTIFIKASI', val: 'Web Push Notification (VAPID Support)' }
      ],
      points: [
        'Mengembangkan platform berbagi cerita berarsitektur Progressive Web App (PWA) yang dapat diinstall ke home screen perangkat mobile & desktop seperti aplikasi native.',
        'Mengimplementasikan sistem Offline-First dengan antrean outbox di IndexedDB: cerita yang diunggah saat luring otomatis tersinkronisasi saat koneksi pulih.',
        'Menampilkan persebaran cerita geografis seluruh pelosok Indonesia menggunakan peta interaktif Leaflet.js dengan penanda koordinat dinamis.',
        'Mengintegrasikan Web Push Notification terstandarisasi dengan event push dinamis dan action buttons untuk navigasi langsung ke detail cerita.'
      ]
    },
    'dicoevent': {
      category: 'BACKEND ARCHITECTURE',
      period: 'September 2026',
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
        'Merancang arsitektur backend RESTful API tingkat lanjut (Advanced - Nilai Bintang 5 / 4.0) untuk platform manajemen event berskala tinggi.',
        'Mengoptimalkan performa response time dengan Redis caching dan mekanisme cache invalidation otomatis saat terjadi mutasi data event.',
        'Menerapkan message broker asinkron Celery & RabbitMQ untuk pengiriman email tiket terdistribusi dan background tasks berat.',
        'Mengamankan endpoint dengan otentikasi JWT, Role-Based Access Control (RBAC), penyimpanan media MinIO S3, serta lolos 233 pengujian otomatis Postman/Newman.'
      ]
    },
    'antara-crm': {
      category: 'ENTERPRISE CRM',
      period: 'September 2025 &ndash; April 2026 (8 Bulan)',
      title: 'ANTARA CRM & Digital Media Portal (Perum LKBN ANTARA)',
      image: 'img/optimized/projects/antara-crm.webp',
      githubUrl: 'https://github.com/zakski-bit/antara-crm-system',
      liveUrl: 'https://crm-portfolio-live.vercel.app',
      specs: [
        { label: 'ENVIRONMENT', val: 'Docker Compose, Nginx, PHP, MariaDB' },
        { label: 'SECURITY & AUTH', val: 'Simulasi OTP 6-Digit &amp; RBAC Multi-level' },
        { label: 'CORE MODULES', val: 'Invoice Billing, Sales Force, License System' },
        { label: 'CLIENT DASHBOARD', val: 'Customer Partnership Portal &amp; Analytics' }
      ],
      points: [
        'Mengembangkan sistem manajemen hubungan pelanggan (CRM) dan portal distribusi konten media berita B2B untuk LKBN ANTARA.',
        'Membangun modul verifikasi login dua langkah berbasis OTP 6-digit, manajemen langganan lisensi produk berita multimedia (teks, foto HD, video broadcast), dan invoice otomatis.',
        'Merancang dashboard monitoring kinerja media berita dan portal kemitraan pelanggan korporasi.',
        'Menyediakan showcase interaktif online di Vercel yang dapat dieksplorasi langsung tanpa konfigurasi server lokal.'
      ]
    },
    'forum-api': {
      category: 'DEVOPS & BACKEND',
      period: 'September 2026',
      title: 'Forum API V2 &mdash; Clean Architecture, CI/CD & Security Hardening',
      image: 'img/optimized/projects/forum-api.webp',
      githubUrl: 'https://github.com/zakski-bit/forum-api',
      liveUrl: 'https://github.com/zakski-bit/forum-api',
      specs: [
        { label: 'ARCHITECTURE', val: 'Clean Architecture (Separation of Concerns)' },
        { label: 'CI/CD PIPELINE', val: 'GitHub Actions with Postgres Service Container' },
        { label: 'SECURITY HARDENING', val: 'Nginx SSL/TLS, Rate Limiting 90 req/min (DDoS)' },
        { label: 'TESTING COVERAGE', val: '100% Automated Unit, Integration &amp; Functional Test' }
      ],
      points: [
        'Membangun arsitektur backend RESTful API dengan prinsip Clean Architecture (Domain, Application, Infrastructure, Interface layer).',
        'Mengonfigurasi pipeline Continuous Integration (CI) berbasis GitHub Actions dengan service container PostgreSQL untuk pengujian otomatis pada setiap Pull Request.',
        'Menerapkan Continuous Deployment (CD) otomatis melalui SSH ke server cloud AWS EC2 pada setiap event push ke branch utama.',
        'Memperkuat keamanan server menggunakan Reverse Proxy Nginx dengan sertifikat SSL/TLS HTTPS dan proteksi DDoS rate limiting sebesar 90 request per menit.'
      ]
    },
    'wa-automation': {
      category: 'AUTOMATION & PYTHON',
      period: 'Februari 2026 &ndash; Sekarang',
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
        'Membangun engine otomasi pengiriman pesan massal WhatsApp Desktop Windows via native protocol URI (whatsapp://send).',
        'Mengimplementasikan smart window focusing dan hardware key injection menggunakan Win32 API tanpa dependensi browser berat seperti Selenium.',
        'Mendukung dynamic templating dengan variabel otomatis ({nama}, {panggilan}, {gugus}, {jurusan}) dari file spreadsheet CSV & Excel.',
        'Menyediakan simulator web interaktif di Vercel (wa-desktop-automation.vercel.app) untuk demonstrasi alur kerja aman tanpa spam.'
      ]
    },
    'bitcoin-forecast': {
      category: 'DEEP LEARNING & TIME SERIES',
      period: 'Oktober 2026',
      title: 'Bitcoin 24-Hour Multi-Horizon Price Forecasting (Seq2Seq LSTM)',
      image: 'img/optimized/projects/bitcoin-forecast.webp',
      githubUrl: 'https://github.com/zakski-bit/bitcoin-seq2seq-forecasting',
      liveUrl: 'https://bitcoin-seq2seq-forecasting-41sf.vercel.app',
      colabUrl: 'https://colab.research.google.com/drive/1dHQX7Zh0oi9HBnhiZxZ1-blRG87GEFjz?usp=sharing',
      specs: [
        { label: 'DEEP LEARNING FRAMEWORK', val: 'TensorFlow 2.15 &amp; Keras 3' },
        { label: 'MODEL ARCHITECTURE', val: 'Seq2Seq LSTM + Self-Attention Layer' },
        { label: 'CUSTOM TRAINING LOOP', val: 'tf.GradientTape with Adam Optimizer' },
        { label: 'EVALUATION & UI', val: 'RMSE / MAE &amp; Interactive Chart.js' }
      ],
      points: [
        'Merancang arsitektur model Sequence-to-Sequence (Seq2Seq) LSTM dengan custom Self-Attention layer untuk peramalan multi-step 24 jam ke depan harga Bitcoin (BTC/USD).',
        'Mengimplementasikan Custom Training Loop tingkat rendah (tf.GradientTape) untuk kontrol optimasi gradien, gradient clipping, dan loss calculation granular.',
        'Menerapkan feature engineering multi-dimensi (log-return, rolling mean/std volatility, momentum RSI) dan normalisasi MinMaxScaler robust.',
        'Menyediakan live dashboard interaktif di Vercel dengan rendering grafik Chart.js serta notebook Google Colab yang dapat dijalankan secara langsung.'
      ]
    },
    'movie-recommender': {
      category: 'MACHINE LEARNING TERAPAN',
      period: 'Oktober 2026',
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
        'Membangun sistem rekomendasi film hibrida yang menggabungkan Content-Based Filtering dan Collaborative Filtering berbasis Deep Learning neural embedding.',
        'Mengembangkan RecommenderNet dengan layer embedding pengguna dan film, dot product similarity, dan regularisasi Dropout untuk meminimalkan RMSE/MAE evaluasi.',
        'Mengimplementasikan Content-Based engine berbasis representasi teks metadata (genre, sinopsis) dengan TF-IDF vectorization dan Cosine Similarity matriks.',
        'Mendeploy showcase web interaktif di Vercel untuk pencarian rekomendasi instan dan membagikan notebook komprehensif di Google Colab.'
      ]
    },
    'forumapp': {
      category: 'FRONTEND EXPERT & REACT',
      period: 'September 2026 &ndash; Oktober 2026',
      title: 'Dicoding Forum App &mdash; React, Redux Toolkit & Automation Testing',
      image: 'img/optimized/projects/forumapp.webp',
      githubUrl: 'https://github.com/zakski-bit/forumapp',
      liveUrl: 'https://forumapp-ofvr-seven.vercel.app',
      specs: [
        { label: 'REACT ECOSYSTEM', val: 'React 18 &amp; Redux Toolkit (Thunk &amp; Slices)' },
        { label: 'AUTOMATION TESTING', val: 'Jest Unit/Integration &amp; Cypress E2E (Nilai Bintang 5)' },
        { label: 'CI/CD AUTOMATION', val: 'GitHub Actions Workflow (Lint, Test, Build)' },
        { label: 'DEPLOYMENT HOST', val: 'Vercel Edge Network' }
      ],
      points: [
        'Mengembangkan aplikasi forum diskusi modern berstandar enterprise dengan React 18 dan arsitektur state terpusat Redux Toolkit.',
        'Menerapkan Test-Driven Development (TDD) dan otomasi pengujian komprehensif: unit & integration test menggunakan Jest, serta End-to-End (E2E) testing dengan Cypress yang meraih rating Bintang 5 (Sempurna).',
        'Mengonfigurasi pipeline CI/CD GitHub Actions untuk menjalankan automated linter ESLint, pengujian otomatis, dan auto-deployment ke Vercel pada setiap push.',
        'Menyediakan fitur thread diskusi, upvote/downvote interaktif, kategori tag filter, leaderboard pengguna paling aktif, dan otentikasi JWT token.'
      ]
    },
    'notes-app': {
      category: 'MODULAR WEB COMPONENTS',
      period: 'Oktober 2026',
      title: 'Notes App &mdash; Vanilla Web Components & RESTful API v2',
      image: 'img/optimized/projects/notes-app.webp',
      githubUrl: 'https://github.com/zakski-bit/notes-app',
      liveUrl: 'https://notes-appz.netlify.app/',
      specs: [
        { label: 'CORE TECHNOLOGY', val: 'Vanilla JavaScript ES6+ (No Framework)' },
        { label: 'COMPONENT ARCHITECTURE', val: 'Web Components (Custom Elements &amp; Shadow DOM)' },
        { label: 'MODULE BUNDLER', val: 'Webpack 5 with Babel Transpiler' },
        { label: 'RESTFUL API', val: 'Dicoding Notes REST API v2 Integration' }
      ],
      points: [
        'Membangun aplikasi web modular tanpa framework eksternal dengan memanfaatkan standar resmi W3C Web Components (Custom Elements, Shadow DOM, HTML Templates).',
        'Mengintegrasikan komunikasi asinkron Fetch API dengan Dicoding Notes REST API v2 untuk operasi CRUD catatan aktif dan arsip catatan.',
        'Mengimplementasikan real-time form validation kustom dengan pesan error dinamis dan transisi CSS Grid responsif.',
        'Mengonfigurasi Webpack 5 untuk bundling aset produksi, minifikasi kode, dan deployment ke Netlify.'
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
            <span>Lihat Source Code (GitHub)</span>
          </a>
        ` : ''}
        ${data.liveUrl && data.liveUrl !== data.githubUrl ? `
          <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#e62846] text-white hover:bg-[#d0203c] transition-all shadow-md shadow-[#e62846]/20">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            <span>Kunjungi Live Website / Demo</span>
          </a>
        ` : ''}
        ${data.colabUrl ? `
          <a href="${data.colabUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300 transition-all">
            <i data-lucide="book-open" class="w-4 h-4"></i>
            <span>Buka Google Colab Notebook</span>
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
        <h4 class="text-xs font-bold text-[#e62846] uppercase tracking-wider mb-2.5">Arsitektur &amp; Parameter Teknis</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${specsHtml}
        </div>
      </div>

      <!-- Responsibility Points -->
      <div class="pt-2 border-t border-slate-100">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Sorotan Rekayasa &amp; Implementasi</h4>
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
      window.location.href = `https://wa.me/6288298038392?text=Halo%20Zaki,%20saya%20tertarik%20mendiskusikan%20mengenai%20${encodeURIComponent(data.title)}`;
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
      navigator.clipboard.writeText('zakiabdussalamall@gmail.com').then(() => {
        const orig = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span>Email Tersalin!</span>`;
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
      let text = `Halo Zaki, saya *${name}*:%0A%0A${encodeURIComponent(msg)}`;
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
