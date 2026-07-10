# ⚖️ Sterling Legal — Agentic Development Showcase

> **Website firma hukum profesional dibangun dengan metode *Vibe Coding* menggunakan kolaborasi AI Agent (Google Antigravity & Claude).**
> Proyek ini dibuat sebagai demonstrasi praktik *Agentic Software Development* — di mana manusia fokus pada arahan strategis, sementara AI menangani seluruh implementasi teknis.

---

## 🌐 Live Preview

> *Deploy ke Vercel setelah push repository ini.*

```
URL: https://sterling-legal.vercel.app  (setelah deployment)
```

---

## 📋 Daftar Isi

1. [Tentang Proyek](#tentang-proyek)
2. [Tech Stack](#tech-stack)
3. [Fitur Website](#fitur-website)
4. [Struktur Proyek](#struktur-proyek)
5. [Design System](#design-system)
6. [Proses Agentic Development](#proses-agentic-development)
   - [Fase 1 — Brief & Perencanaan](#fase-1--brief--perencanaan)
   - [Fase 2 — Vibe Coding & Arahan Desain](#fase-2--vibe-coding--arahan-desain)
   - [Fase 3 — Asynchronous Feedback Loop](#fase-3--asynchronous-feedback-loop)
   - [Fase 4 — Debug & Build Resolution](#fase-4--debug--build-resolution)
   - [Fase 5 — Build Sukses & Finalisasi](#fase-5--build-sukses--finalisasi)
7. [Bukti Urutan Kerja (Task Artifact)](#bukti-urutan-kerja-task-artifact)
8. [Cara Jalankan Lokal](#cara-jalankan-lokal)
9. [Cara Deploy ke Vercel](#cara-deploy-ke-vercel)

---

## Tentang Proyek

**Sterling Legal** adalah website firma hukum profesional yang dibangun menggunakan **Astro JS** (Static Site Generator). Website ini dirancang untuk memancarkan kepercayaan, profesionalisme, dan modernitas melalui:

- 🎨 **Dark mode premium** dengan palet *Corporate Trust* (Deep Navy + Crimson)
- ⚡ **Zero JavaScript by default** (filosofi Astro) untuk performa maksimal
- 📱 **Fully responsive** — mobile, tablet, dan desktop
- 🌐 **Bilingual** — toggle navigasi Bahasa Indonesia / English
- 📬 **Form fungsional** terintegrasi Formspree (tanpa backend) dengan redirect halaman sukses
- 🗺️ **Google Maps embed** langsung di halaman kontak
- 🔍 **SEO Optimized** — Sitemap otomatis, Open Graph Meta Tags, dan Custom 404 Page

---

## Tech Stack

| Layer | Teknologi | Alasan Pemilihan |
|---|---|---|
| **Framework** | [Astro JS v5](https://astro.build) | Zero-JS by default, file-based routing, performa maksimal |
| **Styling** | Vanilla CSS (Custom Properties) | Full kontrol design system, tanpa framework overhead |
| **Font** | Google Fonts (Poppins + Plus Jakarta Sans) | Tipografi premium sesuai estetika "Corporate Trust" |
| **Icons** | Heroicons (inline SVG) | Ringan, konsisten, tidak butuh library eksternal |
| **Animasi** | CSS `@keyframes` | Smooth, zero-JS, performa tinggi |
| **Form** | [Formspree](https://formspree.io) | Form fungsional tanpa backend, free tier |
| **Maps** | Google Maps iFrame Embed | Zero API key, langsung embed |
| **Deployment** | [Vercel](https://vercel.com) | CDN global, CI/CD otomatis dari Git |

---

## Fitur Website

### 5 Halaman Lengkap

| Halaman | Route | Konten Utama |
|---|---|---|
| 🏠 **Home** | `/` | Hero animasi, 3 Nilai Inti, 4 Statistik, 3 Portofolio Kasus, CTA Banner |
| 📖 **About** | `/about` | Narasi firma, Visi & Misi, Timeline sejarah 2014–2026 |
| ⚖️ **Practice Areas** | `/practice-areas` | 4 bidang hukum (Pidana, Perdata, Korporasi, Keluarga) |
| 👥 **Team** | `/team` | 7 pengacara dengan CSS-based typographic avatar |
| 📞 **Contact** | `/contact` | Form Formspree + Google Maps embed + info kontak |
| 🎉 **Thanks** | `/thanks` | Halaman redirect sukses setelah form disubmit |
| 🚫 **404 Error** | `/404` | Halaman custom "Page Not Found" yang elegan |

### Komponen UI

```
src/components/
├── Header.astro       → Sticky glassmorphism + bilingual toggle
├── Footer.astro       → 3-kolom grid (brand, nav, kontak)
├── Button.astro       → Variants: primary | outline | ghost
├── CoreValueCard.astro → Kartu nilai inti dengan icon SVG
├── StatCard.astro     → Kartu statistik dengan angka besar
├── CaseCard.astro     → Kartu portofolio kasus
├── PracticeCard.astro → Kartu bidang hukum
└── TeamCard.astro     → Avatar tipografi CSS-based (inisial nama)
```

---

## Struktur Proyek

```
sterling-legal/
├── public/
│   ├── favicon.svg          ← Logo "SL" — SVG custom bergradasi Crimson
│   └── favicon.ico
├── src/
│   ├── components/          ← 8 komponen UI modular
│   ├── layouts/
│   │   └── MainLayout.astro ← Wrapper: SEO + OG meta + lang toggle script
│   ├── pages/               ← 5 halaman Astro
│   └── styles/
│       └── global.css       ← Design system: tokens, utilities, animasi
├── astro.config.mjs         ← output: 'static'
├── package.json             ← sterling-legal v1.0.0
├── vercel.json              ← Konfigurasi Vercel deployment
└── .gitignore
```

---

## Design System

### Palet Warna — *Corporate Trust*

| Token | Nilai | Tampilan | Deskripsi |
|---|---|---|---|
| `--color-bg` | `#02182B` | 🟦 | **Nights** — Background utama (deep navy) |
| `--color-surface` | `#051E35` | 🟦 | Surface card (sedikit lebih terang) |
| `--color-primary` | `#D7263D` | 🟥 | **Crimson** — Primary accent |
| `--color-primary-light` | `#E8566A` | 🟥 | Crimson light (hover state) |
| `--color-gradient` | `#A81E2F → #E8566A` | 🎨 | Gradient aksen utama |
| `--color-text` | `#F0F4F8` | ⬜ | Off-white body text |
| `--color-text-muted` | `#7A9BB5` | 🔷 | Supporting text (navy-blue tint) |

### Tipografi

- **Heading**: `Poppins` — weight 700, 800, 900
- **Body/UI**: `Plus Jakarta Sans` — weight 400, 500, 600

### Animasi CSS

```css
/* Blob morph — hero section */
@keyframes blob-morph { ... }

/* Float — elemen mengambang */
@keyframes float { 0%, 100% { transform: translateY(0); } 33% { transform: translateY(-18px); } }

/* Pulse glow — icon center */
@keyframes pulse-glow { 0%, 100% { box-shadow: var(--glow-sm); } 50% { box-shadow: var(--glow-md); } }
```

---

## Proses Agentic Development

> Bagian ini mendokumentasikan **metode kerja** yang digunakan — yaitu *Agentic Software Development* dengan prinsip **Vibe Coding**.

### Fase 1 — Brief & Perencanaan

**Apa yang dilakukan manusia:**
Memberikan brief proyek dalam bahasa natural kepada AI Agent:

```
"Saya ingin membangun website profesional untuk firma hukum bernama
Sterling Legal. Website ini harus memancarkan kesan kepercayaan,
keahlian hukum, dan modernitas. Kita akan membangunnya menggunakan
framework Astro JS untuk performa maksimal dan Zero JavaScript secara
default."
```

**Apa yang dilakukan AI:**
- Membuat `implementation_plan.md` secara otomatis
- Mengajukan 5 pertanyaan klarifikasi (foto tim, deployment, maps, form, bilingual)
- Merancang arsitektur teknis lengkap

**Keputusan yang disepakati manusia & AI:**

| # | Pertanyaan | Keputusan Manusia |
|---|---|---|
| 1 | Foto tim? | *"Pakai ilustrasi CSS-based: avatar lingkaran dengan inisial"* |
| 2 | Deployment? | *"Deploy ke Vercel"* |
| 3 | Maps? | *"Embed Google Maps iFrame langsung"* |
| 4 | Form? | *"Form harus fungsional"* → Formspree ID: `xkolalaq` |
| 5 | Bilingual? | Navigasi + CTA header |

---

### Fase 2 — Vibe Coding & Arahan Desain

**Prinsip Vibe Coding:** Manusia fokus pada *apa* yang diinginkan (logika besar + arahan desain), AI menangani *bagaimana* implementasi teknisnya.

**Contoh arahan desain oleh manusia:**

```
"ubah color pallete pada prompt tersebut menjadi color pallete
pada gambar yang saya kirim"
```

> AI kemudian secara otomatis mengekstrak palet warna dari gambar referensi
> dan menerapkannya ke seluruh design system:
> `#D7263D` (Crimson) + `#02182B` (Nights)

**AI bekerja secara mandiri untuk:**
- Membuat 8 komponen UI (`Header`, `Footer`, `Button`, semua Card components)
- Menulis seluruh `global.css` dengan ~364 baris CSS token & utilities
- Membangun 5 halaman Astro lengkap dengan semua sections

---

### Fase 3 — Asynchronous Feedback Loop

Manusia memberikan feedback secara asinkron di tengah proses pengerjaan AI:

**Contoh 1 — Inline Editing untuk mengkoreksi detail:**
```
Manusia: "berikut form id dari formspree.io
         https://formspree.io/f/xkolalaq
         proceed"
```
AI langsung mengintegrasikan Form ID ke dalam `contact.astro` tanpa perlu
menjelaskan detail teknis implementasinya.

**Contoh 2 — Arahan singkat yang AI terjemahkan menjadi fitur lengkap:**
```
Manusia: "1. pakai ilustrasi
          2. deploy ke vercel
          3. embed google maps iframe langsung
          4. form harus fungsional
          5. ada elemen yang perlu bilingual"
```
Dari 5 poin singkat ini, AI membangun solusi teknis yang komprehensif.

---

### Fase 4 — Debug & Build Resolution

Saat terjadi error teknis, manusia **tidak perlu memahami detail error** — cukup memberikan instruksi "lanjutkan dan perbaiki":

```
Manusia: "Lanjutkan project ini dari progres terakhir. Jangan mengulang
          dari awal. Selesaikan semua TODO, perbaiki bug, pastikan build
          sukses tanpa error."
```

**AI secara mandiri mendiagnosis dan memperbaiki:**

| Error | Root Cause | Solusi AI |
|---|---|---|
| `npm install` hanging | Koneksi NPM registry lambat + versi tidak tersedia | Fix versi `astro@^7.0.7` → `^5.2.2` |
| `shiki` module not found | `node_modules` korup (install terputus berkali-kali) | Hapus total + fresh install |
| `astro` not found in PATH | Binary Astro tidak ada di global PATH Windows | Ubah scripts ke `node node_modules/astro/astro.js` |
| `@astrojs/vercel` not needed | SSR adapter tidak diperlukan untuk static site | Hapus adapter, gunakan `output: 'static'` |

---

### Fase 5 — Build Sukses & Finalisasi

```
✅ npm run build — SUKSES
   5 page(s) built in 44.61s — 0 errors
```

**Output build:**
```
dist/
├── index.html
├── about/index.html
├── contact/index.html
├── practice-areas/index.html
├── team/index.html
├── favicon.svg
└── _astro/
    ├── about.BDozYMtd.css
    ├── about.Su9qcPxf.css
    └── index.TcNy9P1A.css
```

---

## Bukti Urutan Kerja (Task Artifact)

AI Agent secara otomatis membuat dan mengupdate `task.md` sebagai *living document* yang merekam seluruh urutan kerja yang terstruktur:

### Task Completion Summary

```
Phase 1: Project Setup        [✓ Completed]
  ├── Inisialisasi Astro JS project
  ├── Konfigurasi astro.config.mjs
  └── Setup struktur direktori

Phase 2: Design System        [✓ Completed]
  ├── global.css — CSS Custom Properties (color, spacing, radius, glow)
  ├── Google Fonts integration (Poppins + Plus Jakarta Sans)
  └── Utility classes (.gradient-text, .glow-sm, .badge, .card, dll)

Phase 3: Layout & Shared Components  [✓ Completed]
  ├── MainLayout.astro (SEO meta, OG tags, lang toggle script)
  ├── Header.astro (glassmorphism, bilingual toggle, hamburger menu)
  ├── Footer.astro (3-kolom grid)
  └── Button.astro (primary | outline | ghost variants)

Phase 4: Reusable UI Components  [✓ Completed]
  ├── CoreValueCard.astro
  ├── StatCard.astro
  ├── CaseCard.astro
  ├── PracticeCard.astro
  └── TeamCard.astro (CSS-based typographic avatar)

Phase 5: Pages               [✓ Completed]
  ├── index.astro    — Hero + Values + Stats + Cases + CTA
  ├── about.astro    — Narasi + Visi/Misi + Timeline
  ├── practice-areas.astro — 4 bidang hukum
  ├── team.astro     — 7 pengacara (CSS avatar)
  └── contact.astro  — Form Formspree + Google Maps

Phase 6: Assets & Polish     [✓ Completed]
  ├── favicon.svg (SL initials, crimson gradient)
  ├── SEO & Open Graph meta tags
  ├── Formspree form integration (ID: xkolalaq)
  └── vercel.json deployment config

Phase 7: QA & Build          [✓ Completed]
  └── npm run build → 5 pages built, 0 errors ✅
```

---

## Cara Jalankan Lokal

**Prerequisites:** Node.js ≥ 22.12.0

```bash
# Clone repository
git clone https://github.com/USERNAME/sterling-legal.git
cd sterling-legal

# Install dependencies
npm install

# Jalankan dev server
npm run dev
# → Buka http://localhost:4321

# Build production
npm run build

# Preview build hasil
npm run preview
```

---

## Cara Deploy ke Vercel

### Opsi 1 — Via GitHub (Direkomendasikan)

```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "feat: Sterling Legal website - initial release"
git remote add origin https://github.com/USERNAME/sterling-legal.git
git push -u origin main

# 2. Buka vercel.com → New Project → Import repository
# 3. Vercel auto-detect Astro framework → Deploy
```

### Opsi 2 — Via Vercel CLI

```bash
npm install -g vercel
vercel
# Ikuti wizard, framework Astro otomatis terdeteksi
```

---

## 📊 Statistik Proyek

| Metrik | Nilai |
|---|---|
| Total file dibuat | 15+ files |
| Total baris kode | ~3,000+ baris |
| Durasi pengerjaan | Multi-sesi (dengan AI) |
| Error build yang diselesaikan | 4 jenis error berbeda |
| Halaman website | 5 halaman |
| Komponen UI | 8 komponen |
| Prompt manusia | < 15 instruksi singkat |
| Kode yang ditulis manusia | 0 baris (Hybrid AI-generated: Antigravity + Claude) |

---

## 🤝 Kredit

- **Arah & Desain**: M. Syauqy Mubarok (Project Owner)
- **Implementasi Teknis**: Google Antigravity & Anthropic Claude
- **Metodologi**: Agentic Software Development / Vibe Coding

---

*Dibangun dengan metode Agentic Development — bukti bahwa di era AI, siapapun bisa membangun produk digital berkualitas tinggi dengan fokus pada visi, bukan sintaks.*
