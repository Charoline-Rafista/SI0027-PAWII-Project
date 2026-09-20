// Mini Project - Pertemuan 1: Arsitektur Monolitik
// Tujuan: server merender tampilan HTML langsung untuk dikirim ke browser.
//
// TODO Mahasiswa:
// 1. Lengkapi array `produk` dengan minimal 3 data produk (nama, harga).
// 2. Lengkapi fungsi renderHalamanProduk() agar menghasilkan HTML yang
//    menampilkan seluruh data produk dalam bentuk daftar (<ul><li>...).
// 3. Jalankan dengan: npm install && npm start, lalu buka http://localhost:3000

const express = require("express");
const app = express();
const PORT = 3000;

// TODO 1: lengkapi data produk
const produk = [
  { nama: "Laptop", harga: 8500000 },
  { nama: "Kamera", harga: 7600000 },
  { nama: "Handphone", harga: 1000000 },
];

function renderHalamanProduk(daftarProduk) {
  // TODO 2: bangun string HTML dari daftarProduk
  const itemHtml = daftarProduk // ganti dengan map() daftarProduk menjadi <li>...</li>
  .map((p) => `<li>${p.nama} - Rp${p.harga.toLocaleString("id-ID")}</li>`)
  .join(""); 

  return `
    <html>
      <head><title>TokoKita - Monolitik</title></head>
      <body>
        <h1>Daftar Produk (Monolitik)</h1>
        <ul>${itemHtml}</ul>
      </body>
    </html>
  `;
}

app.get("/produk", (req, res) => {
  const html = renderHalamanProduk(produk);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server monolitik berjalan di http://localhost:${PORT}/produk`);
});
