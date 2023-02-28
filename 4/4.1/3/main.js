'use strict';

let sum = 0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

for (let prop in salaries) {
    sum += salaries[prop];
}

console.log(sum);
