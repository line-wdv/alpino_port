# Alfino Ridho Saputro — Personal Portfolio

Website statis (HTML + CSS + JavaScript murni). Tanpa build, tanpa backend, tanpa npm.

## 1. Membuka secara lokal
Klik dua kali `index.html`. Lebih nyaman: VS Code + ekstensi **Live Server** → klik kanan `index.html` → *Open with Live Server*.

## 2. Mengedit konten
- Teks: `index.html` (cari teks yang ingin diubah).
- Warna: bagian `:root` di `assets/css/style.css`.

## 3. Mengganti foto profil
Ganti file `assets/images/profile.jpg` (nama harus sama). Rasio ideal 3:4, lebar sekitar 900 px, ukuran di bawah 300 KB.
Foto saat ini memiliki watermark fotografer (Azzura Shoot). Pastikan ada izin memakainya, atau pakai versi tanpa watermark.

## 4. Menambah project
Buka `assets/js/script.js`, isi array `projects` (contoh ada di komentar). Taruh thumbnail di `assets/images/projects/`. Card muncul otomatis; jika kosong, tampil empty state.

## 5. Mengubah kontak & sosial media
Di `index.html`, cari `USERNAME`, `email-kamu@example.com`, dan `628XXXXXXXXXX` (ada di section Contact **dan** footer). Format WhatsApp: `https://wa.me/62812xxxxxxx` (tanpa 0, tanpa +).

## 6. Upload ke GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/alfino-portfolio.git
git push -u origin main
```
(Buat repo kosong `alfino-portfolio` di github.com lebih dulu.)

## 7–8. Deploy pertama di Vercel
1. Login ke vercel.com dengan akun GitHub → **Add New → Project**.
2. Pilih repo `alfino-portfolio` → **Import**.
3. Framework Preset: **Other**. Build Command, Output Directory, Environment Variables: kosongkan.
4. Klik **Deploy**. Tunggu sekitar satu menit; link `.vercel.app` siap dibagikan.

Alternatif: Netlify (drag & drop folder) atau GitHub Pages (Settings → Pages → branch `main`).

## 9. Memperbarui website
Edit file → `git add .` → `git commit -m "update"` → `git push`. Vercel deploy ulang otomatis.

## Catatan
- PHP tampil sebagai skill, tetapi website ini murni statis dan tidak butuh PHP untuk berjalan.
- Tidak ada link CV. Jika punya, taruh di `assets/documents/cv.pdf` lalu tambahkan tautan di `index.html`.
- `og:image` memakai path relatif. Untuk preview sempurna di WhatsApp/sosmed, ganti ke URL penuh setelah deploy.
