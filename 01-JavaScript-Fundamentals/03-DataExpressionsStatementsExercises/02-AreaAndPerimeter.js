"use strict";

function solve([a, b]) {
    [a, b] = [a, b].map(Number);

    console.log(a*b);
    console.log(a*2+b*2);
}

console.log(solve([]));