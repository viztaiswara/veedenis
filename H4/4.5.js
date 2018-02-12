let alaskaki = 'sepatu'
let warna = 'merah'

switch (true) {
    case (alaskaki == 'sepatu' && warna == 'merah'):
    console.log ('Saya suka sepatu merah');
    break;
    case (alaskaki == 'sepatu' && warna == 'merah'):
   // console.log ('Saya suka sepatu biru');
    break;
    //kalau isi false, dia switch setelahnya.
    case (alaskaki == 'sandal' && warna == 'merah'):
   // console.log ('Saya suka sandal merah');
    break;
    case (alaskaki == 'sandal' && warna == 'biru'):
   // console.log ('Saya suka sandal biru');
    break;
    default:
    console.log('tak suka alas kaki merah/biru');
}