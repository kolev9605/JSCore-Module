"use strict";

function solve([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);

    if ((x >= xMin && x <= xMax)&&
        (y >= yMin && y <= yMax)) {
        return "inside";
    } else {
        return "outside";
    }
}