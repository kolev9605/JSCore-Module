"use strict";

function solve(args) {
    console.log(sum());
    console.log(sumInverse());
    console.log(concat());


    function sum() {
        return aggregate(args.map(Number), 0, (a, b) => a + b);
    }

    function sumInverse() {
        return aggregate(args.map(Number), 0, (a, b) => a + (1 / b));
    }

    function concat() {
        return aggregate(args, '', (a, b) => a + b);
    }

    function aggregate(args, initValue, operation) {
        let result = initValue;
        for (let el of args) {
            result = operation(result, el);
        }

        return result;
    }
}

solve(['1', '2', '3']);