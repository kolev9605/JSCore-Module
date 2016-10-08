"use strict";

function solve(args) {
    let number = Number(args[0]);

    while (true) {
        let average = getAverage(number);
        if (average > 5) {
            break;
        }

        number += '9';
        number = Number(number);
    }

    return number;

    function getAverage(number) {
        let sum = 0;
        let numberAsString = ''+number;
        for (let i = 0; i < numberAsString.length; i++) {
            let currentDigit = numberAsString[i];
            sum += Number(currentDigit);
        }

        return sum / (number + '').length;
    }
}

console.log(solve(['101']));