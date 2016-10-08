"use strict";

function solve(args) {

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 20 / 100;


    let value = Number(args[0]);
    for (let i = 1; i < args.length; i++) {
       let command = args[i];
        switch (command) {
            case 'chop':
                value = chop(value);
                console.log(value);
                break;
            case 'dice':
                value = dice(value);
                console.log(value);
                break;
            case 'spice':
                value = spice(value);
                console.log(value);
                break;
            case 'bake':
                value = bake(value);
                console.log(value);
                break;
            case 'fillet':
                value = fillet(value);
                console.log(value);
                break;
        }
    }
}

//solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);