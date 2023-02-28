'use strict';

function readNumber() {
    let enteredValue = prompt('Введите числовое значение:', 0);

    if (!isFinite(enteredValue)) {
        readNumber();
    } else if (enteredValue === '' || enteredValue === null) {
        showValue(null);
    } else {
        showValue(+enteredValue);
    }

    function showValue(value) {
        alert(`Число: ${value}`);
    }
}

readNumber();

