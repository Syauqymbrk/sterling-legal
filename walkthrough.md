# ⚖️ Sterling Legal — Agentic Development Showcase

> *"Masa depan pengembangan software bukan tentang siapa yang bisa menulis kode paling cepat — melainkan siapa yang bisa mengarahkan AI paling efektif."*

Dokumen ini adalah rekam jejak lengkap pembuatan **Sterling Legal**, sebuah website firma hukum profesional yang dibangun dari nol menggunakan metode **Agentic Software Development**. Tidak ada satu baris pun kode yang ditulis secara manual.

---

## 📋 Daftar Isi

1. [Sekilas Proyek](#-sekilas-proyek)
2. [Bukti I — Walkthrough Artifact (Urutan Kerja AI)](#-bukti-i--walkthrough-artifact-urutan-kerja-ai)
3. [Bukti II — Vibe Coding dalam Praktik](#-bukti-ii--vibe-coding-dalam-praktik)
4. [Bukti III — Asynchronous Feedback Loop](#-bukti-iii--asynchronous-feedback-loop)
5. [Laporan Kualitas Akhir (Self-Assessment)](#-laporan-kualitas-akhir-self-assessment)
6. [Refleksi — Apa yang Dipelajari](#-refleksi--apa-yang-dipelajari)

---

## 🏛️ Sekilas Proyek

| Atribut | Detail |
|---|---|
| **Nama** | Sterling Legal — Firma Hukum Profesional |
| **URL Live** | https://sterling-legal-two.vercel.app |
| **Framework** | Astro JS v5 (Zero-JS by Default) |
| **AI Agent** | Google Antigravity + Anthropic Claude *(Hybrid Workflow)* |
| **Metodologi** | Agentic Development / Vibe Coding |
| **Halaman** | 7 halaman (Home, About, Practice Areas, Team, Contact, Thanks, 404) |
| **Kode ditulis manusia** | **0 baris** |
| **Deployment** | Vercel (CI/CD otomatis via GitHub) |

---

## 📁 Bukti I — Walkthrough Artifact (Urutan Kerja AI)

> *"Tunjukkan file Walkthrough Artifact yang dihasilkan agen AI sebagai bukti urutan kerja yang terstruktur."*

AI Agent tidak hanya menulis kode — ia juga mendokumentasikan setiap langkah secara otomatis melalui dua file artefak utama: `implementation_plan.md` (rencana sebelum eksekusi) dan `task.md` (rekam jejak progres real-time). Berikut rekap setiap fase:

---

### 🔷 Fase 0 — Perencanaan Sebelum Satu Baris Kode Pun Ditulis

Sebelum mulai bekerja, AI Agent membuat **`implementation_plan.md`** secara otomatis yang berisi:
- Arsitektur teknis lengkap (Astro SSG, Vanilla CSS, Formspree)
- Breakdown komponen yang akan dibuat
- Daftar pertanyaan klarifikasi kepada pengguna

**Keputusan yang disepakati di fase ini:**

| # | Pertanyaan AI | Jawaban / Arahan Saya |
|---|---|---|
| 1 | Foto tim nyata atau ilustrasi? | *"Pakai ilustrasi CSS saja — inisial nama"* |
| 2 | Platform deployment? | *"Vercel"* |
| 3 | Peta lokasi? | *"Embed Google Maps langsung"* |
| 4 | Form kontak fungsional? | *"Harus bisa, pakai Formspree"* |
| 5 | Bilingual? | *"Di navigasi dan tombol header"* |

---

### 🔷 Fase 1 — Fondasi Teknis & Setup

```
[✓] Inisialisasi proyek Astro JS (npm create astro@latest)
[✓] Perbaikan PowerShell Execution Policy (hambatan awal di Windows)
[✓] Pembuatan MainLayout.astro dengan <slot /> untuk konsistensi Header/Footer
[✓] Server development berjalan di localhost:4321
```

---

### 🔷 Fase 2 — Design System (DNA Visual Website)

AI membangun seluruh `global.css` (~364 baris) sebagai **satu sumber kebenaran** untuk seluruh tampilan:

| Design Token | Nilai | Peran |
|---|---|---|
| `--color-bg` | `#02182B` | Background — Deep Navy |
| `--color-primary` | `#D7263D` | Aksen utama — Crimson |
| `--color-gradient` | `#A81E2F → #E8566A` | Gradasi merah di semua elemen aktif |
| `--font-heading` | `Poppins 700–900` | Judul dan logo |
| `--font-body` | `Plus Jakarta Sans` | Body text dan UI |
| `--glow-sm` | `0 0 20px rgba(215,38,61,0.25)` | Efek *glow* pada hover card |

Animasi CSS yang dihasilkan AI:
- `blob-morph` → Hero blob organik berubah bentuk secara perlahan
- `float` → Elemen mengambang naik-turun (float cards di hero)
- `pulse-glow` → Icon berdetak dengan efek cahaya
- `fadeInUp` → Elemen masuk dari bawah saat scroll

---

### 🔷 Fase 3 — Komponen UI (8 Komponen Modular)

```
[✓] Header.astro      → Glassmorphism sticky + bilingual toggle + hamburger menu
[✓] Footer.astro      → 3-kolom: brand | navigasi | kontak
[✓] Button.astro      → 3 varian: primary | outline | ghost
[✓] CoreValueCard.astro → Kartu nilai inti (icon + judul + deskripsi)
[✓] StatCard.astro     → Kartu statistik (angka besar bergradasi)
[✓] CaseCard.astro     → Portofolio kasus anonim
[✓] PracticeCard.astro → Bidang hukum dengan detail penjelasan
[✓] TeamCard.astro     → Avatar CSS tipografis (inisial nama, tanpa foto)
```

**Inovasi desain: CSS Typographic Avatar**
Karena tidak ada foto tim, AI menciptakan solusi elegan murni CSS:
```css
.team-initials {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #A81E2F, #E8566A);
  font-size: 1.4rem; font-weight: 800;
  box-shadow: 0 0 20px rgba(215,38,61,0.25);
}
```

---

### 🔷 Fase 4 — 7 Halaman Lengkap

| Halaman | Route | Isi Utama |
|---|---|---|
| 🏠 Home | `/` | Hero + foto kantor asli + 3 Nilai Inti + 4 Statistik + 3 Case Study + CTA |
| 📖 About | `/about` | Narasi firma + Visi/Misi + Timeline 2014–2026 |
| ⚖️ Practice Areas | `/practice-areas` | 4 bidang hukum dengan penjelasan lengkap |
| 👥 Team | `/team` | 7 pengacara dengan CSS avatar |
| 📞 Contact | `/contact` | Form Formspree + Google Maps + info kontak |
| 🎉 Thanks | `/thanks` | Halaman sukses setelah form disubmit |
| 🚫 404 | `/404` | Halaman "tidak ditemukan" yang profesional |

---

### 🔷 Fase 5 — Polish, SEO & QA

```
[✓] Sitemap otomatis via @astrojs/sitemap (untuk Google indexing)
[✓] Open Graph image (og:image) untuk preview link di WhatsApp/Telegram
[✓] Formspree redirect ke halaman /thanks setelah submit
[✓] Halaman 404 custom agar tidak menampilkan error bawaan Vercel
[✓] npm run build → 7 halaman berhasil, 0 error ✅
```

---

## 🎸 Bukti II — Vibe Coding dalam Praktik

> *"Jelaskan bagaimana Anda melakukan 'Vibe Coding' — di mana Anda fokus pada logika besar dan arahan desain, sementara AI menangani teknis kodenya."*

### Konsep Dasarnya

**Vibe Coding** bukan berarti malas atau tidak paham teknologi. Justru sebaliknya — ini tentang **efisiensi arahan**. Seorang *director* film tidak perlu tahu cara mengoperasikan kamera; tugasnya adalah memastikan *visi* terwujud dengan benar.

```
Manusia (Director)          AI Agent (Implementer)
─────────────────           ──────────────────────
"Apa" yang diinginkan   →   "Bagaimana" cara teknisnya
Arahan desain           →   Kode CSS/HTML/JS
Koreksi feedback        →   Revisi dan iterasi
Keputusan bisnis        →   Arsitektur teknis
```

### Contoh Nyata: Dari Brief ke Produk Jadi

**Yang saya katakan (1 kalimat):**
> *"Saya ingin website profesional untuk firma hukum Sterling Legal yang memancarkan kepercayaan, keahlian, dan modernitas."*

**Yang AI kerjakan (ratusan baris kode):**
```astro
<!-- AI menerjemahkan 1 brief menjadi hero section lengkap -->
<section class="hero section" id="hero">
  <div class="blob blob-1" aria-hidden="true"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="section-label">Firma Hukum Profesional</div>
        <h1 class="hero-headline">
          Keadilan yang <span class="gradient-text">Berkualitas,</span>
          Solusi yang <span class="gradient-text">Terpercaya.</span>
        </h1>
        <!-- ... +200 baris kode lainnya yang dihasilkan otomatis -->
```

---

### Tabel Perbandingan: Arahan Singkat → Implementasi Kompleks

| Kata-kata Saya *(Vibe)* | Implementasi Teknis AI *(Kode)* |
|---|---|
| *"Ubah palet warna sesuai gambar yang saya kirim"* | AI mengekstrak warna dari referensi visual → mengubah 15+ CSS variables di `global.css` |
| *"Pakai ilustrasi CSS saja untuk foto tim"* | Komponen `TeamCard` dengan avatar lingkaran gradasi Crimson + inisial nama `Poppins 800` |
| *"Form harus bisa beneran dikirim"* | Integrasi Formspree dengan `action` POST, field validation HTML5, dan redirect ke `/thanks` |
| *"Embed Google Maps"* | `<iframe>` embed dengan koordinat akurat Cibinong + CSS responsive `height: 100%` |
| *"Ada toggle bahasa"* | `data-lang-id`/`data-lang-en` attributes + JavaScript event listener di semua nav items |
| *"Tampilan gelap, kesan mewah"* | `backdrop-filter: blur(20px)` glassmorphism header + gradient text + glow shadow system |
| *"Optimasi buat HP"* | Particle burst dikurangi dari 8 → 4 + durasi animasi dipercepat untuk touch devices |

---

## 🔄 Bukti III — Asynchronous Feedback Loop

> *"Demonstrasikan bagaimana Anda memberikan Asynchronous Feedback atau melakukan Inline Editing untuk mengoreksi AI saat proses pengerjaan berlangsung."*

Inilah yang membedakan Agentic Development dari sekadar *copy-paste kode dari ChatGPT*. Selama proses pengerjaan, saya terus memberikan koreksi dan arahan baru tanpa harus menunggu AI selesai sepenuhnya.

---

### 🔁 Feedback #1 — Koreksi Palet Warna *(Mid-Planning Phase)*

**Situasi:** AI awalnya merencanakan desain dengan warna **Indigo/Violet** — umum dan terlalu mirip startup teknologi.

**Feedback saya:**
> *"ubah color pallete pada prompt tersebut menjadi color pallete pada gambar yang saya kirim"*

**Respons AI:** Mengekstrak warna dari gambar referensi saya dan secara otomatis merevisi seluruh design system:

```css
/* SEBELUM feedback → SESUDAH feedback */
--color-primary: #6366F1 (Indigo)  →  #D7263D (Crimson)
--color-bg:      #0D0D12 (Hitam)   →  #02182B (Deep Navy)
--color-gradient: indigo-violet     →  #A81E2F to #E8566A
```
Seluruh file `global.css` direvisi tanpa saya menulis satu baris pun.

---

### 🔁 Feedback #2 — Logo Asli Pengguna *(Mid-Development Phase)*

**Situasi:** AI sudah membuat logo "SL" placeholder dari kode SVG.

**Feedback saya:** Mengirimkan file logo PNG asli milik firma hukum Sterling Legal.

**Respons AI:** Melakukan *vector tracing* dengan potrace (konversi PNG → SVG per-warna), menjaga warna asli `#09234A` (Navy) dan `#C3132E` (Crimson). Logo kemudian disesuaikan ukuran, padding, dan circle background-nya di komponen Header.

---

### 🔁 Feedback #3 — Integrasi Data Nyata *(Mid-Development Phase)*

**Situasi:** Form kontak masih menggunakan placeholder ID.

**Feedback saya:**
> *"berikut form id dari formspree.io: https://formspree.io/f/xkolalaq"*

**Respons AI:** Langsung mengintegrasikan ID tersebut ke `contact.astro` dan melanjutkan pengerjaan tanpa perlu arahan tambahan.

---

### 🔁 Feedback #4 — Optimasi Mobile *(Post-Development Phase)*

**Situasi:** Setelah testing di HP, efek klik (particle burst) terasa berat dan *laggy*.

**Feedback saya:**
> *"di hp klik partikel nya kurang smooth, kurangin partikelnya"*

**Respons AI:** Mendeteksi perangkat sentuh dengan `ontouchstart in window`, lalu:
```javascript
// Sebelum → Sesudah
const shardCount = 8  →  isTouchDevice ? 4 : 8
duration: 600ms       →  400ms
```

---

### 🔁 Feedback #5 — Penanganan Error Tanpa Intervensi Teknis *(Build Phase)*

**Situasi:** Proses `npm install` gagal berulang kali karena berbagai masalah teknis.

**Yang TIDAK perlu saya lakukan:** Googling error, debug sendiri, baca dokumentasi NPM.

**Feedback saya:** Cukup dengan:
> *"Lanjutkan project ini dari progres terakhir. Jangan mengulang dari awal."*

**AI secara mandiri mendiagnosis dan memperbaiki 4 error berbeda:**

| Error | Penyebab | Solusi AI |
|---|---|---|
| `npm install` hanging | Versi `astro@^7.0.7` tidak ada di registry | Downgrade ke `^5.2.2` |
| `shiki` module not found | `node_modules` korup | Hapus total + fresh install |
| `astro` not in PATH | Binary tidak tersedia global | Path langsung ke `node_modules/astro/astro.js` |
| `@astrojs/vercel` conflict | SSR adapter tidak diperlukan | Ganti ke `output: 'static'` |

---

## 📊 Laporan Kualitas Akhir (Self-Assessment)

> *Penilaian berdasarkan 4 Pilar Kualitas dari modul.*

| Pilar | Skor | Bukti |
|---|---|---|
| ⚡ **Performa** | 92/100 | Astro Zero-JS SSG, hanya 2 file JS kecil (lang toggle + click effect), CDN Vercel global |
| 🔧 **Fungsionalitas** | 88/100 | Form Formspree aktif + redirect `/thanks`, language toggle ID/EN, Google Maps embed, WhatsApp link |
| 🔍 **Aksesibilitas & SEO** | 90/100 | `lang="id"` di HTML, `aria-label` di semua nav, `og:image` + Twitter Card, sitemap XML otomatis, heading hierarchy benar |
| 🎨 **Estetika Corporate Trust** | 94/100 | Glassmorphism header, click particle burst, CSS gradient text, card hover glow, blob animation, konsistensi token di 7 halaman |
| 🏅 **TOTAL** | **91/100 — A** | |

---

## 💡 Refleksi — Apa yang Dipelajari

Proyek ini bukan hanya tentang membangun website. Ini adalah demonstrasi **perubahan paradigma** dalam pengembangan software.

### Yang berubah:
- ❌ Dulu: *"Saya tidak bisa bikin website karena tidak bisa coding"*
- ✅ Sekarang: *"Saya bisa bikin website profesional karena saya bisa mengarahkan AI"*

### Skill yang benar-benar dibutuhkan:
1. **Kemampuan mendeskripsikan visi** dengan jelas dalam bahasa natural
2. **Kemampuan memberi feedback** yang spesifik dan terarah
3. **Sense of design** — mengetahui mana yang terlihat baik dan mana yang tidak
4. **Kemampuan membaca konteks** — kapan harus intervensi, kapan biarkan AI bekerja

### Kutipan dari proses ini:
> *"Di era AI, perbedaan antara developer junior dan senior bukan lagi tentang siapa yang hafal lebih banyak syntax — melainkan siapa yang punya visi lebih jelas dan kemampuan mengarahkan AI lebih efektif."*

---

## 🔗 Links

| Resource | URL |
|---|---|
| 🌐 **Live Website** | https://sterling-legal-two.vercel.app |
| 💻 **Source Code** | https://github.com/Syauqymbrk/sterling-legal |
| 📄 **Halaman 404 Test** | https://sterling-legal-two.vercel.app/halaman-tidak-ada |

---

*© 2026 Sterling Legal — Dibangun dengan metode **Agentic Development** oleh M. Syauqy Mubarok menggunakan Google Antigravity & Claude.*
