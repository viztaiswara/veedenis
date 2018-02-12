var a = 3.14;
var b = 3;

var c = 123e5; //123 x 10 pangkat 5
var d = 123e-5; // 123x 10 pangkat -5

var e = 999999999999999 //15x
var f = 9999999999999999 //16x - dia di bulatkan kalau '9'-nya sudah 16 keatas jumlahnya

var g = 0.2 + 0.1; 
//karna, cara hitung math 'var g' error, jadi disarankan pakai metode lain, eg: ' var h'
var h = (0.2*10+0.1*10)/10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);