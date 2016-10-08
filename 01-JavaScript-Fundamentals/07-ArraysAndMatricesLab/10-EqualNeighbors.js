function solve(args) {
    let matrix = args.map(x => x.split(' '));
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (isInside(i, j + 1, matrix.length, matrix[i].length)) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    count++;
                }
            }

            if (isInside(i + 1, j, matrix.length, matrix[i].length)) {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    count++;
                }
            }
        }
    }

    return count;

    function isInside(currentRow, currentCol, rows, cols) {
        if (currentRow < rows && currentCol < cols && currentCol >= 0 && currentRow >= 0) {
            return true;
        }

        return false;
    }
}