# BEI Stock Insight

> Versi ringkas untuk proposal tugas.

### 1. Latar Belakang Sistem

Investor saat ini punya akses ke banyak data saham dari BEI (harga, laporan keuangan, rasio). Tantangannya, data ini mentah dan sulit dipahami langsung, terutama oleh investor pemula. Visualisasi *treemap* seperti StockMap by Oyenza sudah ada untuk memetakan pasar, tapi hanya sebatas info kepemilikan dan pergerakan harga. Ada peluang besar untuk mengembangkan peta *treemap* yang fokus pada visualisasi fundamental (kesehatan keuangan) yang dipadukan dengan penjelasan AI agar lebih mudah dicerna. Proyek **BEI Stock Insight** dibangun untuk menjawab kebutuhan ini.

### 2. Problem Statement

**Masalah Utama:**
Bagaimana merancang visualisasi interaktif saham BEI yang menyajikan kondisi fundamental perusahaan, sehingga investor pemula-menengah bisa paham tanpa perlu menghitung rasio secara manual?

### 3. Analisis Kompetitor & Fokus Pengembangan

Website pembanding utama kita adalah **StockMap by Oyenza**. Kita mengambil konsep visual petanya, tapi mengubah isi datanya.

| Aspek | StockMap by Oyenza (Kompetitor) | BEI Stock Insight (Fokus Kita) |
| --- | --- | --- |
| **Konsep** | Visualisasi pasar saham BEI. | Peta kondisi *fundamental* saham BEI. |
| **Indikator** | Info kepemilikan dan harga. | Pertumbuhan Pendapatan, Laba, ROE, PER. |
| **Warna Peta** | Berdasarkan naik/turun harga. | Berdasarkan metrik fundamental yang dipilih. |
| **Interpretasi** | Eksplorasi mandiri. | Penjelasan otomatis dari **AI**. |

### 4. Fitur Utama: AI Fundamental Stock Map

Ini adalah satu-satunya layar utama (*core feature*) di website ini.

* **Tampilan:** Berbentuk kotak-kotak (*treemap*).
* **Pengelompokan:** Saham dikelompokkan per sektor industri.
* **Ukuran Kotak:** Menggambarkan *Market Cap* (kapitalisasi pasar).
* **Warna Kotak:** Menggambarkan performa metrik yang sedang dipilih (contoh: Hijau untuk Revenue Growth yang naik).
* **Cara Kerja AI:** Saat satu kotak emiten diklik, AI (seperti Gemini) akan merangkum narasi singkat tentang apa arti dari metrik fundamental emiten tersebut.

### 5. Target Pengguna

**Investor ritel pemula hingga menengah** yang ingin riset saham berbasis kinerja bisnis, tapi malas atau bingung jika harus membaca tabel laporan keuangan mentah.

### 6. Alur Pengguna (User Flow)

1. **Buka Web:** Masuk ke *homepage* BEI Stock Insight.
2. **Lihat Peta:** Tampil peta *treemap* seluruh saham BEI per sektor.
3. **Pilih Filter:** User memilih salah satu dari 4 indikator (Revenue Growth, Net Income Growth, ROE, atau PER). Warna peta langsung berubah menyesuaikan data.
4. **Pilih Saham:** User klik salah satu kotak emiten (misal: BBCA).
5. **Baca Penjelasan:** Panel detail muncul, menampilkan rangkuman kinerja dan teks penjelasan dari AI tentang kondisi emiten tersebut.

