"use strict";

function solve([text]) {
    let words = text.toUpperCase().split(/\W+/);
    words = words.filter(w => w != '');

    return words.join(', ');
}

console.log(solve(['Hi, how are you?']));