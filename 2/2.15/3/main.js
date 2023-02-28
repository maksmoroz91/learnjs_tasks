'use strict';

let x = +prompt('Введите число Х:', '');
let n = +prompt('Введите число N:', '');

if (n < 1) {
    alert(`Число ${n} должно быть натуральным!`);
} else {
    alert(pow(x, n));
}

function pow(x, n) {
    return x ** n;
}
