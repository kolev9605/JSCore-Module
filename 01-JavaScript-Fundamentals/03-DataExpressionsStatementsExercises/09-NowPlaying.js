"use strict";

function solve([name,artist,duraton]) {
    return `Now Playing: ${artist} - ${name} [${duraton}]`;
}

console.log(solve([]));