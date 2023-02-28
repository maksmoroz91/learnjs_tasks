'use strict';

function checkSpam(str) {
    let strUpper = str.toUpperCase();
    return strUpper.includes('VIAGRA') || strUpper.includes('XXX');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));