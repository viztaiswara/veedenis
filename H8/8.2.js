class orang {
    constructor(nama,usia,job) {
        this.namaDpn = nama;
        this.umur = usia;
        this.pekerjaan = job;
    }
}
var andi = new orang ('andi', 30, 'PNS');
console.log (andi)

var x = {
    namaDpn: "Andi",
    usia: 50,
    job:"politisi"
};

console.log (x.namaDpn+' usianya'+x.usia+' tahun.')
console.log (x["namaDpn"]+' seorang '+x["job"]+ '.')

function a (nama, usia, job) {
    this.namaDpn = nama;
    //......
}