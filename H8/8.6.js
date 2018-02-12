function person (x, y, z) {
    this.namaDpn = x,
    this.namaBlkg = y,
    this.usia = z,
    this.gantiNama = function(a) {
        this.namaBlkg = a
    }
}

let andi = new person ("andi", "susilo", 24)
console.log (andi.namaBlkg)

andi.gantiNama("Darmawan")
console.log (andi.namaBlkg)