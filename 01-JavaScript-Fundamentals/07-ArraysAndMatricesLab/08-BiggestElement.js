function solve(args) {
    let matrix = args
        .map(x => x.split(' ')
            .map(Number))

    let currentMax = Number.NEGATIVE_INFINITY;

    for (let arr of matrix) {
        if (currentMax < Math.max(...arr)) {
            currentMax = Math.max(...arr);
        }
    }

    return currentMax;
}

console.log(solve(
    ['20 50 10',
        '8 33 145']
    )
);