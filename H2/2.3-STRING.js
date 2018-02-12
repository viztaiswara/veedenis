var x = 'halo';
var y = 'DUNIA';
var z = '12345';
var a = x.toUpperCase();

console.log(a.substr(2,3));
console.log(x.toUpperCase());
console.log(y.toLowerCase());
console.log(x.replace('ha','mi')); //merubah huruf dari 'Halo' jadi 'Milo'
console.log(x.replace(/ha/g,'mi')); 
//g = global -> fungsinya global, yaitu merubah huruf 'ha' secara global
console.log(z.toString());
console.log(typeof(z.toString()));
console.log(typeof(z))
 