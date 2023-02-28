'use strict';

function getDateAgo(date, days) {
    let sameDate= new Date(date);

    sameDate.setDate(date.getDate() - days);

    return sameDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 365));