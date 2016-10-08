function solve(args) {

    let matrix = args.map(row => row.split(' ').map(Number));

    let firstRowSum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((a, b)=>a + b) != firstRowSum) {
            return false;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if(i == matrix.length) break;
        let currentColSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if(j == matrix[i].length) break;
            currentColSum += matrix[j][i];
        }

        if (currentColSum != firstRowSum) {
            return false;
        }
    }

    return true;
}

console.log(solve(['4 5 6', '6 5 4', '5 5 5']));