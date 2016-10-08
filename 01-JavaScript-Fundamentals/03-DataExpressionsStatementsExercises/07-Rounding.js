"use strict";

function solve([number, precision]) {
    [number, precision] = [number, precision].map(Number);
    precision = precision > 15 ? precision = 15 : precision;
    return +number.toFixed(precision);
}

console.log(solve([3.1415926535897932384626433832795, 2]));
console.log(solve([10.5, 3]));
console.log(solve([10.5, 20]));