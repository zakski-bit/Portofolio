# Aturan Global Antigravity (Global Engineering & Vibe Coding Guidelines)

Sebagai asisten AI coding (Antigravity), kamu WAJIB mematuhi protokol dan aturan kerja berikut sebelum dan saat mengerjakan setiap tugas pengembangan perangkat lunak:

---

## 🛑 1. Aturan Wajib Sebelum Menulis Kode (Pre-Implementation Protocol)

**DILARANG langsung melompat menulis kode tanpa tahap perencanaan dan validasi arsitektur yang matang.**

1. **Gunakan Prinsip Skill `@brainstorming`**:
   - Lokasi: `~/.agents/skills/brainstorming/SKILL.md`
   - **Tujuan**: Mengubah ide mentah menjadi spesifikasi dan desain terstruktur sebelum implementasi.
   - **Langkah**:
     - Pahami konteks proyek dan dependensi yang sudah ada.
     - Identifikasi batasan teknis (*constraints*), asumsi tersembunyi, dan potensi risiko arsitektur.
     - Buat rencana implementasi modular yang jelas sebelum mulai mengetik kode.

2. **Gunakan Prinsip Skill `@test-driven-development` (TDD)**:
   - Lokasi: `~/.agents/skills/test-driven-development/SKILL.md`
   - **Hukum Utama**: *"No production code without a failing test first."*
   - Terapkan siklus **Red - Green - Refactor**:
     - Tentukan kriteria keberhasilan dan skenario pengujian/verifikasi terlebih dahulu.
     - Tulis kode minimal yang diperlukan untuk memenuhi pengujian.
     - Jalankan dan uji hasilnya secara mandiri sebelum menyelesaikan tugas.

3. **Gunakan Prinsip Skill `@systematic-debugging` saat Mengatasi Masalah**:
   - Lokasi: `~/.agents/skills/systematic-debugging/SKILL.md`
   - Jangan menebak-nebak perbaikan secara serampangan (*no speculative fixes*).
   - Analisis *root cause* dari pesan error/log secara runtut, bentuk hipotesis, dan uji perbaikan secara presisi.

---

## 🛠️ 2. Standar Kualitas Eksekusi

* **Verifikasi Mandiri**: Selalu jalankan kode, periksa output, kompilasi, atau test suite sebelum menyerahkan hasil kepada pengguna. Jika ada error, perbaiki sampai tuntas.
* **Preservasi Dokumentasi**: Pertahankan komentar dan dokumentasi penting yang sudah ada di codebase.
* **Modular & Maintainable**: Tulis kode yang rapi, berorientasi fungsi/modul jelas, dan mudah dipelihara.

---

## 🎨 3. Standar Desain UI & Anti-AI Slop Guidelines

* **DILARANG Menggunakan Titik Bulat Hijau Nyala-Mati (`animate-pulse`)**:
  - JANGAN PERNAH menyematkan titik/lingkaran hijau berkedip atau nyala-mati (`bg-emerald-500 animate-pulse` atau sejenisnya) untuk status seperti "Available for work", nilai metrik, atau status ketersediaan pada web yang dibuat. Pola ini terlihat sangat klise, murahan, dan berbau AI-generated slop.
  - Gunakan badge tipografi yang rapi, badge minimalis berkelas, atau ikon subtle profesional (misalnya ikon tas kerja/briefcase, award, atau checkmark).
* **Dukungan Dark Mode Berkualitas Tinggi**:
  - Desain antarmuka harus mendukung mode gelap (Dark Mode) yang kontras, elegan, dan nyaman di mata (menggunakan palet obsidian/slate gelap dengan aksen kontras yang tajam).

