function pizza() {
    this.diameter = 30;
}

function pizzaKeju(){
    pizza.call(this)
    this.topping = 'keju';
    this.harga = '50k'
}
function pizzaJamur(){
    pizza.call(this)
    this.topping = 'jamur';
    this.harga = '65k';
}

var satu = new pizzaKeju();
var dua = new pizzaJamur();
console.log (satu)
console.log(dua)