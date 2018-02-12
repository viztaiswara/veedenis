//another way yaitu menggunakan ARRAY TO SET

let id = ['Ali', 'Bona', 'Ali'];
let nama = new Set (id);
//set id = new set ini sama kaya new promise, butuh sesuatu untuk menghandle.

console.log(nama);
console.log(nama.size);

let angka = [1, 2, 3, 4, 5, 6];
console.log(angka);

let nomor = new Set (angka);
console.log(nomor);

let arrayAngka = [... nomor] //(...) itu disini gunanya untuk memecah nomor.
console.log(arrayAngka)