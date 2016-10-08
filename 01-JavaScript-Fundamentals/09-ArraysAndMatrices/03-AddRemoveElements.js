function solve(args) {
    let result = [];
    let currentNumber = 1;
    for (let command of args) {
        if(command == 'add') {
            result.push(currentNumber);
        } else {
            result.pop();
        }

        currentNumber++;
    }

    return result.join('\n') || 'Empty';
}

console.log(solve(['add','add','add','add']));