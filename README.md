# 📚 Belajar JavaScript dari Nol Sampai Mahir

Repositori ini adalah panduan lengkap belajar JavaScript mulai dari nol. Materi disusun secara berurutan dan mudah dipahami untuk semua kalangan, bahkan pemula sekalipun. Cocok digunakan sebagai **cheat sheet** dan juga latihan langsung.

---

## 📌 Daftar Isi

1. Hello World
2. Variabel
3. Tipe Data
4. Operator
5. Percabangan
6. Looping
7. Fungsi
8. Array
9. Object
10. DOM
11. Event
12. Asynchronous
13. Fetch API
14. LocalStorage

---

## 1. Hello World

```js
console.log("Halo dunia!");
```

📝 Menampilkan teks ke konsol browser atau terminal Node.js.

---

## 2. Variabel

```js
let nama = "Budi";
const umur = 25;
var kota = "Jakarta";

console.log(nama, umur, kota);
```

📝 `let` dan `const` lebih aman dan modern dibanding `var`.

---

## 3. Tipe Data

```js
let teks = "Halo";
let angka = 123;
let benar = true;
let kosong = null;
let tidakAda;

console.log(typeof teks);      // string
console.log(typeof angka);     // number
console.log(typeof benar);     // boolean
console.log(typeof kosong);    // object (khusus)
console.log(typeof tidakAda);  // undefined
```

---

## 4. Operator

```js
let a = 5, b = 3;

console.log(a + b); // Penjumlahan
console.log(a - b); // Pengurangan
console.log(a * b); // Perkalian
console.log(a / b); // Pembagian
console.log(a % b); // Modulus (sisa bagi)

console.log(a == b);   // false
console.log(a != b);   // true
console.log(a > b && b > 1); // true
console.log(a > b || b < 1); // true
```

---

## 5. Percabangan

```js
let nilai = 80;

if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}

let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari biasa");
}
```

---

## 6. Looping

```js
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

let j = 0;
while (j < 3) {
  console.log("While ke-" + j);
  j++;
}
```

---

## 7. Fungsi

```js
function sapa(nama) {
  return "Halo, " + nama;
}

console.log(sapa("Ani"));

// Arrow function
const tambah = (a, b) => a + b;
console.log(tambah(2, 3));
```

---

## 8. Array

```js
let buah = ["apel", "jeruk", "mangga"];

buah.push("pisang");
console.log(buah);

buah.forEach((item, index) => {
  console.log(index + ": " + item);
});

let baru = buah.map(item => item.toUpperCase());
console.log(baru);
```

---

## 9. Object

```js
let orang = {
  nama: "Budi",
  umur: 30,
  sapa: function() {
    return "Halo, saya " + this.nama;
  }
};

console.log(orang.nama);
console.log(orang.sapa());
```

---

## 10. DOM (Document Object Model)

```html
<!-- index.html -->
<button onclick="ubahTeks()">Klik Saya</button>
<p id="hasil">Halo</p>

<script>
function ubahTeks() {
  document.getElementById("hasil").innerText = "Teks sudah diubah!";
}
</script>
```

---

## 11. Event

```html
<!-- index.html -->
<input type="text" id="nama" />
<button id="tombol">Kirim</button>

<script>
document.getElementById("tombol").addEventListener("click", function () {
  let isi = document.getElementById("nama").value;
  alert("Halo " + isi);
});
</script>
```

---

## 12. Asynchronous (setTimeout & Promise)

```js
console.log("Satu");

setTimeout(() => {
  console.log("Dua (setelah 2 detik)");
}, 2000);

console.log("Tiga");

let janji = new Promise((resolve, reject) => {
  let sukses = true;
  if (sukses) resolve("Berhasil!");
  else reject("Gagal!");
});

janji.then(result => console.log(result)).catch(err => console.log(err));
```

---

## 13. Fetch API

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

---

## 14. LocalStorage

```js
// Simpan data
localStorage.setItem("nama", "Budi");

// Ambil data
let nama = localStorage.getItem("nama");
console.log(nama);

// Hapus data
localStorage.removeItem("nama");
```

---

## 📦 Tips Tambahan

- Latihan di browser: buka console (Ctrl+Shift+J).
- Bisa juga pakai [https://jsfiddle.net](https://jsfiddle.net) atau [https://codepen.io](https://codepen.io)
- Konsisten latihan setiap hari walau sedikit.

---

## 🚀 Saran

Kalau kamu merasa terbantu, bantu bintangin repo ini ⭐ di GitHub!

Selamat belajar dan semangat jadi master JavaScript! 💪