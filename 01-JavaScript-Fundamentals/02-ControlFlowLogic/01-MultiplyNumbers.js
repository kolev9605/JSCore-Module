"use strict";

function solve(args) {
    let result = 1;
    for (let number of args) {
        result *= Number(number);
    }

    return result;
}


solve(['10', '5']);