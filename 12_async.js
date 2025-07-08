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
