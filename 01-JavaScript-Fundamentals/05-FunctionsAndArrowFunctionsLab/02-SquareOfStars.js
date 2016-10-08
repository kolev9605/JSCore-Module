"use strict";

function solve([n]) {
    printStars(n);

    function printStars(n = 5) {
        for (let i = 0; i < n; i++) {
            console.log("* ".repeat(n).trim());
        }
    }
}

solve(['2'])