"use strict";

function solve(args) {
    let n = Number(args[0]);

    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    console.log(result);
}