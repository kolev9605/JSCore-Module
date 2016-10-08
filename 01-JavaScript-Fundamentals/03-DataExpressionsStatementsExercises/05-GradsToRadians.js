"use strict";

function solve([grad]) {
    grad = Number(grad);
    let degree = grad * 0.9;

    return degree % 360;
}

console.log(solve([100]));
console.log(solve([400]));
console.log(solve([850]));
console.log(solve([-50]));
