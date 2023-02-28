'use strict';

let calculator = {
    read() {
        this['a'] = +prompt('Введите значение A:', 0);
        this['b'] = +prompt('Введите значение B:', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );