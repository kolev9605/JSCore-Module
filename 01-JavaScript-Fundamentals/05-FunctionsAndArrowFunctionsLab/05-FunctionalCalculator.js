"use strict";

function solve([num1,num2,operator]) {
    let sum = (a, b) => a + b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let subtract = (a, b) => a - b;

    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            return execute(num1, num2, sum);
        case '-':
            return execute(num1, num2, subtract);
        case '*':
            return execute(num1, num2, multiply);
        case '/':
            return execute(num1, num2, divide);
    }

    function execute(num1, num2, operation) {
        return operation(num1, num2);
    }
}

console.log(solve(['2', '5', '*']));

