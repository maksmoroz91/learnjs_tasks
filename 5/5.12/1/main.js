'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJSON = JSON.stringify(user);
let userCopy = JSON.parse(userJSON);

