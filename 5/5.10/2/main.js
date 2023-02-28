'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary(salaries) {
    let maxSalary = 0;
    let employeeName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            employeeName = name;
        }
    }
    return employeeName;
}

console.log(topSalary(salaries));
