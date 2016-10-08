"use strict";

function solve(args) {
    let num = Number(args[0]);

    return isPrime(num);

    function isPrime(number) {
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i < Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}

console.log(solve(['2']));