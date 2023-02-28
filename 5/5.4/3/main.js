'use strict';

function getMaxSubSum(arr) {
    let totalSum = 0;
    let subtotal = 0;

    for (let i = 0; i < arr.length; i++) {
        subtotal += arr[i];

        if (subtotal < 0) subtotal = 0;

        totalSum = Math.max(totalSum, subtotal);
    }
    return totalSum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));