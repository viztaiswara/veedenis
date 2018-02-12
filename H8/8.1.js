var andi = {
    namaDpn: "Andi",
    namaBlkg: "Susilo",
    usia: 50,
    pekerjaan:"Politisi"
}

console.log(typeof(andi.namaBlkg))//string

console.log(andi.namaBlkg)//susilo

console.log(andi)/*{
    namaDpn: "Andi",
    namaBlkg: "Susilo",
    usia: 50,
    pekerjaan:"Politisi"
}*/

var orang = new Object();
orang.namaDpn = 'John';
orang.namaBlkg = 'Susilo';
orang.usia = 50;
orang.pekerjaan = 'PNS';

console.log(orang)

var a = function(nama,usia,job){
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
}
var b = new a('andi', 30, 'PNS');
console.log (b.umur)

function x (nama, usia, job) {
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
}
var y = new x('andi', 30, 'PNS')
console.log(b.umur)