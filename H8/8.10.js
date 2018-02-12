function persegi(sisi) {
    this.sisi = sisi;
    this.luas = function(){
        return Math.pow(this.sisi,2);
    };
    this.kll= function() {
        return 4 * this.sisi;
    };
};

var x=new persegi (8);
console.log('Luas = '+x.luas());
console.log('keliling = '+x.kll())
