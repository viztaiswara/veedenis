let buah = ['jeruk', 'nanas', 'apel',];

buah.push('duku'); //index no 3
console.log(buah)

buah[buah.length] = 'pisang'; //length = 3, tapi karana sebelumnya sudah di push, yang mestinya udh masuk ke ke-3 malah kadi ke-4
console.log(buah)

buah [6] = 'mangga'; //ini diletakin di index ke-6, makanya ada 1 empy item, karna index ke-5nya kosong.
console.log(buah)

//kenapa ada '1 empty item?
//karena index

//NOTES
//jika nama buah baru disisipkan ke no.index yang sudah ada value, jadinnya di replace
//EXS;
buah [4] = 'mangga'
console.log(buah)

