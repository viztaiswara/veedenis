let buah = ['jeruk', 'nanas', 'apel'];

buah.pop(); //ngapus yang akhir
console.log(buah)

buah.push('kiwi'); //nambah di indeks terakhir
console.log(buah)

buah.shift();//ngilangin elemen yang pertama
console.log(buah)

buah.unshift('lemon'); //nambah index di depan
console.log (buah)

buah.splice(2, 0, 'lemon', 'kiwi');
console.log (buah)

buah.splice (0,1);
console.log (buah)

delete buah [0];
console.log (buah)