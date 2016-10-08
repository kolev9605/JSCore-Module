"use strict";

function solve(args) {
    let islands = [
        {
            name: 'Tuvalu',
            x1: 1,
            y1: 1,
            x2: 3,
            y2: 3
        },
        {
            name: 'Tokelau',
            x1: 8,
            y1: 0,
            x2: 9,
            y2: 1
        },
        {
            name: 'Samoa',
            x1: 5,
            y1: 3,
            x2: 7,
            y2: 6
        },
        {
            name: 'Tonga',
            x1: 0,
            y1: 6,
            x2: 2,
            y2: 8
        },
        {
            name: 'Cook',
            x1: 4,
            y1: 7,
            x2: 9,
            y2: 8
        }
    ];

    for (let i = 0; i < args.length; i += 2) {
        let x = Number(args[i]);
        let y = Number(args[i + 1]);

        let isFound = false;
        for (let island of islands) {
           if(isInside(island, x, y)){
               console.log(island.name);
               isFound = true;
               break;
           }
        }

        if(!isFound) {
            console.log('On the bottom of the ocean');
        }
    }

    function isInside(island, x, y) {
        if (x >= island.x1 && x <= island.x2 &&
                y >= island.y1 && y <= island.y2) {
            return true;
        }

        return false
    }
}

solve([6, 4]);