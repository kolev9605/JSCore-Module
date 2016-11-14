function solve(array, order) {
    let sortingStrategies = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }

    return array.sort(sortingStrategies[order])
}

solve([14, 7, 17, 6, 8], 'asc');