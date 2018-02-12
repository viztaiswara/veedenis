var a= new Date
// Hari ini Kamis, 25 Januari 2017

if (a.getDay() == 0){console.log(+a.getDay()+ 'senin');}
if (a.getDay() == 1){console.log(+a.getDay()+ 'selasa');}
if (a.getDay() == 2){console.log(+a.getDay()+ 'rabu');}
if (a.getDay() == 3){console.log(+a.getDay()+ 'kamis');}  
if (a.getDay() == 4){console.log(+a.getDay()+ 'Jumat');}  
if (a.getDay() == 5){console.log(+a.getDay()+ 'sabtu');} 
if (a.getDay() == 6){console.log(+a.getDay()+ 'minggu');} 


console.log(a.getDate());

if (a.getMonth() == 0){console.log(+a.getMonth()+'Januari');}

console.log(a.getFullYear);

console.log('Hari ini' +a.getDay()+','+a.getDate()+' '+a.getMonth()==3+' '+a.getFullYear());

console.log('hari ini '+a.getDay()+, '+a.getDate()+' '+bulan+' '+a.getFullYear())