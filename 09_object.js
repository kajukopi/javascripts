let orang = {
  nama: "Budi",
  umur: 30,
  sapa: function() {
    return "Halo, saya " + this.nama;
  }
};
console.log(orang.nama);
console.log(orang.sapa());
