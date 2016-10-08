function solve([dimentions]) {
    [rows,cols] = dimentions.split(' ').map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0);
    }

    let currentRow = 0;
    let currentCol = 0;
    let maxValue = rows * cols;
    let currentValue = 1;

    matrix[currentRow][currentCol] = currentValue;
    while (true) {
        while (true) {
            if (isInside(currentRow, currentCol + 1, rows, cols) && matrix[currentRow][currentCol + 1] == 0) {
                currentCol++;
                matrix[currentRow][currentCol] = ++currentValue;
            } else {
                break;
            }
        }

        if (currentValue == maxValue) break;

        while (true) {
            if (isInside(currentRow + 1, currentCol, rows, cols) && matrix[currentRow + 1][currentCol] == 0) {
                currentRow++;
                matrix[currentRow][currentCol] = ++currentValue;
            } else {
                break;
            }
        }

        if (currentValue == maxValue) break;

        while (true) {
            if (isInside(currentRow, currentCol - 1, rows, cols) && matrix[currentRow][currentCol - 1] == 0) {
                currentCol--;
                matrix[currentRow][currentCol] = ++currentValue;
            } else {
                break;
            }
        }

        if (currentValue == maxValue) break;

        while (true) {
            if (isInside(currentRow - 1, currentCol, rows, cols) && matrix[currentRow - 1][currentCol] == 0) {
                currentRow--;
                matrix[currentRow][currentCol] = ++currentValue;
            } else {
                break;
            }
        }

        if (currentValue == maxValue) break;
    }

    return matrix.map(x => x.join(' ')).join('\n');

    function isInside(currentRow, currentCol, rows, cols) {
        if (currentRow < rows && currentCol < cols && currentCol >= 0 && currentRow >= 0) {
            return true;
        }

        return false;
    }
}

console.log(solve(['4 4']));