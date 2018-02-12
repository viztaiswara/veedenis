//jarak mobil A&B = 120km.
//A berjalan 60km/h dari timur.
//B berjalan 40/km/h dari barat.
//A&B srart pukul 9 WIB.
//jam berapa A&B tabrakan?

//jawaban: tabrakan akan terjadi 72 menit lagi!
//sekarang jam 9, tabrakan jam 10:12

//cara
//total A&B = 100km/h
//jarak 120km
//120km=100km/h
//1.2 h -> 1 jam 12 menit


let kecepatanA = 60
let kecepatanB= 60
let jarak = 120
let jamstart=9

let waktuTabrakanMenit = (jarak/(kecepatanA+kecepatanB))*60
let tabrakanJam = Math.round(waktuTabrakanMenit/60)
let waktuTabrakanMenit = waktuTabrakanMenit%60
let jamTabrakan = tabrakanJam + jamstart

console.log('mobil A ' +kecepatanA+' km/h dari timur')
console.log('mobil B '+kecepatanB+' km/h dari Barat')
console.log('tabrakan akan terjadi '+waktuTabrakanMenit+' menit lagi')
console.log('sekarang jam '+jamstart+', tabrakan jam '+jamTabrakan+':'+waktuTabrakanMenit)