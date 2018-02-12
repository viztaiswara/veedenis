let mio = {
    kualitas: function(x){
        return `Mutu ${x}`;
    }
}

let vixion = {
    kualitas (x){
        return `Perform ${x}`;
    }
}

console.log(mio.kualitas('Oke banget!'));
console.log(vixion.kualitas ('Juara!'))

//kualitas mesti pakai titik dua (:)
// yang di perform n muthu pakai tik " ` (pojok atas tab)"
//pakau tanda kurung ({}) di perform n mutu.

let nama = new Set ()
nama.add ('Adi').add('Budi').add ('Adi');
//nama Adi ada 2, itu buat test doang. soalnya in the end bakal tetep dimasukin satu nama saja.
console.log(nama);
console.log(nama.size);

nama.delete('Adi');
console.log(nama);
console.log (nama.size);

nama.clear ();
console.log(nama);
console.log(nama.size);