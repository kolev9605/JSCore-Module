function solve(arr) {
    //parse input
    let n = Number(arr.splice(0, 1)[0]);
    let template = arr.splice(0, n).map(x=> x.split(' ').map(Number));
    arr = arr.map(x=>x.split(' ').map(Number))

    //logic
    for (let row = 0; row < arr.length; row+=template.length) {
        for (let col = 0; col < arr[row].length; col+=template[0].length) {
            for (let tRow = 0; tRow < template.length; tRow++) {
                for (let tCol = 0; tCol < template[tRow].length; tCol++) {
                    let rowToCheck = row + tRow;
                    let colToCheck = col + tCol;
                    if (isInside(rowToCheck, colToCheck, arr.length, arr[row].length) &&
                        typeof(arr[rowToCheck][colToCheck]) == "number") {
                        let char = decoder(template[tRow][tCol] + arr[rowToCheck][colToCheck])
                        arr[rowToCheck][colToCheck] = char;
                    }
                }
            }
        }
    }

    let mnogoSmeshno = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            mnogoSmeshno.push(arr[i][j]);
        }
    }

    return mnogoSmeshno.join('');

    console.log(arr);

    function decoder(number) {
        if (number % 27 === 0) {
            return ' ';
        }

        return String.fromCharCode(number % 27 + 64)
    }

    function isInside(currentRow, currentCol, rows, cols) {
        if (currentRow < rows && currentCol < cols && currentCol >= 0 && currentRow >= 0) {
            return true;
        }

        return false;
    }
}

console.log(solve(
    [ '2',
        '31 32',
        '74 37',
        '19 0 23 25',
        '22 3 12 17',
        '5 9 23 11',
        '12 18 10 22' ]

));