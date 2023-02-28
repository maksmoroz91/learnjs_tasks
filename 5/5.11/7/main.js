'use strict';

function getSecondsToTomorrow() {
    let [hours, min, sec] = new Date().toLocaleTimeString().split(':');

    return 86400 - (+hours * 3600 + +min * 60 + +sec);
}

console.log(getSecondsToTomorrow());