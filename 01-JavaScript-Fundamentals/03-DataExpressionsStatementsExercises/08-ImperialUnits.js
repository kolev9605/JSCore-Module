"use strict";

function solve([inches]) {
    inches = Number(inches);

    let inchesLeft = inches % 12;
    let foots = Math.floor(inches / 12);

    return `${foots}'-${inchesLeft}"`;
}

console.log(solve([36]));
console.log(solve([55]));
console.log(solve([11]));