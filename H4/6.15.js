let x = [40, 100, 1, 5, 25, 10];

console.log(x)
console.log(x.sort())

x.sort(function(a,b){
    return a-b
});
//mengurutkan angka

console.log(x);

function nilaiMin(a) {
    return Math.min.apply(null, a);
}

function nilaiMax(a) {
    return Math.max.apply(null, a);
}

console.log (nilaiMin(x))
console.log(nilaiMax(x))

