"use strict";

function solve(args) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    let thing = args[0];

    if(fruits.indexOf(thing) > -1) {
        console.log("fruit");
    } else if (vegetables.indexOf(thing) > -1) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

solve(['tomato']);