"use strict";

function solve(args) {
    for (let i = 0; i < args.length; i += 3) {
        let x = Number(args[i]);
        let y = Number(args[i + 1]);
        let z = Number(args[i + 2]);

        if (isInside(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function isInside(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if((x >= x1 && x <= x2) &&
                (y >= y1 && y <= y2) &&
                (z >= z1 && z <= z2)) {
            return true;
        } else {
            return false;
        }
    }
}

solve([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);