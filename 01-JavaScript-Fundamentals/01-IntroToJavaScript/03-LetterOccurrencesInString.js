"use strict";

function solve(args) {
    let text = args[0];
    let letter = args[1];

    let count = 0;
    for (let i of text) {
        if(i === letter) {
            count++;
        }
    }

    return count;
}