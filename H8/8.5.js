var orang = {
    namaDpn: "Andi",
    namaBlkg: "Susilo",
    usia: 50,
    namaFull: function() {
        return this.namaDpn+ " " +this.namaBlkg;
    },
    usiaFull: function() {
        return (this.usia==50);
    } 
};
console.log (orang.namaFull)
console.log (orang.namaFull())
console.log (orang.usiaFull)
console.log (orang.usiaFull())
