"use strict";

function solve([day,month,year]) {
    [day,month,year] = [day,month,year].map(Number);
    let date = new Date(year,month,day);
    date.setMonth(date.getMonth()-1);

    return new Date(date.getYear(), date.getMonth(), 0).getDate();
}

console.log(solve(['17','3','2002']));
console.log(solve(['13','12','2004']));