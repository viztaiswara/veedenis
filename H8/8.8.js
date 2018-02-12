function pizza() {
    this.diameter = 30;
}

function pizzaKeju(){
    pizza.call(this)
    this.topping = 'keju';
    this.harga = '50k'
}

var satu = new pizzaKeju();
console.log(satu)