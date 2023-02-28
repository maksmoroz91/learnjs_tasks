'use strict';

function sumInput() {
    let arrNum = [];

    while (true) {
        let inputValue = prompt("Введите число", 0);

        if (!isFinite(inputValue) || inputValue === null || inputValue === '') {
            break;
        }
        arrNum.push(+inputValue);
    }

    let sumArray = 0;

    for (let num of arrNum) {
        sumArray += num;
    }
    return sumArray;
}

alert(sumInput());
