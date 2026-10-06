# Product Requirement Document (PRD)

# SaveBite Merchant Dashboard


## 1. Overview

SaveBite Merchant Dashboard merupakan halaman khusus untuk restoran atau penjual yang bergabung dalam platform SaveBite.

Dashboard ini digunakan untuk mengelola makanan surplus yang masih layak konsumsi, mengatur produk, menerima pesanan, dan membantu mengurangi food waste.


---

# 2. Objective

Tujuan utama website:

- Membantu restoran menjual makanan surplus dengan mudah.
- Mempermudah merchant mengelola produk makanan.
- Membantu merchant memantau pesanan pelanggan.
- Memberikan informasi kontribusi pengurangan food waste.


---

# 3. Target User

Target pengguna:

- Restoran
- Cafe
- UMKM makanan
- Bakery
- Food merchant


---

# 4. Design Reference

Mengacu pada desain SaveBite Merchant:

Style:
- Modern
- Minimalis
- Clean
- Professional dashboard


Color palette:

Primary:
- Dark Green (#0F6B3D)

Secondary:
- Light Green (#E8F3E8)

Background:
- Cream / White


Typography:
- Modern sans-serif


---

# 5. Main Pages


## A. Dashboard Merchant

Tujuan:
Menampilkan ringkasan aktivitas merchant.


Components:

1. Sidebar Navigation

Menu:
- Dashboard
- Kelola Produk
- Pesanan Masuk
- Profil Restoran
- Bantuan
- Keluar


2. Header

Menampilkan:

"Selamat datang, Resto Kita!"

Button:
"+ Tambah Produk"


3. Statistic Card

Menampilkan:

- Produk Aktif
- Pesanan Hari Ini
- Total Diselamatkan


4. Contribution Banner

Informasi:

"Terima kasih telah berkontribusi mengurangi food waste"


5. Produk Aktif

Menampilkan:

- Foto makanan
- Nama produk
- Harga
- Stok


---

# B. Tambah Produk

Tujuan:
Merchant dapat menambahkan makanan surplus.


Form:

- Foto makanan
- Nama makanan
- Deskripsi
- Harga awal
- Harga diskon
- Jumlah stok
- Batas pengambilan


Button:

- Batal
- Publikasikan Produk


---

# C. Produk Aktif

Tujuan:
Merchant mengelola produk.


Tampilan:

Table:

- Foto
- Nama makanan
- Harga
- Stok
- Batas pengambilan
- Status
- Aksi


Fitur:

- Aktif/nonaktif produk
- Edit produk
- Tambah produk


---

# D. Pesanan Masuk

Tujuan:
Merchant mengelola pesanan pelanggan.


Tampilan:

Table:

- Kode pesanan
- Produk
- Jumlah
- Waktu pengambilan
- Status
- Aksi


Status:

- Belum Diambil
- Selesai


Button:

"Tandai Selesai"


---

# 6. Responsive Requirement

Website harus dapat digunakan pada:

Desktop:
- Sidebar tetap terlihat
- Dashboard menggunakan grid


Mobile:
- Sidebar berubah menjadi menu hamburger
- Card menjadi vertical
- Table dapat di-scroll


---

# 7. Technical Requirement

Frontend:

- HTML
- CSS
- JavaScript


Tidak menggunakan backend.

Data menggunakan dummy data untuk prototype.


---

# 8. Prototype Goal

Hasil akhir berupa prototype interaktif:

User dapat:

- Berpindah halaman dashboard
- Melihat produk
- Menambah produk
- Melihat pesanan
- Mengubah status pesanan