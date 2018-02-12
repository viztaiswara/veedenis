var arrayku = [
    {nama: 'Andi', usia: 27},
    {nama: 'Budi', usia: 25},
    {nama: 'Caca', usia: 23}
]
arrayku.sort (function(x,y){
    return x.usia - y.usia
}

console.log(arrayku)