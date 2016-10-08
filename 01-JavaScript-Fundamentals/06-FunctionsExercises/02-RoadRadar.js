"use strict";

function solve([speed, location]) {
    speed = Number(speed);
    let limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };

    //console.log(limits[location]);
    if(speed > limits[location]) {
        if(speed <= limits[location] + 20) {
            return 'speeding';
        } else if(speed <= limits[location] + 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

console.log(solve([40, 'city']));
console.log(solve([21, 'residential']));
console.log(solve([120, 'interstate']));
console.log(solve([200, 'motorway']));