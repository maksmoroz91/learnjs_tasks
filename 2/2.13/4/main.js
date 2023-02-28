'use strict';

let n = 10;
let total;

for (let i = 2; i <= n; i++) {
    total = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) total++;
    }
    if (total == 1) alert(i);
}
