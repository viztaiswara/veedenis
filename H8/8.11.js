var jomblo =true 
var Andi = {usia: 27, job:"Polisi"};
var Budi = Object.assign({}, {usia:32, job:'Pilot'} );
var Caca = Object.assign({}, {Budi, job:'Akuntan'});
var Dedi = Object.assign({},{job:'Guru'}, {jomblo});
//{} -> objek kosong
console.log (Budi)
console.log (Caca)
console.log(Dedi)

var arrayku = [
    {nama: 'Andi', usia: 27},
    {nama: 'Budi', usia: 25},
    {nama: 'Caca', usia: 23}
]

console.log(arrayku[0].nama)
console.log(arrayku[0].usia)
console.log(arrayku[1].nama)
console.log(arrayku[2].usia)