"use strict";

function solve([speed1,speed2,time]) {
    [speed1, speed2, time] = [speed1, speed2, time].map(Number);
    let dist1 = speed1 * 1000/3600 * time;
    let dist2 = speed2 * 1000/3600 * time;

    return Math.abs(dist1 - dist2);


}

console.log(solve([0, 60, 3600]));
console.log(solve([11, 10, 120]));