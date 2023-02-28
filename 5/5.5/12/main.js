'use strict';

function unique(arr) {
    let uniqueArr = [];

    for(let el of arr) {
        if (uniqueArr.indexOf(el) == -1) {
            uniqueArr.push(el);
        }
    }
    return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));