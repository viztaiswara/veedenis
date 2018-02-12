let janji = new Promise(function (tepati, ingkari) {
    let dipenuhi = true;
    if (dipenuhi){
        tepati('Janji Kutepati.');
    }else {
        ingkari('Janji Kuingkari');
    }
});
janji.then (function(janjiDitepati){
    console.log(janjiDitepati);
}).catch (function(janjiDiingkari){
    console.log(janjiDiingkari);
})

let merk = 'Yamaha';
let tahun = 2015;

let mio = {
    merk: merk,
    prod: tahun
}

let vixion = {
    merk, tahun
}

console.log (mio);
console.log(vixion);

