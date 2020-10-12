---
id: intro
title: Gambaran
slug: /
---

Gameo adalah mesin rekomendasi game yang membantu siapa saja untuk menemukan dan memainkan game. Menggunakan model berbasis faktorisasi matriks yang dibangun dengan PyTorch, Gameo merekomendasikan pengguna game melalui pemfilteran kolaboratif.

Gameo dimulai sebagai proyek yang dibangun untuk [Tantangan Komunitas Developer Circles 2020 Facebook](https://developercircles2020.devpost.com/?utm_source=social-facebook&utm_medium=devc&utm_campaign=organic&utm_content=post-url&utm_offering=business-tools&utm_product=DevC-CommunityChallenge-Launch_09102020&utm_event=2020DevCCommunityChallengeLaunch&eventSource=OrganicSocialDevC).

## Tentang Dokumentasi Ini

Dokumentasi ini berfungsi sebagai tutorial tentang bagaimana Gameo dibuat dan digunakan. Silakan baca tutorial dalam urutan yang disajikan di sidebar navigasi. Untuk membaca tutorial dalam bahasa lain, pilih versi di bawah ini:

- [Inggris](../en)
- [Bahasa Indonesia](./)

## Prasyarat

Karena tutorial ini ditujukan untuk programmer yang lebih mahir, prasyarat berikut sangat penting untuk mengikuti tutorial ini:

- Pemahaman dasar hingga menengah di React
- Pemahaman menengah hingga mahir dalam JavaScript dan Python
- Pemahaman dasar dalam Machine Learning

## Topik yang Dicakup

:::note

Sebelum mengikuti tutorial, Anda harus memiliki yang berikut:

- Sebuah aplikasi pemula dibuat dengan Create React App
- Python 3.8 diinstal di mesin Anda
- IDE untuk Python dan JavaScript

:::

Tutorial ini akan membahas topik-topik berikut secara berurutan:

### [1. Integrasi dan Implementasi PyTorch](./pemfilteran-kolaboratif)

- Pemfilteran Kolaboratif: Cara kerja Sistem Rekomendasi kami
- Mempersiapkan set data dan penyiapan PyTorch
- Menerapkan Model: Data pelatihan, membangun dengan PyTorch

### [2. Titik Akhir untuk Data Pengguna](./gambaran)

- Titik akhir database untuk pembaruan data pengguna yang disimpan di MongoDB Atlas

### [3. Membuat Website Gameo dengan React](./penggunaan-api)

- Ambil dan tampilkan data dari API
- Simpan dan perbarui peringkat game pengguna
- Ambil game yang direkomendasikan untuk setiap pengguna

## Teknologi yang Digunakan

- React 16.13.1
- Python 3.8
- Python Flask 1.1.2
- Pymongo 3.11.0
- Pandas 1.1.3

---

Dibuat dengan ❤️ oleh [Victoria](https://github.com/victoria-lo) and [Steffy](https://github.com/steffy-lo).
