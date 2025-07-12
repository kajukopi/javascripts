# 🧠 Cheatsheet JavaScript Rahasia – Fitur yang Jarang Diketahui Developer

> Tingkatkan skill JavaScript-mu dengan fitur-fitur modern, tersembunyi, dan sering dilewatkan!

---

## 1. 📦 `Object.groupBy()` (ES2024+)

Mengelompokkan elemen array berdasarkan properti tertentu.

```js
const data = [
  { nama: 'Apel', jenis: 'buah' },
  { nama: 'Wortel', jenis: 'sayur' },
  { nama: 'Pisang', jenis: 'buah' },
];

const hasil = Object.groupBy(data, item => item.jenis);
/*
{
  buah: [ { nama: 'Apel' }, { nama: 'Pisang' } ],
  sayur: [ { nama: 'Wortel' } ]
}
*/
```

✅ Tersedia di Node.js 20+ dan browser modern (aktifkan flag).

---

## 2. 🧼 `structuredClone()` – Deep Clone Native

```js
const asli = { a: 1, b: { c: 2 } };
const salinan = structuredClone(asli);
salinan.b.c = 3;
console.log(asli.b.c); // 2 (tidak berubah)
```

Tidak perlu lagi `JSON.parse(JSON.stringify(...))`.

---

## 3. 🧪 Regex dengan Named Capture Groups

```js
const tanggal = '2025-07-12';
const regex = /(?<tahun>\d{4})-(?<bulan>\d{2})-(?<hari>\d{2})/;
const hasil = regex.exec(tanggal);
console.log(hasil.groups.tahun); // "2025"
```

---

## 4. 🎯 `Array.prototype.at()` – Akses indeks dari belakang

```js
const arr = [10, 20, 30];
console.log(arr.at(-1)); // 30
```

---

## 5. 🧠 `Function.name` dan `Function.toString()`

```js
function keren() { return '🔥'; }
console.log(keren.name); // "keren"
console.log(keren.toString());
```

---

## 6. 🔁 `.replaceAll()` – Ganti semua kata dalam string

```js
const teks = "halo dunia dunia";
console.log(teks.replaceAll("dunia", "🌍"));
// "halo 🌍 🌍"
```

---

## 7. 🪄 Optional Chaining + Nullish Coalescing

```js
const user = { profil: null };
const nama = user?.profil?.nama ?? "Tamu";
console.log(nama); // "Tamu"
```

---

## 8. ⚙️ Operator Penugasan Logika

```js
let a = null;
a ??= 'default'; // jika null/undefined, isi 'default'

let b = true;
b &&= false; // b jadi false
```

---

## 9. 🌍 `Intl.NumberFormat` – Format angka & mata uang lokal

```js
const harga = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
}).format(25000);

console.log(harga); // "Rp25.000,00"
```

---

## 10. ⏱️ Delay async tanpa `setTimeout`

```js
await new Promise(r => setTimeout(r, 1000)); // tunggu 1 detik
```

---

## 11. 🧩 `console.table()` – Tampilkan data array secara rapi

```js
const pengguna = [
  { nama: 'Andi', umur: 22 },
  { nama: 'Budi', umur: 27 },
];
console.table(pengguna);
```

---

## 12. 📦 Dynamic Import – Hanya load modul saat dibutuhkan

```js
if (perluFiturBerat) {
  const { default: modul } = await import('./fiturBerat.js');
  modul.jalankan();
}
```

---

## 13. 🧾 Komentar di JSON – Gunakan ekstensi `.jsonc`

```jsonc
{
  // Ini adalah komentar yang valid di .jsonc
  "port": 3000
}
```

---

## 14. 🆔 Buat ID unik pendek dari timestamp

```js
const id = Date.now().toString(36); // contoh: "l3x2m3"
```

---

## 15. 🔧 Override `.toString()` untuk debugging keren

```js
const obj = {
  toString() {
    return '[Objek Kustom]';
  }
};
console.log('Debug:', obj); // Debug: [Objek Kustom]
```

---

## 🙌 Bonus: Gunakan `Object.hasOwn()` daripada `hasOwnProperty()`

```js
const orang = { nama: 'Dian' };
console.log(Object.hasOwn(orang, 'nama')); // true
```

---

## 🎉 Penutup

Fitur-fitur ini:
- ✅ Native dan modern (ES2020+)
- 🚫 Jarang digunakan oleh developer umum
- 💡 Sangat berguna dalam proyek nyata

Simpan file ini, bagikan ke tim kamu, dan mulai ngoding dengan lebih bersih dan pintar 🚀

---

_✨ Mau fitur langka lainnya? Atau cheat Node.js dan Web API? Tinggal bilang!_