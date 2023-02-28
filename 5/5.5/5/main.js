'use strict';

function copySorted(arr) {
    return arr.slice().sort((a, b) => a.localeCompare(b));
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);