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

  // 7. Database Detail Proyek (Sesuai CV Resmi Zaki)
  const projectDetails = {
    'mimo-antenna': {
      category: 'RF & ANTENA',
      period: 'September 2025 &ndash; Juni 2026',
      title: 'Rancang Bangun Antena Mikrostrip Array 2x2 MIMO Wideband',
      image: 'img/mimo-antenna.jpg',
      specs: [
        { label: 'APLIKASI SISTEM', val: 'FWA LTE (Fixed Wireless Access)' },
        { label: 'RENTANG FREKUENSI', val: '1800 &ndash; 2100 MHz' },
        { label: 'MODIFIKASI GROUND', val: 'Z-Slot, Slit, dan Slit-DGS' },
        { label: 'PARAMETER EVALUASI', val: 'S-Parameter, Gain, ECC, Diversity Gain' }
      ],
      points: [
        'Merancang antena mikrostrip array 2x2 MIMO untuk aplikasi FWA LTE pada rentang 1800 - 2100 MHz.',
        'Mengembangkan modifikasi struktur Z-Slot, slit, dan slit-DGS pada ground plane untuk meningkatkan bandwidth dan isolasi antar-elemen.',
        'Melakukan simulasi 3D elektromagnetik dengan CST Studio Suite, fabrikasi PCB fisik prototipe, serta pengujian parameter antena.',
        'Mengevaluasi S-parameter, gain radiasi, Envelope Correlation Coefficient (ECC), dan diversity gain pada sistem MIMO.'
      ]
    },
    'emotion-ai': {
      category: 'MACHINE LEARNING',
      period: 'April 2025 &ndash; Juni 2025',
      title: 'Emotion Detection Web Application',
      image: 'img/emotion-detection.jpg',
      specs: [
        { label: 'BAHASA & TOOLS', val: 'Python, Google Colab' },
        { label: 'CLOUD INFERENCE', val: 'Google Cloud Platform (GCP)' },
        { label: 'OBJEK DETEKSI', val: 'Prediksi Usia, Emosi Wajah, dan Ras' },
        { label: 'ARSITEKTUR', val: 'Web-based Machine Learning System' }
      ],
      points: [
        'Mengembangkan aplikasi web berbasis machine learning untuk mendeteksi usia, emosi, dan ras/wajah secara real-time.',
        'Melakukan pelatihan model kecerdasan buatan menggunakan Python dan Google Colab.',
        'Mengintegrasikan model machine learning dengan Google Cloud Platform (GCP) untuk inferensi prediksi melalui antarmuka web.'
      ]
    },
    'digital-savings': {
      category: 'IOT & HARDWARE',
      period: 'November 2024 &ndash; Desember 2024',
      title: 'Digital Savings System (Sensor Warna + Sheets API)',
      image: 'img/digital-savings.jpg',
      specs: [
        { label: 'KONTROLER UTAMA', val: 'Mikrokontroler Arduino / ESP Wi-Fi' },
        { label: 'SENSOR OPTIK', val: 'Sensor Warna RGB (TCS3200)' },
        { label: 'CLOUD DATABASE', val: 'Google Spreadsheet via Cloud API' },
        { label: 'ANTARMUKA DISPLAY', val: 'Layar LCD 16x2 Real-Time' }
      ],
      points: [
        'Mengembangkan sistem tabungan digital berbasis IoT dengan sensor warna untuk mendeteksi nominal uang kertas secara otomatis.',
        'Mengirimkan data transaksi dan saldo akumulasi secara otomatis melalui jaringan Wi-Fi ke Google Spreadsheet tanpa pencatatan manual.',
        'Menampilkan nominal uang yang terdeteksi dan total saldo pada display hardware.'
      ]
    },
    'flutter-music': {
      category: 'MOBILE APPLICATION',
      period: 'Oktober 2024 &ndash; November 2024',
      title: 'Flutter Music Player Application',
      image: 'img/music-player.jpg',
      specs: [
        { label: 'FRAMEWORK', val: 'Flutter SDK (Dart)' },
        { label: 'NATIVE ANDROID', val: 'Kotlin (Platform Channel)' },
        { label: 'FITUR AUDIO', val: 'Background Playback & Playlist Service' },
        { label: 'DESAIN UI', val: 'Dark Theme Modern dengan Navigation Drawer' }
      ],
      points: [
        'Mengembangkan aplikasi mobile pemutar musik menggunakan framework Flutter, Dart, dan Kotlin.',
        'Merancang antarmuka pengguna responsif (daftar lagu, tampilan pemutaran utama, dan drawer navigasi samping).',
        'Membangun fitur pemutaran audio di latar belakang (background playback) dan pengelolaan antrean playlist lagu.'
      ]
    },
    'fiber-margonda': {
      category: 'FIBER OPTIC',
      period: 'September 2024 &ndash; November 2024',
      title: 'Desain Jaringan Fiber Optic &mdash; Jl. Margonda Raya, Depok',
      image: 'img/fiber-optic.jpg',
      specs: [
        { label: 'LOKASI PERENCANAAN', val: 'Jl. Margonda Raya, Kota Depok' },
        { label: 'METODE PERHITUNGAN', val: 'Link Margin & Optical Power Budget' },
        { label: 'DOKUMEN TEKNIS', val: 'Mapping Rute, BoQ, dan Desain Teknis (RPL)' },
        { label: 'JARINGAN DISTRIBUSI', val: 'FTTH / ODC / ODP Distribution' }
      ],
      points: [
        'Melakukan perencanaan jaringan fiber optic berdasarkan survei kebutuhan pengguna di koridor komersial Margonda Raya.',
        'Menyusun mapping jalur kabel jaringan optik dari Central Office hingga titik distribusi ODC, ODP, dan termination box.',
        'Melakukan kalkulasi optical link margin serta menyusun Bill of Quantity (BoQ) dan rancangan teknis (RPL).'
      ]
    },
    'smart-gardening': {
      category: 'IOT & EMBEDDED',
      period: 'Juni 2024 &ndash; Juli 2024',
      title: 'Smart Gardening System berbasis ESP32',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      specs: [
        { label: 'MIKROKONTROLER', val: 'ESP32 (Wi-Fi & Bluetooth)' },
        { label: 'AKTUATOR & SENSOR', val: 'Soil Moisture Sensor, Relay, Solenoid Valve' },
        { label: 'TELEMETRI', val: 'Telegram Bot API (Notifikasi Otomatis)' },
        { label: 'BAHASA PEMROGRAMAN', val: 'C++ (Arduino IDE)' }
      ],
      points: [
        'Merancang sistem penyiraman tanaman otomatis berbasis mikrokontroler ESP32.',
        'Mengintegrasikan sensor kelembaban tanah dengan penampil LCD, driver relay, dan katup solenoid valve air.',
        'Mengimplementasikan sistem telemetri pemantauan dan notifikasi real-time melalui bot Telegram.'
      ]
    },
    'canteen-web': {
      category: 'WEB APPLICATION',
      period: 'April 2024 &ndash; Juli 2024',
      title: 'Canteen Ordering Web Application (KAPE)',
      image: 'img/canteen-app.jpg',
      specs: [
        { label: 'ARSITEKTUR SISTEM', val: 'Frontend & Backend Web Application' },
        { label: 'ROLE PENGGUNA', val: 'Pelanggan Kantin & Panel Administrator' },
        { label: 'FITUR UTAMA', val: 'Katalog Menu, Harga, Tracking Pesanan' },
        { label: 'MANAJEMEN STOK', val: 'Pengaturan Ketersediaan Stok Real-Time' }
      ],
      points: [
        'Mengembangkan aplikasi web pemesanan kantin dengan arsitektur frontend dan backend.',
        'Merancang antarmuka pemesanan untuk pelanggan yang memuat katalog menu dan harga transparan.',
        'Membangun modul admin untuk memantau aliran pesanan masuk, ketersediaan menu, dan penyelesaian transaksi.'
      ]
    },
    'radio-los': {
      category: 'RADIO LINK',
      period: 'April 2024 &ndash; Mei 2024',
      title: 'Desain Radio Link LOS & Perencanaan Transmisi',
      image: 'img/radio-los.jpg',
      specs: [
        { label: 'TRAJEKTORI LINK', val: 'Point-to-Point (Jakarta &ndash; Depok)' },
        { label: 'ANALISIS ELEVASI', val: 'Line of Sight (LOS) Clearance' },
        { label: 'PARAMETER UTAMA', val: 'Radius Zona Fresnel & Path Loss' },
        { label: 'EVALUASI', val: 'Link Budget Margin Gelombang Mikro' }
      ],
      points: [
        'Mendesain dan menganalisis radio link Line of Sight (LOS) antara dua gedung strategis Jakarta - Depok.',
        'Melakukan kalkulasi parameter link transmisi microwave, clearance radius zona Fresnel, dan perancangan jaringan nirkabel.'
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

    modalBody.innerHTML = `
      <!-- Media Cover -->
      <div class="rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-video relative">
        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-contain bg-[#0b0c10]" />
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0b0c10] to-transparent p-4">
          <h3 class="text-lg sm:text-xl font-bold text-white">${data.title}</h3>
        </div>
      </div>

      <!-- Specs Grid -->
      <div>
        <h4 class="text-xs font-semibold text-primary uppercase tracking-wider mb-2.5">Spesifikasi & Parameter Teknis</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${specsHtml}
        </div>
      </div>

      <!-- Responsibility Points -->
      <div class="pt-2 border-t border-white/5">
        <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">Uraian & Kontribusi Rekayasa</h4>
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

