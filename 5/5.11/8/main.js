'use strict';

function formatDate(date) {
    let now = new Date();
    let difference = (now - date) / 1000;

    if(difference <= 1) {
        return 'прямо сейчас';
    } else if(difference <= 30) {
        return `${difference} сек. назад`;
    } else if(difference <= 3600) {
        return `${(difference / 60)} мин. назад`;
    }

    let format = (d) => d < 10 ?
        ('0' + d) : d;

    let year = format(date.getFullYear() % 100);
    let month = format(date.getMonth() + 1);
    let day = format(date.getDate());
    let hours = format(date.getHours());
    let minutes = format(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
