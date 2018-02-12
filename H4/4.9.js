// pukul 11:49:04
var noljam;
var nolmenit;
var noldetik; 

if(a.getHours()<10){noljam='0'}
else{noljam=''}

if (a.getMinutes()<10){nolmenit='0'}
else{nolmenit=''}


if (a.getSeconds()<10){noldetik='0'}
else{noldetik=''}

console.log('')

console.log('pukul '+noljam+' '+a.getHours()+':'+nolmenit+' '+a.getMinutes()+' :'+noldetik+' '+a.getSeconds())