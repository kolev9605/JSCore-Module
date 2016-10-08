"use strict";

function solve(args) {
    let r = Number(args[0]);
    let h = Number(args[1]);
    let volume = (Math.PI * r * r * h) / 3;
    let baseArea = Math.PI * r * r;
    let surfaceArea =
        Math.PI * r * Math.sqrt(r * r + h * h);

    let area = baseArea + surfaceArea;

    console.log(`volume ${volume}`);
    console.log(`area ${area}`);

}

solve(['3', '5']);