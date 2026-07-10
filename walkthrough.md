# ⚖️ Sterling Legal — Agentic Development Walkthrough

> **Proyek ini adalah demonstrasi nyata dari *Agentic Software Development*.**
> Sebuah website firma hukum profesional dibangun dari nol, di mana manusia berperan sebagai *director* dan AI (Google Antigravity & Claude) berperan sebagai *implementer*. Dokumen ini juga merangkum catatan pengembangan (changelog) secara menyeluruh.

---

## 📌 Ringkasan Proyek

| Atribut | Detail |
|---|---|
| **Nama Proyek** | Sterling Legal — Website Firma Hukum |
| **Framework** | Astro JS v5 (Zero-JS by default) |
| **Metodologi** | Agentic Development / Vibe Coding |
| **AI Agent** | Google Antigravity & Anthropic Claude (Hybrid) |
| **Total Halaman** | 5 halaman utama + 2 halaman utilitas (404, Thanks) |
| **Total Komponen UI** | 8 komponen modular |
| **Status Build** | ✅ `npm run build` — SUKSES, 0 error |
| **Kode ditulis manusia** | 0 baris (Hybrid AI-generated) |
| **Deployment** | Vercel (via GitHub Desktop & Vercel integration) |

---

## 📋 Daftar Isi

1. [Ringkasan Proyek](#-ringkasan-proyek)
2. [Bukti Urutan Kerja — Walkthrough & Changelog](#-1-bukti-urutan-kerja--walkthrough--changelog)
   - [Phase 1: Setup Proyek Awal](#-phase-1--setup-proyek-awal--selesai)
   - [Phase 2: Perencanaan Konten](#-phase-2--perencanaan-konten-master-prompt--selesai)
   - [Phase 3: Desain Visual & Branding](#-phase-3--desain-visual--branding--selesai)
   - [Phase 4: Penyempurnaan Visual & Efek](#-phase-4--penyempurnaan-visual--efek-interaktif--selesai)
   - [Phase 5: Pages (5 Halaman Utama)](#-phase-5--pages-5-halaman-utama--selesai)
   - [Phase 6: Deployment & Version Control](#-phase-6--deployment--version-control--selesai)
3. [Metode Vibe Coding](#-2-metode-vibe-coding--arahan-besar-ai-tangani-teknis)
4. [Asynchronous Feedback](#-3-asynchronous-feedback--mengoreksi-ai-di-tengah-proses)
5. [Hasil Akhir & Struktur Proyek](#-hasil-akhir--struktur-proyek)

---

## 🎭 1. Bukti Urutan Kerja — Walkthrough & Changelog

AI Agent secara otomatis membuat dan memperbarui file selama proses pengerjaan. Berikut rekam jejak lengkap dan penyempurnaan yang dilakukan bersama Claude:

---

### 📋 Phase 1 — Setup Proyek Awal `[✓ Selesai]`

AI Agent memulai dengan inisialisasi dan penyelesaian hambatan teknis awal:
- Inisialisasi proyek menggunakan Astro JS (`npm create astro@latest`) dengan template kosong.
- **Perbaikan masalah PowerShell Execution Policy** agar perintah npm dapat dijalankan di terminal Windows.
- Pembuatan struktur dasar: `MainLayout.astro` dengan elemen `<slot />` agar Header dan Footer konsisten di seluruh halaman.
- Setup server pengembangan lokal (`npm run dev`) di `localhost:4321`.

---

### 📋 Phase 2 — Perencanaan Konten (Master Prompt) `[✓ Selesai]`

Penyusunan *Master Prompt* terstruktur untuk menginstruksikan AI Agent membangun halaman. Keputusan yang ditetapkan:
- **Nama:** Sterling Legal
- **Headline:** "Keadilan yang Berkualitas, Solusi yang Terpercaya"
- **Nilai Inti:** Keunggulan, Integritas, Dedikasi
- **Bidang Hukum:** Pidana, Perdata, Korporasi, Keluarga
- **Tim:** 7 pengacara dengan spesialisasi masing-masing
- **Elemen Tambahan:** Statistik rekam jejak (200+ klien, 92% win rate), 3 portofolio kasus anonim, CTA akhir, dan struktur footer 3 kolom.

---

### 📋 Phase 3 — Desain Visual & Branding `[✓ Selesai]`

AI merancang seluruh design token sebagai satu sumber kebenaran (*single source of truth*) yang kemudian disempurnakan:

- **Skema Warna:** Diubah dari konsep awal (Indigo/Violet) menjadi palet **"Crimson"** (`#D7263D`) dan **"Nights"** (`#02182B`) sesuai referensi desain pengguna.
- **Tipografi:** Kombinasi `Poppins` untuk headline/judul, dan `Plus Jakarta Sans` untuk body text dan UI.
- **Logo Conversion:** Konversi logo PNG asli milik pengguna menjadi format SVG (vector tracing per-warna menggunakan potrace), menjaga bentuk dan warna asli (Navy `#09234A` dan Crimson `#C3132E`). Logo disesuaikan ukuran, padding, dan background putihnya di Header.

---

### 📋 Phase 4 — Penyempurnaan Visual & Efek Interaktif `[✓ Selesai]`

Untuk meningkatkan estetika *"Corporate Trust"*, diterapkan *styling* lanjutan:
- **Background Global:** Gradasi diagonal (hitam ke navy) dengan tekstur grain/noise halus di seluruh halaman.
- **Section Rhythm:** Variasi latar belakang antar section agar halaman terasa lebih dinamis saat di-scroll.
- **Card Hover:** Seluruh komponen kartu diperkuat dengan border Crimson dan efek glow saat di-hover agar lebih menonjol.
- **Aksen Statistik:** Aksen warna berbeda pada tiap kartu statistik agar tidak monoton.
- **Particle Burst Effect:** Serpihan abstrak Crimson muncul setiap kali pengguna melakukan klik. Dioptimasi untuk mobile (jumlah partikel dikurangi dari 8 menjadi 4, durasi dipercepat agar tidak lag).

---

### 📋 Phase 5 — Pages (5 Halaman Utama) `[✓ Selesai]`

#### 🏠 Home (`/`)
- **Hero Section:** Menggunakan **foto asli milik pengguna (`office.png`)** sebagai background, dipadukan overlay gradient gelap agar teks tetap terbaca, ditambah efek dekoratif "blob" abstrak beranimasi.
- Menggunakan komponen Astro reusable untuk Nilai Inti, Statistik, dan Portofolio.

#### 📞 Contact (`/contact`)
- Formulir fungsional via Formspree.
- Info kontak menggunakan data aktual (WhatsApp dan email pengguna).
- Nomor telepon menggunakan tautan `wa.me` lengkap dengan template pesan otomatis.
- Google Maps embed menunjukkan lokasi akurat di Cibinong, Bogor.
- **Animasi Melayang (Floating):** Diterapkan pada kartu info kontak dan form dengan variasi gerakan dan kecepatan berbeda agar tidak monoton.

#### Halaman Lainnya:
- **About (`/about`)**: Narasi, Visi/Misi, Timeline.
- **Practice Areas (`/practice-areas`)**: 4 bidang hukum.
- **Team (`/team`)**: 7 pengacara dengan avatar tipografi CSS.

---

### 📋 Phase 6 — Deployment & Version Control `[✓ Selesai]`

Sistem deployment diotomatisasi tanpa memerlukan Git CLI di awal:
- Repository lokal diinisialisasi dan dipublikasikan ke GitHub menggunakan **GitHub Desktop** (dikarenakan Git CLI sempat tidak terpasang di sistem pengguna).
- Repository GitHub dihubungkan langsung ke project Vercel.
- **URL Production:** `https://sterling-legal-two.vercel.app`
- Setiap *commit & push* (via GitHub Desktop atau command line setelah diinstal) otomatis memicu auto-deployment Vercel.

---

## 🎸 2. Metode Vibe Coding — Arahan Besar, AI Tangani Teknis

### Apa itu Vibe Coding?

Vibe Coding adalah pendekatan di mana developer **tidak menulis kode secara langsung**, melainkan:
1. Mendeskripsikan *apa* yang diinginkan dalam bahasa natural
2. AI menerjemahkan keinginan tersebut menjadi kode teknis
3. Developer memberikan feedback/koreksi jika diperlukan
4. Proses ini berulang hingga hasil sesuai visi

### Contoh Nyata dalam Proyek Ini

**Arahan desain manusia (vibe):**
> *"ubah color pallete pada prompt tersebut menjadi color pallete pada gambar yang saya kirim"*

**Yang AI lakukan secara teknis:**
```css
/* Sebelum (default AI) → Setelah (sesuai gambar user) */
--color-bg:      #0D0D12  →  #02182B  /* Deep Navy */
--color-primary: #6366F1  →  #D7263D  /* Crimson */
```
AI (Claude) mengekstrak palet dari gambar dan merevisi desain. Begitu juga dengan instruksi pengubahan logo PNG ke SVG, menambahkan efek partikel saat klik yang dioptimasi untuk mobile, dan menggunakan `office.png` sebagai background hero.

---

## 🔄 3. Asynchronous Feedback — Mengoreksi AI di Tengah Proses

Sepanjang proyek ini, manusia memberikan feedback **kapan saja diperlukan**:

- **Koreksi Mid-Development:** Saat mengintegrasikan WhatsApp, user memberikan nomor dan instruksi untuk mengubah ke link `wa.me` dengan pesan otomatis.
- **Optimasi Performa Mobile:** User menyadari efek klik (particle burst) kurang mulus di HP, lalu memberikan instruksi untuk mempercepat animasi dan mengurangi jumlah partikel khusus perangkat sentuh.
- **Penanganan Error:** Saat `PowerShell Execution Policy` memblokir NPM di awal, kolaborasi dengan AI memungkinkan bypass dengan cepat tanpa perlu Googling panjang.

---

## 🏁 Hasil Akhir & Struktur Proyek

### Output Final (`/src` & `/public`)
```text
public/
├── logo.svg       (hasil konversi potrace)
├── favicon.ico
└── office.png     (foto asli background hero)

src/
├── components/    (Header, Footer, Button, Card components)
├── layouts/       (MainLayout.astro — kerangka + SEO + efek particle)
├── pages/         (index, about, practice-areas, team, contact, 404, thanks)
└── styles/        (global.css — design tokens, grain noise, animasi)
```

### Build Output
```text
✅ npm run build
   7 page(s) built — 0 errors
```

---

*Dibangun dengan metode **Agentic Development** (Google Antigravity + Claude) — bukti bahwa di era AI, fokus pada **visi dan arahan** jauh lebih penting daripada hafalan sintaks.*
