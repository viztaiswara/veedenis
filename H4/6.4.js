//RECURSIVE FUNCTION


function pangkat(x,y) {
if (y==1) {
    return x;
}
else {
    return x=x*pangkat (x,y-1);
}
}
console.log(pangkat(7,2))

//FAKTOR FAKTORIAL

function faktorial(x) {
    return x= 5*4*3*2*1
}
console.log ('faktorial 5! '+x)

//dibawah adalah cara gurunya

function faktorial (x) {
    if (x<2) {return 1;}
    else {return(x * faktorial (x-1));}
}

var a = 5
console.log('faktorial '+a+'! = '+faktorial(a));

function kali(x) {
    if (x<2) {return 1;}
    else {return (x*tiga());}
}
function tiga(){
    return 3;
}
console.log (kali (5))