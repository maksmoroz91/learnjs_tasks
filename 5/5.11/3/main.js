'use strict';

function getLocalDay(date) {
    let weekday = date.getDay();

    if (weekday == 0) {
        weekday = 7;
    }
    return weekday;
}

let date = new Date(2012, 0, 8);

console.log(getLocalDay(date));