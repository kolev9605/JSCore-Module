"use strict";

function solve(args) {
    let cut = x => x / 4;
    let lap = x => x - (x / 100 * 20);
    let grind = x => x - 20;
    let etch = x => x - 2;
    let xRay = x => x + 1;
    let transport = x => Math.floor(x);

    let target = Number(args[0]);
    for (let i = 1; i < args.length; i++) {
        let currentAmount = Number(args[i]);
        processCrystal(target, currentAmount);
    }

    function processCrystal(target, currentAmount) {
        console.log(`Processing chunk ${currentAmount} microns`);
        while (currentAmount != target) {
            let result = executeOperation(currentAmount, target, cut);
            if (result.count != 0) {
                let count = result.count;
                console.log(`Cut x${count}`);
                currentAmount = transport(result.currentAmount);
                console.log('Transporting and washing');

                continue;
            }

            result = executeOperation(currentAmount, target, lap);
            if (result.count != 0) {
                let count = result.count;
                console.log(`Lap x${count}`);
                currentAmount = transport(result.currentAmount);
                console.log('Transporting and washing');
                continue;
            }

            result = executeOperation(currentAmount, target, grind);
            if (result.count != 0) {
                let count = result.count;
                console.log(`Grind x${count}`);
                currentAmount = transport(result.currentAmount);
                console.log('Transporting and washing');
                continue;
            }

            result = executeOperation(currentAmount, target, etch);
            if (result.count != 0) {
                let count = result.count;
                console.log(`Etch x${count}`);
                currentAmount = transport(result.currentAmount);
                console.log('Transporting and washing');
                continue;
            }

            result = xRay(currentAmount);
            console.log(`X-ray x1`);
            break;
        }

        console.log(`Finished crystal ${target} microns`);
    }

    function executeOperation(currentAmount, target, operation) {
        let count = 0;
        let result = 0;
        while (true) {
            result = operation(currentAmount);
            let tolerance = result - target + 1;
            if (tolerance >= 0) {
                count++;
                currentAmount = result;
                continue;
            }

            return {count: count, currentAmount: currentAmount};
        }
    }
}

solve([1000, 4000, 8100]);
solve([1375, 50000]);