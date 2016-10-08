"use strict";

function solve([a,b,c]) {
    [a, b, c] = [a, b, c].map(Number);

    let d = b * b - 4 * a * c;
    if(d < 0) {
        return "No";
    } else if(d == 0) {
        return ((-b) / (2*a));
    } else {
        let root1 = ((-b + Math.sqrt(d))/ (2*a));
        let root2 = ((-b - Math.sqrt(d))/ (2*a));

        console.log(Math.min(root1,root2));
        console.log(Math.max(root1,root2));
    }
}