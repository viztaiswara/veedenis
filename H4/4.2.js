// == value sama, tapi data type berbeda
// === value & data type sama
//> lebih Dari
//< kurang dari
// >= lebih dari sama dengan
// <= kurang dari sama dengan

//LOGICAL OPERATOR
//&& and (keduanya benar, maka TRUE)
//||  or (salah satu benar, makan TRUE)
//! not (membalik logika TRUE/FALSE)

var x = 5;
var y = '5';

console.log(x == y);
console.log(x === y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

var x = 5;
var y ='5';
var z = 6;

console.log (x===y && y<z);
console.log (x===y || y<z);
console.log (!(x===y || y<z));