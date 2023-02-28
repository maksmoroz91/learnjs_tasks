'use strict';

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function (row) {
        let split = row.split(' ');
        let a = +split[0];
        let operation = split[1];
        let b = +split[2];

        if (isNaN(a) || isNaN(b) || !this.methods[operation]) {
            return NaN;
        }

        return this.methods[operation](a, b);
    };
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 4");

console.log(result);
console.log(powerCalc.calculate("3 - 7"));
