# 📘 JavaScript Array Methods

Kumpulan method penting dalam JavaScript untuk memanipulasi data Array. Cocok untuk belajar dasar, latihan, dan referensi cepat saat ngoding.

---

## 📏 1. `.length`
```js
[1, 2, 3].length; // 3
```
Mengembalikan jumlah elemen dalam array.

---

## ➕ 2. `.push()`
```js
[1, 2, 3].push(4); // [1, 2, 3, 4]
```
Menambahkan elemen ke akhir array.

---

## 🔁 3. `.unshift()`
```js
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
```
Menambahkan elemen ke awal array.

---

## ➖ 4. `.pop()`
```js
[1, 2, 3].pop(); // 3
```
Menghapus elemen terakhir dari array.

---

## ➖ 5. `.shift()`
```js
[1, 2, 3].shift(); // 1
```
Menghapus elemen pertama dari array.

---

## 🔍 6. `.at()`
```js
[1, 2, 3].at(2); // 3
```
Mengakses elemen berdasarkan indeks. Mendukung indeks negatif.

---

## 🔢 7. `.indexOf()`
```js
[1, 2, 3].indexOf(3); // 2
```
Mencari posisi (indeks) dari suatu elemen.

---

## ✅ 8. `.includes()`
```js
[1, 2, 3].includes(3); // true
```
Cek apakah elemen tertentu ada dalam array.

---

## 🧠 9. `.map()`
```js
[1, 2, 3].map(num => num * 2); // [2, 4, 6]
```
Menghasilkan array baru dari transformasi setiap elemen.

---

## 🔎 10. `.filter()`
```js
[1, 2, 3].filter(num => num > 1); // [2, 3]
```
Mengembalikan elemen yang lolos dari kondisi tertentu.

---

## ✅ 11. `.every()`
```js
[1, 2, 3].every(num => num > 0); // true
```
Cek apakah **semua** elemen memenuhi kondisi.

---

## 🔍 12. `.some()`
```js
[1, 2, 3].some(num => num > 2); // true
```
Cek apakah **setidaknya satu** elemen memenuhi kondisi.

---

## 🧱 13. `.fill()`
```js
[1, 2, 3].fill(0); // [0, 0, 0]
```
Mengisi semua elemen array dengan nilai tertentu.

---

## 🧮 14. `.reduce()`
```js
[1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
```
Menggabungkan semua nilai array menjadi satu nilai akhir.

---

## ➕ 15. `.concat()`
```js
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
```
Menggabungkan dua atau lebih array.

---

## 🔄 16. `.reverse()`
```js
[1, 2, 3].reverse(); // [3, 2, 1]
```
Membalik urutan elemen array.

---

## 🔤 17. `.sort()`
```js
[3, 1, 2].sort(); // [1, 2, 3]
```
Mengurutkan elemen array (default: secara alfabet).

---

## 🔗 18. `.join()`
```js
[1, 2, 3].join("-"); // "1-2-3"
```
Menggabungkan elemen array jadi string.

---

## 🪜 19. `.flat()`
```js
[1, [2, 3]].flat(); // [1, 2, 3]
```
Mengubah array bersarang menjadi array datar.

---

## 🔍 20. `.find()`
```js
[1, 2, 3].find(num => num === 1); // 1
```
Mengembalikan elemen pertama yang cocok dengan kondisi.

---

## 📍 21. `.findIndex()`
```js
[1, 2, 3].findIndex(num => num === 2); // 1
```
Mengembalikan index dari elemen pertama yang cocok.

---

## 📄 22. `.toString()`
```js
[1, 2, 3].toString(); // "1,2,3"
```
Mengubah array menjadi string.

---

## 🌍 23. `.toLocaleString()`
```js
[1, 2, 3].toLocaleString(); // "1,2,3"
```
Sama seperti `.toString()`, tapi mempertimbangkan format lokal.

---

## ✂️ 24. `.slice()`
```js
[1, 2, 3].slice(1, 2); // [2]
```
Mengambil bagian array tanpa mengubah array asli.

---

## 🧷 25. `.splice()`
```js
[1, 2, 3].splice(1, 1, "a"); // [1, 'a', 3]
```
Menghapus dan/atau menambahkan elemen di array (mengubah array asli).

---

## ❓ 26. `Array.isArray()`
```js
Array.isArray([1, 2, 3]); // true
```
Cek apakah nilai adalah array.

---

## 🧬 27. `Array.from()`
```js
Array.from("123"); // ['1', '2', '3']
```
Mengubah iterable (seperti string) menjadi array.

---

## 💾 Tips Latihan
✅ Coba langsung di browser (buka `console`)  
✅ Atau gunakan tools online seperti:
- [jsfiddle.net](https://jsfiddle.net)
- [replit.com](https://replit.com)
- [codepen.io](https://codepen.io)

---

> Made with ❤️ untuk belajar JavaScript.  
> Simpan & share jika bermanfaat.
