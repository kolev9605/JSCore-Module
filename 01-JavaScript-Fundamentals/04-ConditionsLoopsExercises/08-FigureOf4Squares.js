"use strict";

function solve(n) {
    n = Number(n);
    let numberOfLines = n % 2 == 0 ? n - 1 : n;
    let border = '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+\n';
    let innerPart = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|\n';

    let result = '';

    result += border;
    for (let i = 0; i < Math.floor(numberOfLines / 2) - 1; i++) {
        result += innerPart;
    }

    result += border;
    for (let i = 0; i < Math.floor(numberOfLines / 2) - 1; i++) {
        result += innerPart;
    }

    result += border;

    return result;
}

console.log(solve(['20']));