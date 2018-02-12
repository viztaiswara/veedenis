//IMT= massa(kg)/tinggi(m^2)
//a. IMT <18.5 artinya berat badan kurang,
//b. 18.5-24.9 artinya berat bdan ideal
//c. 25.0-29.9 artinya bb berlebih,
//d. 30.0 - 39.9 artinya BB sangat berlebih
//e. IMT>39.9 artinya obesitas

// massa 67 kg & tinggi 1.78 m
//IMT = 21.149319909102385, BERAT BADAN ANDA IDEAL

var IMT = massa/tinggi;
var massa = 67;
var tinggi = Math.pow(1.78, 2);
var info;

if(IMT <18.5){info = 'BERAT BADAN ANDA KURANG';}
else if(IMT >= 18.5 && IMT <=24.9){info = 'berat badan anda ideal';}
else if(IMT >= 25.0 && IMT <=29.9){info = 'berat badan anda berlebih';}
else if (IMT >= 30.0 && IMT <=39.9){info = 'berat badan sangat berlebih';}
else if (IMT > 39.9){info = 'berat badan obesitas';}

console.log(' Massa '+massa+'kg & tinggi ' +tinggi+' m ')
console.log(' IMT = '+IMT+ ','+info)
alert(' Massa '+massa+' kg & tinggi' +tinggi+' m\nIMT= '+IMT+','+info)
