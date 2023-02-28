'use strict';

function getWeekDay(date) {
    let arrWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return arrWeek[date.getDay()];
}

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));