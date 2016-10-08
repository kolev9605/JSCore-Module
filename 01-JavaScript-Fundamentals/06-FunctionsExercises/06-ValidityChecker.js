"use strict";

function solve([x1,y1,x2,y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

    console.log(isDistanceValid(x1, y1, 0, 0));
    console.log(isDistanceValid(x2, y2, 0, 0));
    console.log(isDistanceValid(x1, y1, x2, y2));

    function isDistanceValid(x1, y1, x2, y2) {
        if (getDistance(x1, y1, x2, y2) != Math.round(getDistance(x1, y1, x2, y2))) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        }
    }

    function getDistance(x1, y1, x2, y2) {
        let d = Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));

        return d;
    }
}

solve(['2','1','1','1']);