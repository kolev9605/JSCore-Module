"use strict";

function solve([n]) {
    n = Number(n);

    for (let i = 1; i < n; i++) {
        console.log("*".repeat(i));
    }

    for (let i = n; i >= 1 ; i--) {
        console.log("*".repeat(i));
    }
}


solve(['5'])