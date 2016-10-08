function solve(arr) {
    let matrix = arr.map(x => x.split(' ').map(Number));

    let sumOfMainDiag = 0;
    let sumOfSecondDiag = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) sumOfMainDiag += matrix[row][col];
            if (row + col == matrix.length - 1) sumOfSecondDiag += matrix[row][col];
        }
    }

    if (sumOfMainDiag == sumOfSecondDiag) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (!(row == col || row + col == matrix.length - 1)) {
                    matrix[row][col] = sumOfMainDiag;
                }
            }
        }
    }

    return matrix.map(x => x.join(' ')).join('\n');
}

console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));