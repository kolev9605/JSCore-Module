"use strict";

function solve([year]) {
    //either divisible by 4 but not by 100 or are divisible by 400.
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}