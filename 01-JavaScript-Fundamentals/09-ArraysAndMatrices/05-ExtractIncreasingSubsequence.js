function solve(args) {
    args = args.map(Number);
    let result = [];
    let currentBiggest = args[0];

    for (let number of args) {
        if (number >= currentBiggest) {
            result.push(number);
            currentBiggest = number;
        }
    }

    return result.join('\n');
}