let alaskaki = 'sandal'
let warna = 'biru'
let harga = 'mahal'

switch (true) {
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'mahal'):
    console.log ('Sepatu merah saya mahal');
    break;
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'mahal'):
    console.log ('Sepatu biru saya tidak mahal');
    break;
    //kalau isi false, dia switch setelahnya.
    case (alaskaki == 'sandal' && warna == 'merah' && harga == 'mahal'):
    console.log ('harga sandal merah saya mahal');
    break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga == 'mahal'):
    console.log ('harga sandal biru saya tidak mahal');
    break;
    default:
    console.log('tak suka alas kaki merah/biru karena mahal');
}

// SWITCH hanya memilih option yang dimana value of the case sama dengan variablenya
// jika, tidak ada pilihan, dia akan memilih 'DEFAULT'