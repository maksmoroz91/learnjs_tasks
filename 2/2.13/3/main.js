'use strict';

let enteredNumber;

do {
    enteredNumber = prompt('Введите число больше 100:', 0);
} while (enteredNumber < 101 && enteredNumber);