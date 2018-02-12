
const fizzbuzz = (num) => {
    for (let i = 1; i<= num; i++){
        if (i%15 === 0) {
            console.log ('FizzBuzz');
        }else if ( i%3 === 0) {
            console.log('Fizz');
        }else if ( i%5 === 0) {
            console.log('Buzz');
        } else {
        console.log (i);
        }
}
};

fizzbuzz(20)

/* fibonacci itu adalah elemen ke 1 +elemen ke 2 dan seterusnya.
jadi, penjumlahan antar 2 element sebelumnya.
*/