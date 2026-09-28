// ============================================================
// WENDO J PORTFOLIO LOGIC — ZAKI ABDUSSALAM ALFAJARY
// Preloader, Tilt Cards, Scroll Highlighting, Modal & Clock
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Ikon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Preloader Animation (Matching WendoJ)
  const preloader = document.getElementById('preloader');
  const preloaderWord = document.getElementById('preloaderWord');
  const words = ['Connect', 'Innovate', 'Design', 'Engineer', 'Welcome to My Portfolio'];
  let wordIndex = 0;

  const wordInterval = setInterval(() => {
    wordIndex++;
    if (wordIndex < words.length && preloaderWord) {
      preloaderWord.textContent = words[wordIndex];
    } else {
      clearInterval(wordInterval);
    }
  }, 260);

  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('preloader-hidden');
    }
  }, 1850);

  // 3. Inisialisasi VanillaTilt (Matching WendoJ)
  if (window.VanillaTilt) {
    const tiltElements = document.querySelectorAll('.tilt-card');
    VanillaTilt.init(Array.from(tiltElements), {
      max: 6,
      speed: 350,
      glare: true,
      'max-glare': 0.12,
      perspective: 900,
      scale: 1.015,
    });
  }

  // 4. Navbar Scroll & Section Spy (Matching WendoJ)
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Navbar glass effect on scroll (always keep backdrop blur & background)
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-xl', 'shadow-black/60', 'py-3.5');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.remove('shadow-xl', 'shadow-black/60', 'py-3.5');
      navbar.classList.add('py-4');
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

  // 5. Mobile Drawer Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
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
      image: 'img/projects/ldk-fikri.jpg',
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
      image: 'img/projects/dicostory.jpg',
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
      image: 'img/projects/dicoevent.jpg',
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
      period: 'September 2025 &ndash; Desember 2025',
      title: 'ANTARA CRM & Digital Media Portal (Perum LKBN ANTARA)',
      image: 'img/projects/antara-crm.jpg',
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
      image: 'img/projects/forum-api.jpg',
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
    }
  };

  // 8. Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

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
    });
  });

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
      <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
        <div class="text-[11px] text-slate-400">${s.label}</div>
        <div class="text-sm font-semibold text-white mt-0.5">${s.val}</div>
      </div>
    `).join('');

    let pointsHtml = data.points.map(p => `
      <li class="flex items-start gap-2.5">
        <i data-lucide="check" class="w-4 h-4 text-primary mt-0.5 shrink-0"></i>
        <span class="text-slate-300 leading-relaxed">${p}</span>
      </li>
    `).join('');

    let actionButtonsHtml = `
      <div class="flex flex-wrap items-center gap-3 pt-1">
        ${data.githubUrl ? `
          <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all">
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>Lihat Source Code (GitHub)</span>
          </a>
        ` : ''}
        ${data.liveUrl && data.liveUrl !== data.githubUrl ? `
          <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-black hover:bg-secondary transition-all shadow-md shadow-primary/20">
            <i data-lucide="external-link" class="w-4 h-4"></i>
            <span>Kunjungi Live Website / Demo</span>
          </a>
        ` : ''}
      </div>
    `;

    modalBody.innerHTML = `
      <!-- Media Cover -->
      <div class="rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-video relative">
        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover bg-[#0b0c10]" />
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/80 to-transparent p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-white">${data.title}</h3>
        </div>
      </div>

      <!-- Action Links -->
      ${actionButtonsHtml}

      <!-- Specs Grid -->
      <div>
        <h4 class="text-xs font-semibold text-primary uppercase tracking-wider mb-2.5">Arsitektur &amp; Parameter Teknis</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${specsHtml}
        </div>
      </div>

      <!-- Responsibility Points -->
      <div class="pt-2 border-t border-white/5">
        <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">Sorotan Rekayasa &amp; Implementasi</h4>
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
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  }

  // 12. Dynamic Video Background Controller (Local HTML5 & YouTube)
  const videoBackgroundWrap = document.getElementById('videoBackgroundWrap');
  const bgVideoPlayer = document.getElementById('bgVideoPlayer');
  const ytContainer = document.getElementById('ytContainer');
  const bgVideoIframe = document.getElementById('bgVideoIframe');

  const toggleBgVideoBtn = document.getElementById('toggleBgVideoBtn');
  const videoStatusDot = document.getElementById('videoStatusDot');
  const videoStatusText = document.getElementById('videoStatusText');

  const openVideoModalBtn = document.getElementById('openVideoModalBtn');
  const closeVideoModalBtn = document.getElementById('closeVideoModalBtn');
  const videoCustomModal = document.getElementById('videoCustomModal');
  const customVideoInput = document.getElementById('customVideoInput');
  const applyCustomVideoBtn = document.getElementById('applyCustomVideoBtn');
  const presetButtons = document.querySelectorAll('.preset-btn');

  let isVideoOn = true;

  // Ensure local video autoplays smoothly
  if (bgVideoPlayer) {
    bgVideoPlayer.muted = true;
    const playVideo = () => {
      bgVideoPlayer.play().catch(e => console.log('Autoplay pending interaction', e));
    };
    playVideo();
    document.addEventListener('click', playVideo, { once: true });
    document.addEventListener('touchstart', playVideo, { once: true });
  }

  function switchToLocalVideo() {
    if (ytContainer) ytContainer.classList.add('hidden');
    if (bgVideoIframe) bgVideoIframe.src = '';
    if (bgVideoPlayer) {
      bgVideoPlayer.classList.remove('hidden');
      bgVideoPlayer.muted = true;
      bgVideoPlayer.currentTime = 0;
      bgVideoPlayer.play().catch(() => {});
    }
  }

  function switchToYouTubeVideo(videoId) {
    if (bgVideoPlayer) {
      bgVideoPlayer.pause();
      bgVideoPlayer.classList.add('hidden');
    }
    if (ytContainer) ytContainer.classList.remove('hidden');
    if (bgVideoIframe) {
      bgVideoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1`;
    }
  }

  function extractYouTubeId(urlOrId) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = urlOrId.match(regExp);
    return (match && match[2].length === 11) ? match[2] : urlOrId.trim();
  }

  if (toggleBgVideoBtn) {
    toggleBgVideoBtn.addEventListener('click', () => {
      isVideoOn = !isVideoOn;
      if (isVideoOn) {
        if (bgVideoPlayer && !bgVideoPlayer.classList.contains('hidden')) {
          bgVideoPlayer.play().catch(() => {});
        }
        videoBackgroundWrap.style.opacity = '1';
        videoStatusDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse';
        videoStatusText.textContent = 'Ambient Video: ON';
      } else {
        if (bgVideoPlayer) bgVideoPlayer.pause();
        videoBackgroundWrap.style.opacity = '0';
        videoStatusDot.className = 'w-2 h-2 rounded-full bg-slate-500';
        videoStatusText.textContent = 'Ambient Video: OFF';
      }
    });
  }

  function openVideoModal() {
    if (videoCustomModal) {
      videoCustomModal.classList.remove('opacity-0', 'pointer-events-none');
    }
  }

  function closeVideoModal() {
    if (videoCustomModal) {
      videoCustomModal.classList.add('opacity-0', 'pointer-events-none');
    }
  }

  if (openVideoModalBtn) openVideoModalBtn.addEventListener('click', openVideoModal);
  if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
  if (videoCustomModal) {
    videoCustomModal.addEventListener('click', (e) => {
      if (e.target === videoCustomModal) closeVideoModal();
    });
  }

  presetButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget;
      const vid = targetBtn.getAttribute('data-id');
      if (vid === 'local') {
        switchToLocalVideo();
      } else if (vid) {
        switchToYouTubeVideo(vid);
      }
      presetButtons.forEach(b => {
        b.classList.remove('border-primary/50', 'bg-white/10');
        b.classList.add('border-white/10');
        const titleSpan = b.querySelector('span.font-bold');
        if (titleSpan) titleSpan.className = 'font-bold block text-slate-200';
      });
      targetBtn.classList.add('border-primary/50', 'bg-white/10');
      targetBtn.classList.remove('border-white/10');
      const activeTitle = targetBtn.querySelector('span.font-bold');
      if (activeTitle) activeTitle.className = 'font-bold block text-primary';
      
      closeVideoModal();
    });
  });

  if (applyCustomVideoBtn) {
    applyCustomVideoBtn.addEventListener('click', () => {
      const val = customVideoInput.value.trim();
      if (val) {
        const parsedId = extractYouTubeId(val);
        switchToYouTubeVideo(parsedId);
        customVideoInput.value = '';
        closeVideoModal();
      }
    });
  }
});

