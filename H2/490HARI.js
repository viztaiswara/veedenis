let total = 490
var tahun=Math.floor(total/360)
var bulan=Math.floor((total%360)/30)
var pekan=Math.floor(((total%360)%30)/7)
var hari=Math.floor(((total%360)%30)%7)

console.log(' '+total+' hari artinya:')
console.log(' '+tahun+' tahun')
console.log(' '+bulan+' bulan')
console.log(' '+pekan+' pekan')
console.log(' '+hari+' hari')