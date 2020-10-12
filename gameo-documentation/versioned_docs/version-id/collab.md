---
id: collaborative-filtering
title: Pemfilteran Kolaboratif
slug: /pemfilteran-kolaboratif
---

Sebelum kita mulai dengan implementasi sebenarnya, mari kita bahas beberapa konsep dengan membuat mesin rekomendasi.

Pada dasarnya ada 3 jenis algoritme yang dapat digunakan mesin rekomendasi Anda saat merekomendasikan item kepada pengguna:

### 1. Pemfilteran Demografis

Jenis pemfilteran ini melihat tren umum dan popularitas item berdasarkan pengguna dengan demografi serupa. Artinya, pengguna dengan demografi serupa direkomendasikan item yang sama dan rekomendasi yang dipersonalisasi sangat terbatas.

### 2. Pemfilteran Berbasis Konten

Algoritme yang mendasari untuk jenis pemfilteran ini melihat kesamaan item berdasarkan metadatanya. Misalnya, untuk game, metadatanya berupa platform, genre, dan penerbit. Oleh karena itu, jika pengguna menyukai game RPG aksi PC yang diterbitkan oleh Valve, kemungkinan besar dia akan menyukai game lain yang memiliki metadata serupa (yaitu, game yang diterbitkan oleh Valve dan merupakan game PC RPG aksi). Ini berarti bahwa rekomendasi yang dipersonalisasi sekarang dilibatkan, karena game yang disukai pengguna digunakan untuk menentukan game yang mungkin akan disukai juga oleh pengguna.

Satu-satunya masalah dengan jenis pemfilteran ini adalah kenyataan bahwa item direkomendasikan dalam pola terbatas, yaitu melalui metadatanya.

### 3. Pemfilteran Kolaboratif

Jenis penyaringan terakhir dapat dibagi menjadi dua jenis.

#### Berbasis Pengguna

Mencocokkan pengguna dengan item berdasarkan pengguna lain. Secara khusus, pengguna lain yang ditentukan serupa dengan pengguna menurut algoritme. Ini berarti mengingat pengguna dan pengguna lain yang ditemukan serupa dengan pengguna tersebut, apa yang disukai pengguna lain direkomendasikan kepada pengguna tersebut.

#### Berbasis Item

Mencocokkan pengguna dengan item berdasarkan kesamaan item dengan item yang telah diberi peringkat oleh pengguna. Ini berarti jika pengguna menyukai item X, dan item X ditemukan sangat mirip dengan item Y, maka item Y akan direkomendasikan kepada pengguna.

Jenis mesin rekomendasi terbaik jelas akan mengintegrasikan semua 3 jenis tetapi dalam tutorial ini, kita akan fokus pada jenis terakhir: pemfilteran kolaboratif, karena ini bisa dibilang jenis yang paling kuat.

## Faktorisasi Matriks

Kelas algoritma pemfilteran kolaboratif yang akan kita lihat disebut Faktorisasi Matriks. Tujuan akhir dari faktorisasi matriks pada dasarnya adalah untuk membangun matriks pengguna dan item yang diisi dengan peringkat yang diketahui dan diprediksi.

![matrix.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1602010200173/AJgPxWM3N.png)

Dimulai dengan matriks asli yang hanya memiliki peringkat yang diketahui, kita ingin menentukan dua matriks faktor yang akan menghasilkan matriks asli kita. Kedua matriks ini pada gilirannya akan mewakili informasi pengguna, item, dan hubungan di antara keduanya. Salah satunya adalah matriks yang secara kuantitatif mewakili pengguna (matriks pengguna), di mana setiap baris matriks adalah vektor berukuran _k_ yang mewakili satu pengguna, dan yang lainnya adalah matriks item, di mana setiap kolom adalah vektor berukuran _k_ yang mewakili satu item.

:::important
**_ k _** disebut **ukuran embedding** dan merupakan **hyperparameter** yang disetel dalam model faktorisasi matriks. Ukuran sematan yang lebih besar akan memungkinkan model untuk menangkap hubungan dan informasi yang lebih kompleks, tetapi dapat menyebabkan **overfitting**.
:::

![mf.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1602012678397/oVxbAaNJc.png)
