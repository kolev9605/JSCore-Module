function solve(args) {
    let matrix = args.map(x => x.split(' ').map(Number));

    let mainDiagSum = 0;
    let secDiagSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                mainDiagSum += matrix[row][col];
            }

            if (row + col == matrix.length - 1) {
                secDiagSum += matrix[row][col];
            }
        }
    }

    return mainDiagSum + ' ' + secDiagSum;
}

console.log(solve(
    ['3 5 17',
        '-1 7 14',
        '1 -8 89']
));