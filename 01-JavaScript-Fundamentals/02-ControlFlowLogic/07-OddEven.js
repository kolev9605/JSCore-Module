"use strict";

function solve(args) {
    let number = Number(args[0]);

    if(number % 1 !== 0) {
        //invalid
        console.log("invalid");
    } else {
        if(number % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    }
}