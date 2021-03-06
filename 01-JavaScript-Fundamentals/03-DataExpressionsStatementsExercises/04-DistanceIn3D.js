"use strict";

function solve([x1,y1,z1,x2,y2,z2]) {
    [x1, y1, z1, x2, y2, z2] = [x1, y1, z1, x2, y2, z2].map(Number);

    return Math.sqrt(
        Math.pow(x2 - x1, 2) +
        Math.pow(y2 - y1, 2) +
        Math.pow(z2 - z1, 2)
    )
}

console.log(solve([]));