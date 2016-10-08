"use strict";

function solve(args) {
    let sum = 0;
    for (let i of args) {
        sum+=Number(i);
    }
    let vat = sum * 0.20;
    let total = sum * 1.20;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}