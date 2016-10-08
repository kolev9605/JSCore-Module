function solve([dimentions, point]) {
    let [rows,cols] = dimentions.split(' ').map(Number);
    let [pointRow, pointCol] = point.split(' ').map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0);
    }

    let currentLeftCornerRow = pointRow;
    let currentLeftCornerCol = pointCol;
    let currentRightCornerRow = pointRow;
    let currentRightCornerCol = pointCol;

    let currentValue = 1;

    matrix[pointRow][pointCol] = currentValue;
    while (true) {
        let hasFilledSomething = false;
        currentValue++;

        currentLeftCornerRow--;
        currentLeftCornerCol--;
        currentRightCornerRow++;
        currentRightCornerCol++;

        if (isInside(currentLeftCornerRow, currentLeftCornerCol, rows, cols)) {
            fillFromLeftCorner(currentValue);
            hasFilledSomething = true;
        }

        if (isInside(currentRightCornerRow, currentRightCornerCol, rows, cols)) {
            fillFromRightCorner(currentValue);
            hasFilledSomething = true;
        }

        if(!hasFilledSomething) break;
    }

    return matrix.map(x => x.join(' ')).join('\n');

    function isInside(currentRow, currentCol, rows, cols) {
        if (currentRow < rows && currentCol < cols && currentCol >= 0 && currentRow >= 0) {
            return true;
        }

        return false;
    }

    function fillFromLeftCorner() {
        for (let i = currentLeftCornerCol; i < Math.min(currentRightCornerCol,cols); i++) {
            matrix[currentLeftCornerRow][i] = currentValue;
        }

        for (let i = currentLeftCornerRow; i < Math.min(currentRightCornerRow,cols); i++) {
            matrix[i][currentLeftCornerCol] = currentValue;
        }
    }

    function fillFromRightCorner() {
        for (let i = currentRightCornerCol; i >= Math.max(currentLeftCornerCol, 0); i--) {
            matrix[currentRightCornerRow][i] = currentValue;
        }

        for (let i = currentRightCornerRow; i >= Math.max(currentLeftCornerRow, 0); i--) {
            matrix[i][currentRightCornerCol] = currentValue;
        }
    }
}

console.log(solve(['6 6',
    '2 2']));