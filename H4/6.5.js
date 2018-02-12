setTimeout(waktu, 3000);

function waktu() {
    console.log('Halo');
}
console.log('yuk')

//CLEAR TIME OUT
var x = setTimeout(waktu, 3000);

function waktu() {
    console.log('Halo');
}

clearTimeout(x)
console.log('yuk');

//INTERVAL
setInterval(waktu, 1500);

function waktu() {
    console.log('Halo');
}

