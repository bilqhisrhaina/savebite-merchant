# Design System
# SaveBite Merchant Dashboard


# 1. Design Concept

SaveBite Merchant menggunakan konsep:

- Modern dashboard
- Clean interface
- Professional
- Eco-friendly
- Easy to use


Target impression:

"Simple dashboard untuk membantu merchant mengelola makanan surplus."


---

# 2. Color Palette


## Primary Color

Dark Green

HEX:
#2E7D32

Digunakan untuk:
- Sidebar
- Button utama
- Highlight


## Secondary Color

Light Green

HEX:
#E8F5E9

Digunakan untuk:
- Background card
- Badge
- Status


## Background

Off White

HEX:
#F8FAF8


## Text

Primary:
#1F2937

Secondary:
#6B7280


## Success

#22C55E


## Warning

#F59E0B


## Danger

#EF4444



---

# 3. Typography


Font:

Sans-serif modern


Recommended:

- Inter
- Poppins
- Nunito


Hierarchy:


Heading 1:
32px
Bold


Heading 2:
24px
Semi Bold


Body:
16px


Caption:
14px



---

# 4. Layout


## Desktop


Sidebar:

Width:
260px


Position:
Fixed left


Main content:

Padding:
32px



## Mobile


Sidebar berubah menjadi:

- Hamburger menu
- Bottom navigation


Content:

Padding:
16px



---

# 5. Sidebar Component


Style:

- Rounded menu item
- Icon + text
- Active state


Menu:

Dashboard

Kelola Produk

Pesanan Masuk

Profil Restoran

Bantuan

Keluar



Active menu:

Background:
Light Green


Text:
Dark Green



---

# 6. Card Component


Digunakan untuk:

- Statistik
- Produk
- Informasi


Style:

Background:
White


Border radius:

16px


Shadow:

Soft shadow


Padding:

20px



---

# 7. Button Style


Primary Button:


Background:
Dark Green


Text:
White


Radius:
10px


Example:

"+ Tambah Produk"



Secondary Button:


Background:
White


Border:
Green


Text:
Green



Danger Button:

Background:
Light Red

Text:
Red



---

# 8. Product Card


Komponen:


Image:

120x120px


Content:

- Nama makanan
- Harga
- Stok
- Waktu pengambilan


Action:

Edit

Delete

Toggle Status



---

# 9. Table Component


Digunakan untuk:

Produk Aktif

Pesanan Masuk


Style:

Header:
Light Green


Row:

White background


Border:

Soft gray



---

# 10. Image Style


Food image:

Aspect ratio:
1:1


Border radius:

12px


Object-fit:

Cover



---

# 11. Responsive Requirement


Desktop:

- Sidebar visible
- Grid layout


Tablet:

- Grid menyesuaikan


Mobile:

- Sidebar collapse
- Card menjadi vertical
- Table horizontal scroll



---

# 12. Interaction


Button harus memiliki:

- Hover effect
- Smooth transition


Navigation:

Setiap menu dapat berpindah halaman:


Dashboard
→ index.html


Produk
→ products.html


Tambah Produk
→ add-product.html


Pesanan
→ orders.html



---

# 13. Prototype Data


Gunakan dummy data:


Merchant:

Nama:
Resto Kita


Produk:

1.
Nasi Ayam Teriyaki

Harga:
Rp18.000

Stok:
2 porsi


2.
Roti Manis

Harga:
Rp12.000

Stok:
5 porsi


3.
Paket Sushi

Harga:
Rp30.000

Stok:
3 porsi



Pesanan:

SB001

Nasi Ayam Teriyaki

Status:
Belum Diambil