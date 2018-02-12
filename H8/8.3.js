var andi = {
    nama: ['andi','susilo'],
usia:50,
job: "politisi"
};

console.log(andi)
console.log(andi.nama[0])
console.log(andi.nama[1])

function orang (awal, akhir, usia) {
    this.nama = [awal, akhir];
    this.usia = usia;
}
var ayan = new orang('andi', 'susilo', 20);

console.log (ayan)
console.log (ayan.nama[0])
console.log (ayan.nama[1])

var aku = {
    nama: "vizta",
    usia: 21,
    job: {
        nama: 'PNS',
        tingkat: 'ES5',
        lokasi: 'Bali'
    }
};
console.log(aku.job.nama)
console.log(aku.job.lokasi)