'use strict';

let user = {
    name: 'John',
    age: 30,
};

function count(obj) {
    return Object.keys(user).length;
}

console.log(count(user));
