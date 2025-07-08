let buah = ["apel", "jeruk", "mangga"];
buah.push("pisang");
console.log(buah);
buah.forEach((item, index) => {
  console.log(index + ": " + item);
});
let baru = buah.map(item => item.toUpperCase());
console.log(baru);
