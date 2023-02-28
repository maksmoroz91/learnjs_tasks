'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sortedWord = word.toUpperCase().split("").sort().join("");
        map.set(sortedWord, word);
    }
    return Array.from(map.values());
}

console.log(aclean(arr));