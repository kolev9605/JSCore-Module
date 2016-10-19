function solve([line]) {
    line = line.replace(/(\-?\d+)\s*\*\s*(\-?\d+(?:.\d+)?)/g, (match, num1, num2) => Number(num1) * Number(num2))
    return line;
}

console.log(solve([
    'My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'
]));