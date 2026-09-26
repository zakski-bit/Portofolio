# 🌐 Zaki Abdussalam Alfajary — Developer & Engineering Portfolio

Portofolio interaktif dan modern yang dirancang khusus untuk menampilkan rekayasa teknis di bidang **Broadband Multimedia, Telekomunikasi, Antena RF, IoT, dan Software Engineering**.

🔗 **Live Deployment**: [https://zaki-alfajary.surge.sh](https://zaki-alfajary.surge.sh)

---

## ✨ Fitur Utama

- **Modern Dark Aesthetic**: Terinspirasi dari gaya desain minimalis nan futuristik dengan tipografi *Clash Grotesk* dan *Inter*.
- **Curtain Preloader Animation**: Animasi pembuka dinamis bertahap:
  $$\text{Connect} \longrightarrow \text{Innovate} \longrightarrow \text{Design} \longrightarrow \text{Engineer} \longrightarrow \text{Welcome to My Portfolio}$$
- **Dynamic Ambient Video Background**: Latar belakang garis gelombang biru (*AA-VFX 4K Blue Ambient Waving Lines*) yang mengalir halus secara lokal tanpa jeda buffering, dilengkapi panel preset untuk beralih ke stream YouTube Plexus / Hexagons / Custom link.
- **3D Interactive Tilt Cards**: Efek interaksi 3D mikro pada kartu proyek dan pencapaian menggunakan `VanillaTilt`.
- **Responsive & Clean Spacing**: Penataan layout responsif dari mobile hingga desktop dengan fixed glassmorphic navbar.
- **Modal Detail Proyek**: Tampilan modal interaktif lengkap dengan ringkasan arsitektur teknis dan galeri visual proyek.

---

## 📂 Struktur Direktori

```bash
portfolio/
├── img/                       # Aset gambar proyek & foto profil
├── video/                     # Aset video latar belakang lokal (bg-lines.mp4)
├── index.html                 # Struktur markup utama dan integrasi Tailwind CSS
├── style.css                  # Custom styling, efek glassmorphism, dan animasi preloader
├── script.js                  # Logika interaktif: preloader, modal, video switcher, VanillaTilt
├── qrcode-zaki-portfolio.svg  # QR Code portofolio vektor
├── qrcode-zaki-portfolio.png  # QR Code portofolio bitmap
└── README.md                  # Dokumentasi proyek
```

---

## 🛠️ Menjalankan Secara Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/zakski-bit/Portofolio.git
   cd Portofolio
   ```
2. Buka `index.html` langsung di browser favorit Anda, atau jalankan menggunakan live server:
   ```bash
   # Menggunakan Python http.server
   python -m http.server 3000
   # Buka http://localhost:3000 di browser
   ```

---

## 🚀 Deployment

Website ini siap dideploy secara instan ke:
- **Surge.sh**: `npx surge . zaki-alfajary.surge.sh`
- **GitHub Pages**: Buka **Settings** → **Pages** → pilih branch `main`
- **Vercel / Netlify**: Cukup hubungkan repositori ini atau drag-and-drop folder proyek.

---

© 2026 Zaki Abdussalam Alfajary. Politeknik Negeri Jakarta.
