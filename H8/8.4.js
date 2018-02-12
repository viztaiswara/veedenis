function orang (awal,akhir, usia) {
    this.nama = {awal, akhir};
    this.usia = usia;
}
var andi = new orang
('ando','susilo',20)

console.log(andi)
console.log(andi.nama.awal)
console.log(andi.nama.akhir)